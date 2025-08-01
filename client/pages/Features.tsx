import { 
  Brain, 
  MessageSquare, 
  Globe, 
  Zap, 
  Shield, 
  BarChart3, 
  Users, 
  Smartphone, 
  Clock, 
  Settings, 
  Mic, 
  Languages,
  Eye,
  Lightbulb,
  TrendingUp,
  Lock
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function Features() {
  const coreFeatures = [
    {
      icon: Brain,
      title: "Advanced Natural Language Processing",
      description: "Our AI understands context, intent, and nuance in human language, enabling more natural and meaningful conversations.",
      capabilities: ["Intent Recognition", "Entity Extraction", "Sentiment Analysis", "Context Awareness"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: MessageSquare,
      title: "Multi-Channel Support",
      description: "Deploy your chatbot across all major platforms and channels for consistent customer experience.",
      capabilities: ["Website Integration", "WhatsApp", "Telegram", "Facebook Messenger"],
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Globe,
      title: "Multilingual Capabilities",
      description: "Communicate with customers in their preferred language with built-in translation and localization.",
      capabilities: ["50+ Languages", "Real-time Translation", "Cultural Context", "Regional Preferences"],
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Zap,
      title: "Lightning-Fast Responses",
      description: "Optimized infrastructure ensures sub-second response times for the best user experience.",
      capabilities: ["< 200ms Response Time", "Global CDN", "Auto-scaling", "99.9% Uptime"],
      color: "from-orange-500 to-red-500"
    }
  ];

  const advancedFeatures = [
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-level security with end-to-end encryption and compliance certifications.",
      features: ["SOC 2 Compliant", "GDPR Ready", "Data Encryption", "Access Controls"]
    },
    {
      icon: BarChart3,
      title: "Analytics & Insights",
      description: "Comprehensive analytics to understand user behavior and optimize performance.",
      features: ["Conversation Analytics", "User Journey Mapping", "Performance Metrics", "Custom Reports"]
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Built for teams with role-based access and collaborative development tools.",
      features: ["Role-based Access", "Team Workspaces", "Version Control", "Approval Workflows"]
    },
    {
      icon: Settings,
      title: "Easy Integration",
      description: "Simple APIs and SDKs for seamless integration with your existing systems.",
      features: ["REST APIs", "WebSocket Support", "SDKs Available", "Webhook Integration"]
    },
    {
      icon: Smartphone,
      title: "Mobile Optimized",
      description: "Responsive design that works perfectly on all devices and screen sizes.",
      features: ["Responsive UI", "Touch Optimized", "Offline Support", "App Integration"]
    },
    {
      icon: Clock,
      title: "24/7 Availability",
      description: "Always-on support with intelligent escalation to human agents when needed.",
      features: ["Always Available", "Smart Escalation", "Queue Management", "Human Handoff"]
    }
  ];

  const integrations = [
    { name: "Slack", logo: "🎯", category: "Communication" },
    { name: "Salesforce", logo: "☁️", category: "CRM" },
    { name: "Shopify", logo: "🛒", category: "E-commerce" },
    { name: "WordPress", logo: "📝", category: "CMS" },
    { name: "Zapier", logo: "⚡", category: "Automation" },
    { name: "HubSpot", logo: "🎪", category: "Marketing" },
    { name: "Stripe", logo: "💳", category: "Payments" },
    { name: "Google Analytics", logo: "📊", category: "Analytics" }
  ];

  const useCaseCategories = [
    {
      title: "Customer Support",
      icon: "🎧",
      description: "Automate support tickets and provide instant help",
      features: ["Ticket Routing", "FAQ Automation", "Issue Resolution", "Escalation Management"]
    },
    {
      title: "Sales & Marketing",
      icon: "📈",
      description: "Generate leads and guide customers through sales funnel",
      features: ["Lead Qualification", "Product Recommendations", "Upselling", "Campaign Support"]
    },
    {
      title: "E-commerce",
      icon: "🛍��",
      description: "Enhance shopping experience with personalized assistance",
      features: ["Product Search", "Order Tracking", "Recommendations", "Cart Recovery"]
    },
    {
      title: "Healthcare",
      icon: "🏥",
      description: "Provide medical information and appointment scheduling",
      features: ["Symptom Checker", "Appointment Booking", "Medication Reminders", "Health Tips"]
    },
    {
      title: "Education",
      icon: "📚",
      description: "Support learning with tutoring and course assistance",
      features: ["Homework Help", "Course Information", "Study Plans", "Progress Tracking"]
    },
    {
      title: "Banking & Finance",
      icon: "🏦",
      description: "Secure financial assistance and account management",
      features: ["Account Balance", "Transaction History", "Financial Advice", "Fraud Alerts"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50/90 via-white/95 to-blue-50/90 pt-16">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-purple-100 px-4 py-2 rounded-full text-sm font-medium text-blue-800 mb-8">
            <Lightbulb className="w-4 h-4" />
            Powerful AI Features
          </div>
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent mb-6">
            Everything You Need for Intelligent Conversations
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-12 leading-relaxed">
            Discover the comprehensive suite of features that make our AI chatbot platform the most advanced 
            and flexible solution for businesses of all sizes.
          </p>
        </div>
      </section>

      {/* Core Features */}
      <section className="py-20 px-4 bg-white/70 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Core Capabilities</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The foundational features that power intelligent, natural conversations
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {coreFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300 bg-white/90 backdrop-blur-sm border-0 overflow-hidden">
                  <div className={`h-2 bg-gradient-to-r ${feature.color}`} />
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${feature.color} flex items-center justify-center`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-xl text-gray-900">{feature.title}</CardTitle>
                        <CardDescription className="text-gray-600 mt-1">
                          {feature.description}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {feature.capabilities.map((capability) => (
                        <Badge key={capability} variant="secondary" className="text-xs bg-gray-100">
                          {capability}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Advanced Features Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Advanced Features</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Enterprise-grade capabilities for scalable, secure, and intelligent automation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {advancedFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300 bg-white/80 backdrop-blur-sm border-0 hover:-translate-y-1">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-bold text-lg text-gray-900 mb-3">{feature.title}</h3>
                    <p className="text-gray-600 text-sm mb-4">{feature.description}</p>
                    <ul className="space-y-2">
                      {feature.features.map((item, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-50/80 to-white/90">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Industry Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tailored features for every industry and use case
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {useCaseCategories.map((useCase, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 bg-white/90 backdrop-blur-sm border-0">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4">{useCase.icon}</div>
                  <h3 className="font-bold text-xl text-gray-900 mb-3">{useCase.title}</h3>
                  <p className="text-gray-600 mb-4">{useCase.description}</p>
                  <div className="space-y-2 text-left">
                    {useCase.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Seamless Integrations</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Connect with your favorite tools and platforms
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
            {integrations.map((integration, index) => (
              <div key={index} className="group text-center">
                <div className="w-16 h-16 bg-white rounded-xl shadow-md flex items-center justify-center text-2xl mb-3 group-hover:shadow-lg transition-shadow mx-auto">
                  {integration.logo}
                </div>
                <p className="text-sm font-medium text-gray-900">{integration.name}</p>
                <p className="text-xs text-gray-500">{integration.category}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Performance Stats */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Performance That Delivers</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Industry-leading metrics that power exceptional user experiences
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-white mb-2">
                &lt;200ms
              </div>
              <div className="text-blue-100 font-medium">Average Response Time</div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-white mb-2">
                99.9%
              </div>
              <div className="text-blue-100 font-medium">Uptime Guarantee</div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-white mb-2">
                95%
              </div>
              <div className="text-blue-100 font-medium">Accuracy Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-white mb-2">
                50+
              </div>
              <div className="text-blue-100 font-medium">Languages Supported</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-4xl font-bold text-gray-900 mb-6">
            Ready to Experience These Features?
          </h3>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Start building intelligent conversations today with our comprehensive AI platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8 py-3 rounded-full">
              <MessageSquare className="w-5 h-5 mr-2" />
              Try For Free
            </Button>
            <Button variant="outline" size="lg" className="px-8 py-3 rounded-full border-2">
              Schedule Demo
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
