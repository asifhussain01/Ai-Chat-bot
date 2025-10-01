import { Brain, Users, Target, Award, Rocket, Heart, Globe2, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function About() {
  const team = [
    {
      name: "Sarah Chen",
      role: "CEO & Co-Founder",
      bio: "Former AI researcher at Google, passionate about making AI accessible to everyone.",
      image: "data:image/jpeg;base64,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"
    },
    {
      name: "Michael Rodriguez",
      role: "CTO & Co-Founder",
      bio: "Machine learning expert with 10+ years building conversational AI systems.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Emily Watson",
      role: "Head of Product",
      bio: "UX designer turned product leader, focused on human-centered AI experiences.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "David Kim",
      role: "Head of Engineering",
      bio: "Full-stack engineer specializing in scalable AI infrastructure and real-time systems.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    }
  ];

  const values = [
    {
      icon: Brain,
      title: "Innovation",
      description: "We push the boundaries of what's possible with conversational AI, constantly exploring new ways to make interactions more natural and helpful."
    },
    {
      icon: Users,
      title: "Accessibility",
      description: "AI should be accessible to everyone. We build tools that are easy to use, regardless of technical expertise or background."
    },
    {
      icon: Heart,
      title: "Human-Centered",
      description: "Technology should serve humanity. We design AI that augments human capabilities rather than replacing human connection."
    },
    {
      icon: Globe2,
      title: "Global Impact",
      description: "We're building solutions that can help businesses and individuals worldwide, breaking down communication barriers."
    }
  ];

  const achievements = [
    { number: "1M+", label: "Conversations Processed", icon: "💬" },
    { number: "50K+", label: "Active Users", icon: "👥" },
    { number: "99.9%", label: "Uptime", icon: "⚡" },
    { number: "150+", label: "Countries Served", icon: "🌍" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50/90 via-white/95 to-blue-50/90 pt-16">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-purple-100 px-4 py-2 rounded-full text-sm font-medium text-blue-800 mb-8">
            <Brain className="w-4 h-4" />
            About Our Mission
          </div>
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent mb-6">
            Pioneering the Future of AI Communication
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-12 leading-relaxed">
            We're on a mission to make artificial intelligence more human, more accessible, and more helpful. 
            Our team of AI researchers, engineers, and designers is building the next generation of conversational AI 
            that understands context, emotion, and intent like never before.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 px-4 bg-white/70 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Founded in 2025, our company emerged from a simple observation: while AI had become incredibly 
                  powerful, it still felt robotic and disconnected from human needs. Our founders, with backgrounds 
                  in machine learning, linguistics, and human-computer interaction, set out to change that.
                </p>
                <p>
                  We started with a vision of AI that doesn't just process requests, but truly understands them. 
                  AI that can pick up on nuance, context, and even emotion. Today, our platform powers conversations 
                  for businesses worldwide, helping them connect with their customers in more meaningful ways.
                </p>
                <p>
                  What drives us is the belief that the best technology is the kind that feels natural, helpful, 
                  and genuinely improves people's lives. Every conversation on our platform is a step toward 
                  that future.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-8 text-white">
                <div className="h-full flex flex-col justify-center items-center text-center">
                  <Rocket className="w-16 h-16 mb-6" />
                  <h3 className="text-2xl font-bold mb-4">Building the Future</h3>
                  <p className="text-blue-100">
                    Every day, we're working toward a world where AI communication feels as natural as talking to a friend.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These principles guide everything we do, from product development to customer relationships
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm border-0">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-6">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                        <p className="text-gray-600 leading-relaxed">{value.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Our Impact</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Numbers that reflect our commitment to excellence and global reach
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center group">
                <div className="text-4xl mb-2">{achievement.icon}</div>
                <div className="text-3xl lg:text-4xl font-bold text-white mb-2 group-hover:scale-110 transition-transform">
                  {achievement.number}
                </div>
                <div className="text-blue-100 font-medium">{achievement.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 bg-white/70 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The brilliant minds behind our AI technology
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 bg-white/90 backdrop-blur-sm border-0 overflow-hidden">
                <CardContent className="p-0">
                  <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 relative overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-lg text-gray-900 mb-1">{member.name}</h3>
                    <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                    <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-4xl font-bold text-gray-900 mb-6">
            Join Us on This Journey
          </h3>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Whether you're a business looking to enhance customer experience or a developer interested in AI, 
            we'd love to connect with you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8 py-3 rounded-full">
              Start Building
            </Button>
            <Button variant="outline" size="lg" className="px-8 py-3 rounded-full border-2">
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
