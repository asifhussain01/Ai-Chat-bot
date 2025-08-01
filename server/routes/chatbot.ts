
import { RequestHandler } from "express";
// To use environment variables, you'll need to install and configure dotenv
// Run: npm install dotenv
// Then add the following to the top of your main server file (e.g., index.ts):
// import * as dotenv from 'dotenv';
// dotenv.config();

// --- INTERFACES (No changes here) ---

export interface ChatMessage {
  id: string;
  content: string;
  sender: "user" | "bot";
  timestamp: Date;
}

export interface ChatRequest {
  message: string;
  conversationId?: string;
  context?: string[]; // Expects an array of previous user messages
}

export interface ChatResponse {
  message: string;
  conversationId: string;
  suggestions?: string[];
  responseTime: number;
}

// --- GEMINI API INTEGRATION ---

// Load the API key from environment variables.
// Make sure to create a .env file in your project root and add:
// GEMINI_API_KEY="your_actual_api_key_here"
const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

// Check if the API key is loaded
if (!GEMINI_API_KEY) {
    throw new Error("GEMINI_API_KEY is not defined in your .env file.");
}

const GEMINI_API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${GEMINI_API_KEY}`;

/**
 * Generates an AI response using the Google Gemini API.
 * @param userMessage The user's latest message.
 * @param context A history of the conversation for context.
 * @returns The AI-generated response string.
 */
const generateAIResponse = async (userMessage: string, context?: string[]): Promise<string> => {
  // System prompt to give the AI a persona and instructions.
  const systemPrompt = `You are a friendly and helpful AI sales and support assistant for "Mad AI", a cutting-edge AI chatbot platform. 
    Your goal is to answer user questions, provide information about features and pricing, and encourage them to sign up for a demo or free trial. 
    Be concise, helpful, and slightly enthusiastic.
    The user's conversation history is provided for context. Respond only to the newest message.`;

  // Construct the conversation history for the API call.
  const contents = [
    {
      role: "user",
      parts: [{ text: systemPrompt }],
    },
    {
      role: "model",
      parts: [{ text: "Understood! I am ChatFlow's AI assistant. How can I help?" }],
    }
  ];

  // Add previous conversation context
  if (context && context.length > 0) {
    context.forEach((msg, i) => {
      // Alternate between user and model roles
      contents.push({
        role: i % 2 === 0 ? "user" : "model",
        parts: [{ text: msg }],
      });
    });
  }

  // Add the latest user message
  contents.push({
    role: "user",
    parts: [{ text: userMessage }],
  });

  const payload = { contents };

  try {
    const apiResponse = await fetch(GEMINI_API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    if (!apiResponse.ok) {
      const errorBody = await apiResponse.text();
      throw new Error(`API request failed with status ${apiResponse.status}: ${errorBody}`);
    }

    const result = await apiResponse.json();
    
    if (result.candidates && result.candidates.length > 0 && result.candidates[0].content.parts[0].text) {
      return result.candidates[0].content.parts[0].text;
    } else {
      // Fallback response if the API returns an unexpected structure
      return "I'm sorry, I couldn't generate a response at the moment. Could you please rephrase your question?";
    }
  } catch (error) {
    console.error("Gemini API call failed:", error);
    return "I apologize, but I'm having trouble connecting to my brain right now. Please try again in a moment.";
  }
};

/**
 * Generates contextual suggestions using the Google Gemini API.
 * @param aiResponse The AI's most recent response to the user.
 * @returns An array of suggested follow-up questions.
 */
const generateSuggestions = async (aiResponse: string): Promise<string[]> => {
    const suggestionPrompt = `Based on the following chatbot response, generate exactly three brief, relevant follow-up questions a user might ask next. Return the output as a JSON array of strings. For example: ["Question 1", "Question 2", "Question 3"].\n\nChatbot Response: "${aiResponse}"`;

    const payload = {
        contents: [{
            role: "user",
            parts: [{ text: suggestionPrompt }]
        }],
        generationConfig: {
            responseMimeType: "application/json",
        }
    };
    
    try {
        const apiResponse = await fetch(GEMINI_API_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });

        if (!apiResponse.ok) {
            throw new Error(`API request failed with status ${apiResponse.status}`);
        }

        const result = await apiResponse.json();
        const responseText = result.candidates[0].content.parts[0].text;
        
        // Clean and parse the JSON response
        const suggestions = JSON.parse(responseText.replace(/```json|```/g, '').trim());
        return Array.isArray(suggestions) ? suggestions : [];

    } catch (error) {
        console.error("Suggestion generation failed:", error);
        // Provide generic default suggestions on failure
        return [
            "Tell me about pricing",
            "What features do you offer?",
            "How do I get started?",
        ];
    }
};


// --- EXPRESS REQUEST HANDLER (Updated to be async) ---


export const handleChatMessage: RequestHandler = async (req, res) => {
  try {
    const { message, conversationId, context }: ChatRequest = req.body;

    if (!message || typeof message !== 'string' || message.trim().length === 0) {
      return res.status(400).json({
        error: "Message is required and cannot be empty"
      });
    }

    const startTime = Date.now();

    // Generate AI response from Gemini
    const aiResponse = await generateAIResponse(message.trim(), context);

    // Generate contextual suggestions based on the AI response
    const suggestions = await generateSuggestions(aiResponse);
    
    const responseTime = Date.now() - startTime;

    // Generate conversation ID if not provided
    const currentConversationId = conversationId || `conv_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;

    const response: ChatResponse = {
      message: aiResponse,
      conversationId: currentConversationId,
      suggestions,
      responseTime
    };

    res.json(response);

  } catch (error) {
    console.error('Chat error:', error);
    res.status(500).json({
      error: "Internal server error",
      message: "I apologize, but I'm experiencing technical difficulties. Please try again in a moment."
    });
  }
};
