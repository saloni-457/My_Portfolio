import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { 
  Linkedin, 
  Github, 
  Code2, 
  Award,
  Mail,
  Zap,
  MapPin,
  Calendar,
  ExternalLink,
  Heart
} from "lucide-react"

const socialLinks = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/saloni-gupta-6557bb32a/",
    icon: Linkedin,
    description: "Connect with me professionally",
    gradient: "from-blue-500/10 to-blue-600/10",
    iconBg: "bg-blue-500",
    hoverColor: "hover:text-blue-500"
  },
  {
    name: "GitHub", 
    url: "https://github.com/saloni-457",
    icon: Github,
    description: "Check out my repositories",
    gradient: "from-gray-500/10 to-gray-600/10",
    iconBg: "bg-gray-700",
    hoverColor: "hover:text-gray-700"
  },
  //   {
  //   name: "LeetCode",
  //   url: "https://leetcode.com/u/saloni_89/",
  //   icon: Code2,
  //   description: "My coding profile",
  //   gradient: "from-green-500/10 to-green-600/10", 
  //   iconBg: "bg-green-500",
  //   hoverColor: "hover:text-green-500"
  // },

    {
    name: "LeetCode",
    url: "https://leetcode.com/u/saloni_89/",
    icon: Zap,
    description: "Algorithm & data structure solutions",
    gradient: "from-orange-500/10 to-orange-600/10",
    iconBg: "bg-orange-500",
    hoverColor: "hover:text-orange-500"
  },
  {
    name: "HackerRank",
    url: "https://www.hackerrank.com/profile/CYS1B_1720089",
    icon: Award,
    description: "Competitive programming achievements",
    gradient: "from-emerald-500/10 to-emerald-600/10",
    iconBg: "bg-emerald-500", 
    hoverColor: "hover:text-emerald-500"
  },
    {
    name: "GeeksforGeeks",
    url: "https://www.geeksforgeeks.org/user/saloniigupta/",
    icon: Code2,
    description: "My coding profile & articles",
    gradient: "from-green-500/10 to-green-600/10", 
    iconBg: "bg-green-500",
    hoverColor: "hover:text-green-500"
  }
]

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "Let's connect!",
    action: "Contact via LinkedIn"
  },
  {
    icon: MapPin,
    label: "Location", 
    value: "Kanpur, India",
    action: "Available for remote work"
  },
  {
    icon: Calendar,
    label: "Availability",
    value: "Open to opportunities",
    action: "Ready to start new projects"
  }
]

export function ContactSection() {
  return (
    <section id="contact" className="py-20 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-violet/10 via-transparent to-teal/10" />
      <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-primary opacity-10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-72 h-72 bg-gradient-secondary opacity-10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Let's <span className="bg-gradient-primary bg-clip-text text-transparent">Connect</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Ready to collaborate on your next project? I'd love to hear about your ideas and discuss how we can bring them to life.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Info & CTA */}
            <div className="space-y-8 animate-slide-in-left">
              <Card className="bg-gradient-to-br from-violet/5 to-electric-blue/5 border-primary/20 shadow-glow">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-foreground mb-6">
                    Ready to Build Something Amazing?
                  </h3>
                  <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                    Whether you have a clear vision or just an idea, I'm here to help turn your concepts into reality. 
                    Let's create something that makes a difference together.
                  </p>
                  
                  <div className="space-y-6">
                    {contactInfo.map((info) => (
                      <div key={info.label} className="flex items-start space-x-4">
                        <div className="bg-gradient-primary p-3 rounded-lg shadow-lg">
                          <info.icon className="h-5 w-5 text-white" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground">{info.label}</h4>
                          <p className="text-muted-foreground">{info.value}</p>
                          <p className="text-sm text-primary font-medium">{info.action}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 p-6 bg-gradient-to-r from-teal/10 to-violet/10 rounded-lg border border-primary/20">
                    <p className="text-foreground font-medium mb-2">Quick Response Guarantee</p>
                    <p className="text-sm text-muted-foreground">
                      I typically respond to messages within 24 hours. For urgent projects, 
                      feel free to mention it in your message!
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Social Links */}
            <div className="space-y-6 animate-fade-in">
              <h3 className="text-xl font-bold text-foreground mb-6 text-center lg:text-left">
                Find Me On
              </h3>
              
              <div className="grid gap-4">
                {socialLinks.map((link, index) => (
                  <Card 
                    key={link.name}
                    className={`bg-gradient-to-br ${link.gradient} border-border/50 hover:border-primary/30 transition-all duration-300 hover:scale-105 hover:shadow-lg group cursor-pointer`}
                    style={{ animationDelay: `${index * 100}ms` }}
                    onClick={() => window.open(link.url, '_blank')}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4">
                        <div className={`${link.iconBg} p-3 rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                          <link.icon className="h-6 w-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center space-x-2">
                            <h4 className={`font-semibold text-foreground group-hover:${link.hoverColor} transition-colors`}>
                              {link.name}
                            </h4>
                            <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                          </div>
                          <p className="text-sm text-muted-foreground">{link.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Additional CTA */}
              <Card className="bg-gradient-to-r from-electric-blue/5 via-violet/5 to-teal/5 border-primary/20 shadow-glow mt-8">
                <CardContent className="p-6 text-center">
                  <h4 className="font-bold text-foreground mb-3">
                    Prefer Email?
                  </h4>
                  <p className="text-muted-foreground text-sm mb-4">
                    While I don't list my email publicly for privacy, feel free to reach out via LinkedIn 
                    and I'll share my direct contact information for serious inquiries.
                  </p>
                  <Button 
                    className="bg-gradient-primary hover:bg-gradient-secondary text-white shadow-violet transition-all duration-300"
                    onClick={() => window.open("https://www.linkedin.com/in/saloni-gupta-6557bb32a/", '_blank')}
                  >
                    <Linkedin className="mr-2 h-4 w-4" />
                    Connect on LinkedIn
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Footer Message */}
        <div className="text-center mt-16 animate-fade-in">
          <Card className="bg-gradient-to-r from-violet/5 via-teal/5 to-electric-blue/5 border-primary/20 shadow-glow max-w-3xl mx-auto">
            <CardContent className="p-8">
              <p className="text-lg text-muted-foreground flex items-center justify-center">
                Made with <Heart className="h-5 w-5 text-red-500 mx-2 animate-pulse" /> 
               by Saloni Gupta
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                This portfolio is built with React, TypeScript, and Tailwind CSS
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}