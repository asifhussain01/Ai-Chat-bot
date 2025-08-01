// import { RequestHandler } from "express";

// export interface ChatMessage {
//   id: string;
//   content: string;
//   sender: "user" | "bot";
//   timestamp: Date;
// }

// export interface ChatRequest {
//   message: string;
//   conversationId?: string;
//   context?: string[];
// }

// export interface ChatResponse {
//   message: string;
//   conversationId: string;
//   suggestions?: string[];
//   responseTime: number;
// }

// // Simple AI response simulation - replace with actual AI service
// const generateAIResponse = async (userMessage: string, context?: string[]): Promise<string> => {
//   // Simulate processing time
//   await new Promise(resolve => setTimeout(resolve, 500 + Math.random() * 1500));
  
//   const lowerMessage = userMessage.toLowerCase();
  
//   // Context-aware responses
//   if (context && context.length > 0) {
//     const lastMessages = context.join(" ").toLowerCase();
//     if (lastMessages.includes("pricing") && lowerMessage.includes("more")) {
//       return "I'd be happy to explain more about our pricing! We offer three main plans: Starter ($29/month), Professional ($79/month), and Enterprise ($299/month). Each plan includes different conversation limits and features. Would you like me to recommend the best plan for your needs?";
//     }
//     if (lastMessages.includes("features") && lowerMessage.includes("integration")) {
//       return "Great question about integrations! Our platform supports over 50+ integrations including Slack, Salesforce, Shopify, WordPress, and many more. We also provide REST APIs and SDKs for custom integrations. What specific platform are you looking to integrate with?";
//     }
//   }
  
//   // Keyword-based responses
//   if (lowerMessage.includes("hello") || lowerMessage.includes("hi") || lowerMessage.includes("hey")) {
//     return "Hello! I'm your AI assistant. I can help you with questions about our chatbot platform, pricing, features, or any other inquiries. What would you like to know?";
//   }
  
//   if (lowerMessage.includes("pricing") || lowerMessage.includes("cost") || lowerMessage.includes("price")) {
//     return "Our pricing is designed to scale with your needs:\n\n• **Starter Plan**: $29/month - Perfect for small businesses (1,000 conversations/month)\n• **Professional Plan**: $79/month - Great for growing companies (10,000 conversations/month)\n• **Enterprise Plan**: $299/month - Unlimited conversations with custom features\n\nAll plans include a 14-day free trial. Would you like to know more about any specific plan?";
//   }
  
//   if (lowerMessage.includes("features") || lowerMessage.includes("capabilities")) {
//     return "Our AI chatbot platform includes powerful features:\n\n• Advanced NLP with intent recognition\n• Multi-channel support (website, WhatsApp, Telegram)\n• 50+ language support with real-time translation\n• Enterprise-grade security and compliance\n• Detailed analytics and insights\n• Easy integration with existing systems\n\nWould you like me to explain any of these features in more detail?";
//   }
  
//   if (lowerMessage.includes("integration") || lowerMessage.includes("api")) {
//     return "Integration is easy with our platform! We offer:\n\n• REST APIs for custom development\n• Pre-built integrations for popular platforms\n• WebSocket support for real-time communication\n• SDKs in multiple programming languages\n• Comprehensive documentation and code examples\n\nOur technical team can also help with custom integrations. What platform are you looking to integrate with?";
//   }
  
//   if (lowerMessage.includes("support") || lowerMessage.includes("help")) {
//     return "We're here to help! Our support options include:\n\n• 24/7 live chat for urgent issues\n• Email support with responses within 24 hours\n• Phone support during business hours\n• Comprehensive documentation and tutorials\n• Dedicated account managers for Enterprise customers\n\nHow can I assist you today?";
//   }
  
//   if (lowerMessage.includes("demo") || lowerMessage.includes("trial")) {
//     return "I'd love to help you get started! We offer:\n\n• **Free 14-day trial** - No credit card required\n• **Live demo sessions** - See the platform in action\n• **Custom demos** - Tailored to your specific use case\n\nYou can start your free trial right now, or I can schedule a personalized demo with our team. Which would you prefer?";
//   }
  
