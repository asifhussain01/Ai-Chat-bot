import React, { useState } from "react";
import { Check, X, Zap, Crown, Rocket, MessageCircle, Users, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      name: "Starter",
      description: "Perfect for small businesses and startups",
      icon: Zap,
      price: { monthly: 29, annual: 24 },
      features: [
        "1,000 conversations/month",
        "Basic AI responses",
        "Email support",
        "Website integration",
        "Basic analytics",
        "Standard templates"
      ],
      limitations: [
        "No custom training",
        "Limited integrations",
        "No priority support"
      ],
      color: "from-blue-500 to-cyan-500",
      popular: false
    },
    {
      name: "Professional",
      description: "Ideal for growing businesses",
      icon: Crown,
      price: { monthly: 79, annual: 65 },
      features: [
        "10,000 conversations/month",
        "Advanced AI with custom training",
        "Priority support",
        "Multi-channel deployment",
        "Advanced analytics",
        "Custom branding",
        "API access",
        "Team collaboration (5 users)",
        "Custom workflows"
      ],
      limitations: [
        "Limited white-label options"
      ],
      color: "from-purple-500 to-pink-500",
      popular: true
    },
    {
      name: "Enterprise",
      description: "For large organizations",
      icon: Rocket,
      price: { monthly: 299, annual: 249 },
      features: [
        "Unlimited conversations",
        "Custom AI model training",
        "24/7 dedicated support",
        "All platform integrations",
        "Advanced security (SOC 2)",
        "White-label solution",
        "Custom development",
        "Unlimited team members",
        "SLA guarantee",
        "On-premise deployment",
        "Custom reporting"
      ],
      limitations: [],
      color: "from-orange-500 to-red-500",
      popular: false
    }
  ];

  const features = [
    {
      category: "Core Features",
      items: [
        { name: "AI Conversations", starter: "1,000/mo", pro: "10,000/mo", enterprise: "Unlimited" },
        { name: "Response Quality", starter: "Basic", pro: "Advanced", enterprise: "Custom" },
        { name: "Training Data", starter: "❌", pro: "✅", enterprise: "✅ Custom" },
        { name: "Multi-language", starter: "5 languages", pro: "25 languages", enterprise: "50+ languages" }
      ]
    },
    {
      category: "Integrations",
      items: [
        { name: "Website Widget", starter: "✅", pro: "✅", enterprise: "✅" },
        { name: "Social Media", starter: "❌", pro: "✅", enterprise: "✅" },
        { name: "CRM Integration", starter: "❌", pro: "Basic", enterprise: "Advanced" },
        { name: "API Access", starter: "❌", pro: "✅", enterprise: "✅ + Custom" }
      ]
    },
    {
      category: "Analytics & Reporting",
      items: [
        { name: "Basic Analytics", starter: "✅", pro: "✅", enterprise: "✅" },
        { name: "Advanced Reports", starter: "❌", pro: "✅", enterprise: "✅" },
        { name: "Custom Dashboards", starter: "❌", pro: "❌", enterprise: "✅" },
        { name: "Data Export", starter: "❌", pro: "CSV", enterprise: "All formats" }
      ]
    },
    {
      category: "Support & Security",
      items: [
        { name: "Support Level", starter: "Email", pro: "Priority", enterprise: "24/7 Dedicated" },
        { name: "Security Compliance", starter: "Basic", pro: "Enhanced", enterprise: "SOC 2 + Custom" },
        { name: "SLA", starter: "❌", pro: "99.5%", enterprise: "99.9%" },
        { name: "Data Location", starter: "US", pro: "US/EU", enterprise: "Custom" }
      ]
    }
  ];

  const addOns = [
    {
      name: "Voice Integration",
      description: "Add speech-to-text and text-to-speech capabilities",
      price: 19,
      icon: "🎤"
    },
    {
      name: "Advanced Analytics",
      description: "Detailed conversation insights and user behavior tracking",
      price: 29,
      icon: "📊"
    },
    {
      name: "Custom Integrations",
      description: "Connect to any third-party service with custom development",
      price: 99,
      icon: "🔗"
    },
    {
      name: "Priority Training",
      description: "Faster custom model training with dedicated resources",
      price: 49,
      icon: "⚡"
    }
  ];

  const faqs = [
    {
      question: "Can I upgrade or downgrade my plan?",
      answer: "Yes, you can change your plan at any time. Changes take effect immediately, and we'll prorate any billing differences."
    },
    {
      question: "What happens if I exceed my conversation limit?",
      answer: "We'll notify you when you approach your limit. You can upgrade your plan or purchase additional conversations at $0.05 per conversation."
    },
    {
      question: "Do you offer a free trial?",
      answer: "Yes! All plans come with a 14-day free trial. No credit card required to start."
    },
    {
      question: "Is there a setup fee?",
      answer: "No setup fees for any plan. We help you get started with onboarding and training materials."
    },
    {
      question: "Can I cancel anytime?",
      answer: "Yes, you can cancel your subscription at any time. Your service will continue until the end of your billing period."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50/90 via-white/95 to-blue-50/90 pt-16">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-purple-100 px-4 py-2 rounded-full text-sm font-medium text-blue-800 mb-8">
            <BarChart3 className="w-4 h-4" />
            Simple, Transparent Pricing
          </div>
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent mb-6">
            Choose Your AI Plan
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-12 leading-relaxed">
            Start free, scale as you grow. No hidden fees, no surprises. 
            Get the power of AI conversations at a price that works for your business.
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center gap-4 mb-12">
            <span className={`text-sm font-medium ${!isAnnual ? 'text-gray-900' : 'text-gray-500'}`}>
              Monthly
            </span>
            <Switch
              checked={isAnnual}
              onCheckedChange={setIsAnnual}
              className="data-[state=checked]:bg-gradient-to-r data-[state=checked]:from-blue-600 data-[state=checked]:to-purple-600"
            />
            <span className={`text-sm font-medium ${isAnnual ? 'text-gray-900' : 'text-gray-500'}`}>
              Annual
            </span>
            {isAnnual && (
              <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
                Save 20%
              </Badge>
            )}
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {plans.map((plan, index) => {
              const Icon = plan.icon;
              const price = isAnnual ? plan.price.annual : plan.price.monthly;
              
              return (
                <Card key={index} className={`relative group transition-all duration-300 bg-white/90 backdrop-blur-sm border-0 overflow-hidden ${
                  plan.popular ? 'scale-105 shadow-2xl' : 'hover:shadow-xl hover:-translate-y-2'
                }`}>
                  {plan.popular && (
                    <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-center py-2 text-sm font-medium">
                      Most Popular
                    </div>
                  )}
                  
                  <div className={`h-2 bg-gradient-to-r ${plan.color}`} />
                  
                  <CardHeader className={`text-center ${plan.popular ? 'pt-8' : 'pt-6'}`}>
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${plan.color} flex items-center justify-center mx-auto mb-4`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-2xl text-gray-900">{plan.name}</CardTitle>
                    <CardDescription className="text-gray-600">{plan.description}</CardDescription>
                    <div className="mt-6">
                      <div className="flex items-baseline justify-center gap-1">
                        <span className="text-4xl font-bold text-gray-900">${price}</span>
                        <span className="text-gray-600">/{isAnnual ? 'mo' : 'month'}</span>
                      </div>
                      {isAnnual && (
                        <p className="text-sm text-gray-500 mt-1">
                          Billed annually (${price * 12}/year)
                        </p>
                      )}
                    </div>
                  </CardHeader>

                  <CardContent className="px-6 pb-8">
                    <Button 
                      className={`w-full mb-6 ${
                        plan.popular 
                          ? 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700' 
                          : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700'
                      }`}
                      size="lg"
                    >
                      {plan.name === 'Enterprise' ? 'Contact Sales' : 'Start Free Trial'}
                    </Button>

                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">Included:</h4>
                        <ul className="space-y-2">
                          {plan.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start gap-3 text-sm">
                              <Check className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                              <span className="text-gray-700">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {plan.limitations.length > 0 && (
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-3">Limitations:</h4>
                          <ul className="space-y-2">
                            {plan.limitations.map((limitation, idx) => (
                              <li key={idx} className="flex items-start gap-3 text-sm">
                                <X className="w-4 h-4 text-gray-400 flex-shrink-0 mt-0.5" />
                                <span className="text-gray-600">{limitation}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Feature Comparison Table */}
      <section className="py-20 px-4 bg-white/70 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Compare Plans</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Detailed comparison of features across all plans
            </p>
          </div>

          <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden border border-gray-100">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gradient-to-r from-blue-500 to-purple-500 text-white">
                    <th className="px-6 py-4 text-left font-semibold">Features</th>
                    <th className="px-6 py-4 text-center font-semibold">Starter</th>
                    <th className="px-6 py-4 text-center font-semibold">Professional</th>
                    <th className="px-6 py-4 text-center font-semibold">Enterprise</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {features.map((category, categoryIdx) => (
                    <React.Fragment key={categoryIdx}>
                      <tr className="bg-gray-50">
                        <td colSpan={4} className="px-6 py-3 font-semibold text-gray-900">
                          {category.category}
                        </td>
                      </tr>
                      {category.items.map((item, itemIdx) => (
                        <tr key={itemIdx} className="hover:bg-blue-50/50 transition-colors">
                          <td className="px-6 py-4 font-medium text-gray-900">{item.name}</td>
                          <td className="px-6 py-4 text-center text-gray-700">{item.starter}</td>
                          <td className="px-6 py-4 text-center text-gray-700">{item.pro}</td>
                          <td className="px-6 py-4 text-center text-gray-700">{item.enterprise}</td>
                        </tr>
                      ))}
                    </React.Fragment>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Add-ons */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Add-ons & Extensions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Enhance your plan with specialized features
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {addOns.map((addon, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 bg-white/80 backdrop-blur-sm border-0 hover:-translate-y-1">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4">{addon.icon}</div>
                  <h3 className="font-bold text-lg text-gray-900 mb-2">{addon.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">{addon.description}</p>
                  <div className="text-2xl font-bold text-blue-600 mb-4">
                    +${addon.price}/mo
                  </div>
                  <Button variant="outline" size="sm" className="w-full">
                    Add to Plan
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-50/80 to-white/90">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">
              Everything you need to know about our pricing
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="bg-white/90 backdrop-blur-sm border-0">
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg text-gray-900 mb-3">{faq.question}</h3>
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Get Started?
          </h3>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of businesses already using AI to transform their customer conversations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-full font-semibold">
              <MessageCircle className="w-5 h-5 mr-2" />
              Start Free Trial
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10 px-8 py-3 rounded-full">
              Contact Sales
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
