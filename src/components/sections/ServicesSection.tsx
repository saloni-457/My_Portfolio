import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { 
  Globe, 
  Bot, 
  Plug, 
  Smartphone,
  ArrowRight,
  Sparkles,
  Code,
  Zap
} from "lucide-react"

const services = [
  {
    title: "Full-stack Web Development",
    description: "Modern, responsive, end-to-end websites built with cutting-edge technologies. From concept to deployment, I create scalable web applications that deliver exceptional user experiences.",
    features: [
      "Responsive Design",
      "Modern UI/UX", 
      "Performance Optimized",
      "SEO Friendly",
      "Cross-browser Compatible"
    ],
    icon: Globe,
    gradient: "from-violet/10 to-electric-blue/10",
    iconBg: "bg-gradient-primary",
    shadow: "shadow-violet"
  },
  {
    title: "AI-powered Chatbots",
    description: "Intelligent conversational interfaces integrated with APIs and smart response logic. Create engaging user experiences with natural language processing and contextual understanding.",
    features: [
      "Natural Language Processing",
      "Context-Aware Responses",
      "Multi-language Support", 
      "API Integration",
      "Real-time Conversations"
    ],
    icon: Bot,
    gradient: "from-teal/10 to-violet/10",
    iconBg: "bg-gradient-accent",
    shadow: "shadow-teal"
  },
  {
    title: "API Integration",
    description: "Seamless integration of REST APIs and third-party services. Connect your applications with external data sources, payment gateways, and cloud services for enhanced functionality.",
    features: [
      "REST API Development",
      "Third-party Integrations",
      "Data Synchronization",
      "Authentication Systems",
      "Real-time Updates"
    ],
    icon: Plug,
    gradient: "from-electric-blue/10 to-teal/10",
    iconBg: "bg-gradient-secondary",
    shadow: "shadow-glow"
  },
  {
    title: "React Native Apps",
    description: "Cross-platform mobile applications with native performance. Currently exploring mobile development to bring web technologies to mobile platforms with shared codebases.",
    features: [
      "Cross-platform Development",
      "Native Performance",
      "Shared Codebase",
      "Modern UI Components",
      "Device Integration"
    ],
    icon: Smartphone,
    gradient: "from-violet/10 to-teal/10",
    iconBg: "bg-gradient-primary",
    shadow: "shadow-violet",
    badge: "Exploring"
  }
]

export function ServicesSection() {
  return (
    <section id="services" className="py-20 relative">
      {/* Background Elements */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-gradient-primary opacity-10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-gradient-secondary opacity-10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What I <span className="bg-gradient-primary bg-clip-text text-transparent">Offer</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Comprehensive development services to bring your ideas to life with modern technologies and best practices
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card 
              key={service.title}
              className={`bg-gradient-to-br ${service.gradient} border-primary/20 hover:${service.shadow} transition-all duration-500 hover:scale-105 animate-fade-in group relative overflow-hidden`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Service Badge */}
              {service.badge && (
                <div className="absolute top-4 right-4 bg-gradient-accent text-white px-3 py-1 rounded-full text-xs font-medium">
                  {service.badge}
                </div>
              )}
              
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-4 mb-4">
                  <div className={`${service.iconBg} p-3 rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {service.title}
                  </CardTitle>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </CardHeader>
              
              <CardContent className="pt-0">
                <div className="space-y-4">
                  {/* Features List */}
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold text-foreground flex items-center">
                      <Sparkles className="h-4 w-4 mr-2 text-primary" />
                      Key Features
                    </h4>
                    <ul className="space-y-1">
                      {service.features.map((feature) => (
                        <li key={feature} className="text-sm text-muted-foreground flex items-center">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA Button */}
                  <Button 
                    variant="outline" 
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all duration-300 mt-4"
                    onClick={() => {
                      const element = document.querySelector("#contact")
                      if (element) {
                        element.scrollIntoView({ behavior: "smooth" })
                      }
                    }}
                  >
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </CardContent>

              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none" />
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 animate-fade-in">
          <Card className="bg-gradient-to-r from-violet/5 via-teal/5 to-electric-blue/5 border-primary/20 shadow-glow max-w-2xl mx-auto">
            <CardContent className="p-8">
              <div className="flex items-center justify-center mb-4">
                <div className="bg-gradient-primary p-3 rounded-xl">
                  <Code className="h-6 w-6 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Custom Solutions Available
              </h3>
              <p className="text-muted-foreground mb-6">
                Don't see exactly what you need? I love taking on unique challenges and building custom solutions tailored to your specific requirements.
              </p>
              <Button 
                className="bg-gradient-primary hover:bg-gradient-secondary text-white shadow-violet hover:shadow-glow transition-all duration-300"
                onClick={() => {
                  const element = document.querySelector("#contact")
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" })
                  }
                }}
              >
                <Zap className="mr-2 h-4 w-4" />
                Let's Discuss Your Project
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}