//   if (lowerMessage.includes("ai") || lowerMessage.includes("artificial intelligence")) {
//     return "Our AI technology is built on advanced natural language processing models that understand context, intent, and nuance. Key capabilities include:\n\n• Intent recognition and entity extraction\n• Sentiment analysis and emotion detection\n• Multi-turn conversation handling\n• Custom model training for your domain\n• Continuous learning from interactions\n\nThe AI gets smarter over time as it learns from your specific use cases. Would you like to know more about how we train and customize the AI for your business?";
//   }
  
//   if (lowerMessage.includes("security") || lowerMessage.includes("privacy")) {
//     return "Security and privacy are our top priorities:\n\n• **SOC 2 Type II compliance** for enterprise security\n• **End-to-end encryption** for all data transmission\n• **GDPR compliance** with data residency options\n• **Role-based access controls** for team management\n• **Regular security audits** and penetration testing\n\nWe also offer on-premise deployment options for maximum security. Would you like more details about our security measures?";
//   }
  
//   if (lowerMessage.includes("thank")) {
//     return "You're very welcome! I'm glad I could help. If you have any other questions about our AI chatbot platform, features, pricing, or anything else, feel free to ask. I'm here to assist you!";
//   }
  
//   // Default responses for unrecognized queries
//   const defaultResponses = [
//     `That's an interesting question about "${userMessage}". Let me help you with that! Our AI chatbot platform is designed to handle a wide variety of use cases. Could you provide more context about what you're specifically looking to achieve?`,
//     `I'd be happy to help you with that! While I can discuss many aspects of our AI chatbot platform, could you tell me more about your specific needs? Are you interested in features, pricing, integration, or something else?`,
//     `Great question! Our platform is quite versatile and can likely address what you're asking about. To give you the most helpful response, could you share more details about your use case or what you're trying to accomplish?`
//   ];
  
//   return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
// };

// export const handleChatMessage: RequestHandler = async (req, res) => {
//   try {
//     const { message, conversationId, context }: ChatRequest = req.body;
    
//     if (!message || typeof message !== 'string' || message.trim().length === 0) {
//       return res.status(400).json({ 
//         error: "Message is required and cannot be empty" 
//       });
//     }
    
//     const startTime = Date.now();
    
//     // Generate AI response
//     const aiResponse = await generateAIResponse(message.trim(), context);
    
//     const responseTime = Date.now() - startTime;
    
//     // Generate conversation ID if not provided
//     const currentConversationId = conversationId || `conv_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    
//     // Generate contextual suggestions based on the response
//     const suggestions = generateSuggestions(aiResponse);
    
//     const response: ChatResponse = {
//       message: aiResponse,
//       conversationId: currentConversationId,
//       suggestions,
//       responseTime
//     };
    
//     res.json(response);
    
//   } catch (error) {
//     console.error('Chat error:', error);
//     res.status(500).json({ 
//       error: "Internal server error",
//       message: "I apologize, but I'm experiencing technical difficulties. Please try again in a moment."
//     });
//   }
// };

// const generateSuggestions = (response: string): string[] => {
//   const lowerResponse = response.toLowerCase();
  
//   if (lowerResponse.includes("pricing") || lowerResponse.includes("plan")) {
//     return [
//       "Tell me more about the Professional plan",
//       "What's included in the free trial?",
//       "Do you offer custom pricing for large volumes?"
//     ];
//   }
  
//   if (lowerResponse.includes("features") || lowerResponse.includes("capabilities")) {
//     return [
//       "How does the AI training work?",
//       "What integrations are available?",
//       "Can you show me analytics features?"
//     ];
//   }
  
//   if (lowerResponse.includes("integration") || lowerResponse.includes("api")) {
//     return [
//       "Show me API documentation",
//       "Help with Slack integration",
//       "What SDKs do you provide?"
//     ];
//   }
  
//   if (lowerResponse.includes("demo") || lowerResponse.includes("trial")) {
//     return [
//       "Start my free trial now",
//       "Schedule a live demo",
//       "What do I need to get started?"
//     ];
//   }
  
//   // Default suggestions
//   return [
//     "Tell me about pricing",
//     "What features do you offer?",
//     "How do I get started?",
//     "Show me integrations"
//   ];
// };


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
