import { Brain, Users, Target, Award, Rocket, Heart, Globe2, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function About() {
  const team = [
    {
      name: "Sarah Chen",
      role: "CEO & Co-Founder",
      bio: "Former AI researcher at Google, passionate about making AI accessible to everyone.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
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
                  Founded in 2022, our company emerged from a simple observation: while AI had become incredibly 
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
