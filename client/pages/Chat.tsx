import { useState, useRef, useEffect } from "react";
import { Send, Bot, User, Loader2, ThumbsUp, ThumbsDown, Copy, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface Message {
  id: string;
  content: string;
  sender: "user" | "bot";
  timestamp: Date;
  isTyping?: boolean;
}

interface SuggestedPrompt {
  text: string;
  category: string;
}

export default function Chat() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      content: "Hello! I'm your AI assistant. I can help you with questions, provide information, and have natural conversations. What would you like to know?",
      sender: "bot",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const suggestedPrompts: SuggestedPrompt[] = [
    { text: "What is artificial intelligence?", category: "Education" },
    { text: "How do chatbots work?", category: "Technology" },
    { text: "Tell me a joke", category: "Entertainment" },
    { text: "What's the weather like today?", category: "General" },
    { text: "Explain quantum physics simply", category: "Science" },
    { text: "Help me write an email", category: "Productivity" },
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const [conversationId, setConversationId] = useState<string>("");
  const [suggestions, setSuggestions] = useState<string[]>([]);

  const sendMessageToAPI = async (userMessage: string): Promise<{ message: string; suggestions: string[] }> => {
    const context = messages
      .filter(msg => msg.sender === "user")
      .slice(-3) // Last 3 user messages for context
      .map(msg => msg.content);

    const response = await fetch("/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message: userMessage,
        conversationId: conversationId || undefined,
        context: context.length > 0 ? context : undefined,
      }),
    });

    if (!response.ok) {
      throw new Error("Failed to get response from AI");
    }

    const data = await response.json();

    if (!conversationId) {
      setConversationId(data.conversationId);
    }

    return {
      message: data.message,
      suggestions: data.suggestions || [],
    };
  };

  const handleSendMessage = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: input.trim(),
      sender: "user",
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    // Add typing indicator
    const typingMessage: Message = {
      id: "typing",
      content: "",
      sender: "bot",
      timestamp: new Date(),
      isTyping: true,
    };
    setMessages(prev => [...prev, typingMessage]);

    try {
      const response = await sendMessageToAPI(userMessage.content);

      // Remove typing indicator and add actual response
      setMessages(prev => {
        const filtered = prev.filter(msg => msg.id !== "typing");
        return [...filtered, {
          id: Date.now().toString(),
          content: response.message,
          sender: "bot",
          timestamp: new Date(),
        }];
      });

      // Update suggestions
      setSuggestions(response.suggestions);
    } catch (error) {
      setMessages(prev => {
        const filtered = prev.filter(msg => msg.id !== "typing");
        return [...filtered, {
          id: Date.now().toString(),
          content: "I apologize, but I encountered an error. Please try again.",
          sender: "bot",
          timestamp: new Date(),
        }];
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleSuggestedPrompt = (prompt: string) => {
    setInput(prompt);
  };

  const copyMessage = (content: string) => {
    navigator.clipboard.writeText(content);
  };

  const clearChat = () => {
    setMessages([{
      id: "1",
      content: "Hello! I'm your AI assistant. I can help you with questions, provide information, and have natural conversations. What would you like to know?",
      sender: "bot",
      timestamp: new Date(),
    }]);
    setSuggestions([]);
    setConversationId("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50/90 via-white/95 to-blue-50/90 pt-16">
      <div className="max-w-6xl mx-auto p-4 h-[calc(100vh-4rem)] flex flex-col lg:flex-row gap-6">
        {/* Chat Interface */}
        <div className="flex-1 flex flex-col bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-200/50 overflow-hidden">
          {/* Chat Header */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 text-white">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <Bot className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="font-semibold">AI Assistant</h2>
                  <p className="text-sm text-blue-100">Online • Ready to help</p>
                </div>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={clearChat}
                className="text-white hover:bg-white/20"
              >
                <RefreshCw className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div key={message.id} className={cn("flex gap-3", message.sender === "user" ? "justify-end" : "justify-start")}>
                {message.sender === "bot" && (
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Bot className="w-4 h-4 text-white" />
                  </div>
                )}
                
                <div className={cn(
                  "max-w-[80%] group",
                  message.sender === "user" ? "order-2" : ""
                )}>
                  <div className={cn(
                    "p-3 rounded-2xl relative",
                    message.sender === "user" 
                      ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white" 
                      : "bg-gray-100 text-gray-900",
                    message.isTyping && "min-h-[3rem] flex items-center"
                  )}>
                    {message.isTyping ? (
                      <div className="flex items-center gap-2">
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span className="text-sm">AI is thinking...</span>
                      </div>
                    ) : (
                      <>
                        <p className="whitespace-pre-wrap">{message.content}</p>
                        {message.sender === "bot" && (
                          <div className="opacity-0 group-hover:opacity-100 transition-opacity absolute -top-2 -right-2 flex gap-1">
                            <Button
                              variant="ghost"
                              size="sm"
                              className="h-6 w-6 p-0 bg-white shadow-sm hover:bg-gray-50"
                              onClick={() => copyMessage(message.content)}
                            >
                              <Copy className="w-3 h-3" />
                            </Button>
                            <Button
                              variant="ghost"
                              size="sm"
                              className="h-6 w-6 p-0 bg-white shadow-sm hover:bg-gray-50"
                            >
                              <ThumbsUp className="w-3 h-3" />
                            </Button>
                            <Button
                              variant="ghost"
                              size="sm"
                              className="h-6 w-6 p-0 bg-white shadow-sm hover:bg-gray-50"
                            >
                              <ThumbsDown className="w-3 h-3" />
                            </Button>
                          </div>
                        )}
                      </>
                    )}
                  </div>
                  <p className="text-xs text-gray-500 mt-1 px-3">
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </p>
                </div>

                {message.sender === "user" && (
                  <div className="w-8 h-8 bg-gradient-to-r from-gray-400 to-gray-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1 order-1">
                    <User className="w-4 h-4 text-white" />
                  </div>
                )}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Suggestions */}
          {suggestions.length > 0 && (
            <div className="px-4 pb-2 border-t border-gray-200/50 bg-gray-50/50">
              <div className="flex flex-wrap gap-2 pt-3">
                <span className="text-xs text-gray-500 w-full mb-1">Suggested questions:</span>
                {suggestions.map((suggestion, index) => (
                  <button
                    key={index}
                    onClick={() => handleSuggestedPrompt(suggestion)}
                    className="px-3 py-1 text-xs bg-white border border-gray-200 rounded-full hover:bg-blue-50 hover:border-blue-300 transition-colors"
                  >
                    {suggestion}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input Area */}
          <div className="p-4 border-t border-gray-200/50 bg-gray-50/50">
            <div className="flex gap-3 items-end">
              <div className="flex-1">
                <Input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type your message..."
                  className="min-h-[44px] resize-none border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                  disabled={isLoading}
                />
              </div>
              <Button
                onClick={handleSendMessage}
                disabled={!input.trim() || isLoading}
                className="h-11 w-11 p-0 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
              >
                {isLoading ? (
                  <Loader2 className="w-4 h-4 animate-spin" />
                ) : (
                  <Send className="w-4 h-4" />
                )}
              </Button>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="lg:w-80 space-y-6">
          {/* Suggested Prompts */}
          <Card className="bg-white/80 backdrop-blur-sm border-gray-200/50">
            <CardContent className="p-4">
              <h3 className="font-semibold text-gray-900 mb-3">Try asking about:</h3>
              <div className="space-y-2">
                {suggestedPrompts.map((prompt, index) => (
                  <button
                    key={index}
                    onClick={() => handleSuggestedPrompt(prompt.text)}
                    className="w-full text-left p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors group"
                  >
                    <div className="flex items-center justify-between">
                      <p className="text-sm text-gray-700 group-hover:text-gray-900">{prompt.text}</p>
                      <Badge variant="secondary" className="ml-2 text-xs">
                        {prompt.category}
                      </Badge>
                    </div>
                  </button>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Chat Info */}
          <Card className="bg-white/80 backdrop-blur-sm border-gray-200/50">
            <CardContent className="p-4">
              <h3 className="font-semibold text-gray-900 mb-3">Chat Features</h3>
              <div className="space-y-3 text-sm text-gray-600">
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p>Real-time AI responses</p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p>Natural language understanding</p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p>Context-aware conversations</p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p>Multi-topic support</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
