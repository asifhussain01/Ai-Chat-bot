import { useState } from "react";
import { Mail, Phone, MapPin, Clock, Send, MessageCircle, Book, HelpCircle, Users, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: "",
    priority: ""
  });

  const [submissionStatus, setSubmissionStatus] = useState({
    isSubmitting: false,
    message: "",
    isError: false,
  });

  const contactMethods = [
    {
      icon: Mail,
      title: "Email Support",
      description: "Get help via email with detailed responses",
      contact: "asifh9336@gmail.com",
      responseTime: "Within 24 hours",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Phone,
      title: "Phone Support",
      description: "Speak directly with our support team",
      contact: "+91 8271169648",
      responseTime: "Mon-Fri, 9AM-6PM IST",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: MessageCircle,
      title: "Live Chat",
      description: "Real-time chat support for urgent issues",
      contact: "Available on website",
      responseTime: "Average 2 minutes",
      color: "from-purple-500 to-pink-500"
    }
  ];

  const supportOptions = [
    {
      icon: HelpCircle,
      title: "Technical Support",
      description: "Help with integration, bugs, and technical issues",
      features: ["API documentation", "Code examples", "Troubleshooting guides", "Expert assistance"]
    },
    {
      icon: Users,
      title: "Account Management",
      description: "Billing, subscription, and account-related questions",
      features: ["Billing support", "Plan changes", "Account settings", "Usage reports"]
    },
    {
      icon: Book,
      title: "Training & Onboarding",
      description: "Get the most out of your AI chatbot implementation",
      features: ["Setup guidance", "Best practices", "Custom training", "Success metrics"]
    },
    {
      icon: Zap,
      title: "Enterprise Support",
      description: "Dedicated support for enterprise customers",
      features: ["Dedicated manager", "Priority response", "Custom SLA", "24/7 availability"]
    }
  ];

  const officeLocations = [
    {
      city: "Indore",
      address: "232 C mohini vihar\nIndore, MP 452001",
      phone: " +91 8271169648 ",
      timezone: "IST"
    },
    {
      city: "Delhi",
      address: " 123 Tech Park\nDelhi, DL 110001",
      phone: "+91 9876543210",
      timezone: "IST"
    },
    {
      city: "London",
      address: "789 Tech Street\nLondon, EC1A 1BB, UK",
      phone: "+44 20 7123 4567",
      timezone: "IST"
    }
  ];

  const faqs = [
    {
      question: "How quickly can I get started?",
      answer: "You can start using our AI chatbot within minutes. Sign up for a free trial, and our setup wizard will guide you through the process."
    },
    {
      question: "What kind of support do you offer?",
      answer: "We offer multiple support channels including email, live chat, phone support, and a comprehensive knowledge base. Enterprise customers get dedicated support."
    },
    {
      question: "Can you help with custom integrations?",
      answer: "Yes! Our team can help with custom integrations. Contact our sales team to discuss your specific requirements and get a custom quote."
    },
    {
      question: "Do you offer training for my team?",
      answer: "We provide comprehensive training materials, video tutorials, and can arrange custom training sessions for larger teams."
    }
  ];

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmissionStatus({ isSubmitting: true, message: "", isError: false });

    try {
      const response = await fetch('/api/email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Something went wrong');
      }

      // Success
      setSubmissionStatus({ isSubmitting: false, message: data.message, isError: false });
      setFormData({
        name: "",
        email: "",
        company: "",
        subject: "",
        message: "",
        priority: ""
      });

    } catch (error) {
      // Error
      setSubmissionStatus({ isSubmitting: false, message: error.message, isError: true });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50/90 via-white/95 to-blue-50/90 pt-16">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-purple-100 px-4 py-2 rounded-full text-sm font-medium text-blue-800 mb-8">
            <MessageCircle className="w-4 h-4" />
            We're Here to Help
          </div>
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent mb-6">
            Contact & Support
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-12 leading-relaxed">
            Have questions? Need help? Our expert support team is ready to assist you.
            Get in touch through your preferred channel and we'll help you succeed.
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Get in Touch</h2>
            <p className="text-lg text-gray-600">Choose the best way to reach us</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactMethods.map((method, index) => {
              const Icon = method.icon;
              return (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300 bg-white/90 backdrop-blur-sm border-0 overflow-hidden">
                  <div className={`h-2 bg-gradient-to-r ${method.color}`} />
                  <CardContent className="p-6 text-center">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${method.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="font-bold text-xl text-gray-900 mb-2">{method.title}</h3>
                    <p className="text-gray-600 mb-4">{method.description}</p>
                    <div className="space-y-2">
                      <p className="font-semibold text-gray-900">{method.contact}</p>
                      <Badge variant="secondary" className="text-xs">
                        {method.responseTime}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form & Office Info */}
      <section className="py-20 px-4 bg-white/70 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <Input
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      placeholder="Your full name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <Input
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Company
                    </label>
                    <Input
                      value={formData.company}
                      onChange={(e) => handleInputChange("company", e.target.value)}
                      placeholder="Your company name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Priority Level
                    </label>
                    <Select onValueChange={(value) => handleInputChange("priority", value)} value={formData.priority}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select priority" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="low">Low - General inquiry</SelectItem>
                        <SelectItem value="medium">Medium - Need assistance</SelectItem>
                        <SelectItem value="high">High - Urgent issue</SelectItem>
                        <SelectItem value="critical">Critical - Service down</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <Input
                    value={formData.subject}
                    onChange={(e) => handleInputChange("subject", e.target.value)}
                    placeholder="Brief description of your inquiry"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <Textarea
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    placeholder="Describe your question or issue in detail..."
                    rows={6}
                    required
                  />
                </div>

                {/* Submission Status Message */}
                {submissionStatus.message && (
                  <div className={`p-4 rounded-md text-sm ${submissionStatus.isError ? 'bg-red-100 text-red-800' : 'bg-green-100 text-green-800'}`}>
                    {submissionStatus.message}
                  </div>
                )}

                <Button
                  type="submit"
                  disabled={submissionStatus.isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                  size="lg"
                >
                  {submissionStatus.isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </div>

            {/* Office Locations */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Offices</h2>
              <div className="space-y-6">
                {officeLocations.map((office, index) => (
                  <Card key={index} className="bg-white/90 backdrop-blur-sm border-0">
                    <CardContent className="p-6">
                      <h3 className="font-bold text-lg text-gray-900 mb-3">{office.city}</h3>
                      <div className="space-y-3">
                        <div className="flex items-start gap-3">
                          <MapPin className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                          <div>
                            <p className="text-gray-700 whitespace-pre-line">{office.address}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <Phone className="w-5 h-5 text-gray-400 flex-shrink-0" />
                          <p className="text-gray-700">{office.phone}</p>
                        </div>
                        <div className="flex items-center gap-3">
                          <Clock className="w-5 h-5 text-gray-400 flex-shrink-0" />
                          <p className="text-gray-700">Mon-Fri, 9AM-6PM {office.timezone}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Support Options */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Support Options</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive support tailored to your needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {supportOptions.map((option, index) => {
              const Icon = option.icon;
              return (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300 bg-white/80 backdrop-blur-sm border-0 hover:-translate-y-1">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-bold text-lg text-gray-900 mb-3">{option.title}</h3>
                    <p className="text-gray-600 text-sm mb-4">{option.description}</p>
                    <ul className="space-y-2">
                      {option.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full flex-shrink-0" />
                          {feature}
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

      {/* FAQ */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-50/80 to-white/90">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">
              Quick answers to common questions
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
            Still Have Questions?
          </h3>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Our team is standing by to help you succeed with AI-powered conversations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-full font-semibold">
              <MessageCircle className="w-5 h-5 mr-2" />
              Start Live Chat
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10 px-8 py-3 rounded-full">
              Browse Help Center
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
