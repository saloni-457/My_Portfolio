import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { 
  ExternalLink, 
  Github, 
  Bot, 
  Newspaper, 
  ShoppingCart,
  Sparkles,
  MessageSquare,
  Globe,
  Smartphone
} from "lucide-react"

const projects = [
  {
    title: "GenieX — AI ChatBot",
    description: "A full-stack chatbot built with Google Gemini API that mimics ChatGPT experience with advanced features and multilingual support.",
    longDescription: "An intelligent conversational AI platform featuring real-time responses, chat history management, and seamless user authentication.",
    features: [
      "Firebase Login/Auth",
      "Chat History with Sidebar", 
      "New Chat, Chat Renaming, Deletion",
      "Multilingual Support (English, Hindi, Spanish)",
      "Folders for Chat Organization",
      "Text-to-Speech & Speech-to-Text",
      "Responsive UI with Dark/Light Mode",
      "Typing animation & real-time Gemini response"
    ],
    techStack: ["React.js", "Tailwind CSS", "Flask", "Firebase", "MongoDB", "Gemini API"],
    icon: Bot,
    gradient: "from-violet/10 to-electric-blue/10",
    iconBg: "bg-gradient-primary",
    shadow: "shadow-violet",
    githubUrl: "#",
    liveUrl: "#",
    status: "Available upon request"
  },
  {
    title: "NewsWave — Real-Time News App", 
    description: "A web app that fetches and displays real-time news based on category and country with clean, responsive design.",
    longDescription: "Stay informed with the latest news from around the world, filtered by your preferences and displayed in an intuitive interface.",
    features: [
      "Search by keywords",
      "Category-wise and country-wise filters", 
      "Clean UI with responsive layout",
      "Real-time news updates",
      "Fast loading and caching",
      "Mobile-optimized experience"
    ],
    techStack: ["JavaScript", "HTML5", "CSS3", "NewsAPI"],
    icon: Newspaper,
    gradient: "from-teal/10 to-violet/10", 
    iconBg: "bg-gradient-accent",
    shadow: "shadow-teal",
    githubUrl: "#",
    liveUrl: "#",
    status: "Live Demo Available"
  },
  {
    title: "Snazzy Shop — E-commerce Website",
    description: "A sleek and interactive web-based shopping platform offering a modern online retail experience with full shopping functionality.",
    longDescription: "A complete e-commerce solution with product browsing, cart management, and smooth user interactions designed for optimal shopping experience.",
    features: [
      "Browse products by categories",
      "Add to Cart & Wishlist functionality",
      "Product detail view with images and pricing", 
      "Responsive layout for all screen sizes",
      "Smooth UI transitions and hover effects",
      "Search and filter functionality"
    ],
    techStack: ["HTML", "CSS", "JavaScript"],
    icon: ShoppingCart,
    gradient: "from-electric-blue/10 to-teal/10",
    iconBg: "bg-gradient-secondary", 
    shadow: "shadow-glow",
    githubUrl: "#",
    liveUrl: "#",
    status: "Featured Project"
  }
]

const comingSoonProjects = [
  { title: "AI Code Assistant", icon: MessageSquare, tech: "React, Python, OpenAI" },
  { title: "Cybersecurity Dashboard", icon: Globe, tech: "Next.js, Node.js, MongoDB" },
  { title: "Mobile Task Manager", icon: Smartphone, tech: "React Native, Firebase" }
]

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-electric-blue/5 via-transparent to-violet/5" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured <span className="bg-gradient-primary bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A showcase of my latest work in web development, AI integration, and user experience design
          </p>
        </div>

        {/* Main Projects */}
        <div className="space-y-8 mb-16">
          {projects.map((project, index) => (
            <Card 
              key={project.title}
              className={`bg-gradient-to-br ${project.gradient} border-primary/20 hover:${project.shadow} transition-all duration-500 hover:scale-[1.02] animate-fade-in group overflow-hidden`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="flex flex-col lg:flex-row">
                {/* Project Icon & Header */}
                <div className="lg:w-1/3 p-8 flex flex-col justify-center items-center text-center lg:border-r border-border/50">
                  <div className={`${project.iconBg} p-6 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300 mb-4`}>
                    <project.icon className="h-12 w-12 text-white" />
                  </div>
                  <Badge variant="secondary" className="bg-primary/20 text-primary mb-2">
                    {project.status}
                  </Badge>
                  <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                </div>

                {/* Project Details */}
                <div className="lg:w-2/3 p-8">
                  <div className="space-y-6">
                    {/* Description */}
                    <div>
                      <p className="text-muted-foreground text-lg leading-relaxed mb-3">
                        {project.description}
                      </p>
                      <p className="text-muted-foreground">
                        {project.longDescription}
                      </p>
                    </div>

                    {/* Features */}
                    <div>
                      <h4 className="text-lg font-semibold text-foreground mb-3 flex items-center">
                        <Sparkles className="h-5 w-5 mr-2 text-primary" />
                        Key Features
                      </h4>
                      <div className="grid md:grid-cols-2 gap-2">
                        {project.features.map((feature) => (
                          <div key={feature} className="flex items-start">
                            <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Tech Stack */}
                    <div>
                      <h4 className="text-lg font-semibold text-foreground mb-3">Tech Stack</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.techStack.map((tech) => (
                          <Badge key={tech} variant="outline" className="border-primary/30 text-primary hover:bg-primary/10">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap gap-4 pt-4">
                      <Button 
                        variant="outline" 
                        className="border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                        onClick={() => window.open(project.githubUrl, '_blank')}
                      >
                        <Github className="mr-2 h-4 w-4" />
                        GitHub
                      </Button>
                      <Button 
                        className="bg-gradient-primary hover:bg-gradient-secondary text-white shadow-violet transition-all duration-300"
                        onClick={() => window.open(project.liveUrl, '_blank')}
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Coming Soon Projects */}
        <div className="animate-fade-in">
          <h3 className="text-2xl font-bold text-center mb-8">
            Coming <span className="bg-gradient-accent bg-clip-text text-transparent">Soon</span>
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {comingSoonProjects.map((project, index) => (
              <Card 
                key={project.title}
                className="bg-gradient-to-br from-muted/20 to-muted/5 border-border/50 hover:border-primary/30 transition-all duration-300 hover:scale-105 group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader className="text-center pb-4">
                  <div className="bg-gradient-accent/20 p-4 rounded-xl mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                    <project.icon className="h-8 w-8 text-accent mx-auto" />
                  </div>
                  <CardTitle className="text-lg text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center pt-0">
                  <p className="text-sm text-muted-foreground mb-4">{project.tech}</p>
                  <Badge variant="secondary" className="bg-accent/20 text-accent">
                    In Development
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 animate-fade-in">
          <Card className="bg-gradient-to-r from-violet/5 via-teal/5 to-electric-blue/5 border-primary/20 shadow-glow max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Want to see more?
              </h3>
              <p className="text-muted-foreground mb-6">
                These are just a few highlights. I'm always working on new projects and experimenting with cutting-edge technologies.
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
                Let's Build Something Together
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}