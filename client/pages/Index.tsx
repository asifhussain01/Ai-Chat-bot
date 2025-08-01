import { Link } from "react-router-dom";
import { MessageCircle, Send, Brain, Database, Mic, Globe, Smartphone, MessageSquare, ThumbsUp, ThumbsDown, Zap, Users, BarChart3, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Index() {
  const steps = [
    {
      number: "1",
      title: "User Sends a Message",
      description: "User enters a query like: \"What is the capital of France?\"",
      icon: Send,
      channels: ["Website chatbox", "WhatsApp / Telegram", "App (React Native, Android)", "Voice assistant"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      number: "2",
      title: "API Gateway",
      description: "Message is securely routed to our backend processing system",
      icon: Globe,
      channels: ["REST API", "WebSocket", "GraphQL", "Webhook"],
      color: "from-purple-500 to-pink-500"
    },
    {
      number: "3",
      title: "Preprocessing",
      description: "Clean and prepare the text for optimal AI understanding",
      icon: Zap,
      channels: ["Remove extra spaces", "Fix spelling", "Translate (if needed)", "Normalize emojis"],
      color: "from-green-500 to-emerald-500"
    },
    {
      number: "4",
      title: "Intent & Entity Recognition",
      description: "Determines what the user wants (intent) and extracts key information (entities)",
      icon: Brain,
      channels: ["spaCy / Rasa NLU", "Hugging Face transformers", "BERT, GPT (via prompt engineering)"],
      color: "from-orange-500 to-red-500"
    },
    {
      number: "5",
      title: "AI Model Processing",
      description: "Advanced language models generate intelligent, contextual responses",
      icon: Brain,
      channels: ["GPT-4", "Gemini Pro (Google)", "Claude", "Custom fine-tuned models"],
      color: "from-indigo-500 to-purple-500"
    },
    {
      number: "6",
      title: "Response Generation",
      description: "AI creates human-like answers tailored to the user's specific query",
      icon: MessageCircle,
      channels: ["Natural language", "Structured data", "Multimedia content", "Action suggestions"],
      color: "from-teal-500 to-blue-500"
    },
    {
      number: "7",
      title: "Postprocessing",
      description: "Enhance the response with formatting and interactive elements",
      icon: Smartphone,
      channels: ["Format (markdown, HTML)", "Add buttons or quick replies", "Voice response (TTS)", "Rich media"],
      color: "from-pink-500 to-rose-500"
    },
    {
      number: "8",
      title: "Frontend Display",
      description: "User receives the polished, interactive response",
      icon: MessageSquare,
      channels: ["Text responses", "Interactive buttons", "Images & media", "Follow-up suggestions"],
      color: "from-cyan-500 to-teal-500"
    },
    {
      number: "9",
      title: "Data Storage",
      description: "Conversation is saved for context, analytics, and continuous improvement",
      icon: Database,
      channels: ["User messages", "Bot replies", "Timestamps", "User sessions"],
      color: "from-violet-500 to-indigo-500"
    },
    {
      number: "10",
      title: "Feedback Loop",
      description: "Users provide feedback to continuously improve chatbot performance",
      icon: ThumbsUp,
      channels: ["Thumbs up/down", "Rating system", "Detailed feedback", "Usage analytics"],
      color: "from-emerald-500 to-green-500"
    }
  ];

  const useCases = [
    { domain: "Education", useCase: "Homework help bot", icon: "📚" },
    { domain: "Healthcare", useCase: "Symptom checker", icon: "��" },
    { domain: "E-Commerce", useCase: "Product advisor chatbot", icon: "🛒" },
    { domain: "Banking", useCase: "Balance inquiry/chatbot", icon: "🏦" },
    { domain: "Tourism", useCase: "Travel planner bot", icon: "✈️" },
    { domain: "Customer Service", useCase: "24/7 support assistant", icon: "🎧" },
    { domain: "Real Estate", useCase: "Property recommendation", icon: "🏠" },
    { domain: "Food & Dining", useCase: "Recipe and nutrition guide", icon: "🍳" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50/90 via-white/95 to-blue-50/90 backdrop-blur-sm">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/5 to-cyan-600/10" />
        <div className="relative max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-purple-100 px-4 py-2 rounded-full text-sm font-medium text-blue-800 mb-8">
            <Brain className="w-4 h-4" />
            AI-Powered Conversational Intelligence
          </div>
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent mb-6">
            AI Chatbot
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto mb-8 leading-relaxed">
            A smart virtual assistant that communicates with humans using natural language. 
            It understands questions, processes them intelligently, and gives human-like answers — via text or voice.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full" asChild>
              <Link to="/chat">
                <MessageCircle className="w-5 h-5 mr-2" />
                Tap to Chat
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="px-8 py-3 rounded-full border-2" asChild>
              <Link to="/features">
                Learn More
              </Link>
            </Button>
          </div>
        </div>
      </section>





      {/* Use Cases Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-50/80 to-white/90">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">Popular Use Cases</h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              AI chatbots are transforming industries with intelligent automation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map((useCase, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 bg-white/90 backdrop-blur-sm border-0 hover:-translate-y-1">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4">{useCase.icon}</div>
                  <h4 className="font-bold text-lg text-gray-900 mb-2">{useCase.domain}</h4>
                  <p className="text-gray-600 text-sm">{useCase.useCase}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">Why Choose AI Chatbots?</h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Powerful features that make conversations intelligent and meaningful
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">24/7 Availability</h4>
              <p className="text-gray-600">Always ready to help your customers, regardless of time zones or business hours.</p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <BarChart3 className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Scalable Intelligence</h4>
              <p className="text-gray-600">Handle thousands of conversations simultaneously without compromising quality.</p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Secure & Private</h4>
              <p className="text-gray-600">Enterprise-grade security ensures your data and conversations remain protected.</p>
            </div>
          </div>
        </div>
      </section>



      {/* Footer */}
      <footer className="py-12 px-4 bg-gray-900 text-gray-300">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Brain className="w-6 h-6 text-blue-400" />
            <span className="text-xl font-bold text-white">AI Chatbot</span>
          </div>
          <p className="text-gray-400">
            Intelligent conversations, powered by advanced AI technology.
          </p>
        </div>
      </footer>
    </div>
  );
}
