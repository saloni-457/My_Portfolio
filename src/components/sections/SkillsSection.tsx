import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Code2, 
  Palette, 
  Server, 
  Database, 
  Wrench, 
  Cloud,
  Brain,
  Shield
} from "lucide-react"

const skillCategories = [
  {
    title: "Languages",
    icon: Code2,
    skills: ["Java", "Python", "JavaScript", "TypeScript", "HTML5", "CSS3"],
    gradient: "from-violet/10 to-electric-blue/10",
    iconBg: "bg-gradient-primary"
  },
  {
    title: "Frontend",
    icon: Palette,
    skills: ["React.js", "Tailwind CSS", "HTML5", "CSS3", "Responsive Design", "UI/UX"],
    gradient: "from-teal/10 to-violet/10",
    iconBg: "bg-gradient-accent"
  },
  {
    title: "Backend",
    icon: Server,
    skills: ["Flask", "Node.js", "REST APIs", "Express.js", "API Integration"],
    gradient: "from-electric-blue/10 to-teal/10",
    iconBg: "bg-gradient-secondary"
  },
  {
    title: "Database",
    icon: Database,
    skills: ["MongoDB", "Firebase", "Firestore", "Database Design", "NoSQL"],
    gradient: "from-violet/10 to-teal/10",
    iconBg: "bg-gradient-primary"
  },
  {
    title: "Tools & Technologies",
    icon: Wrench,
    skills: ["GitHub", "Postman", "Firebase Auth", "Render", "Git", "VS Code"],
    gradient: "from-teal/10 to-electric-blue/10",
    iconBg: "bg-gradient-accent"
  },
  {
    title: "Cloud & AI",
    icon: Cloud,
    skills: ["Google Cloud", "Google Gemini API", "Firebase", "AI Integration", "Cloud Deployment"],
    gradient: "from-electric-blue/10 to-violet/10",
    iconBg: "bg-gradient-secondary"
  },
  {
    title: "Mobile & Emerging",
    icon: Brain,
    skills: ["React Native", "Progressive Web Apps", "Machine Learning", "AI Chatbots"],
    gradient: "from-violet/10 to-electric-blue/10",
    iconBg: "bg-gradient-primary"
  },
  {
    title: "Security & Others",
    icon: Shield,
    skills: ["Cybersecurity", "Web Security", "Authentication", "Data Protection"],
    gradient: "from-teal/10 to-violet/10",
    iconBg: "bg-gradient-accent"
  }
]

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-violet/5 via-transparent to-teal/5" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Technical <span className="bg-gradient-primary bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A comprehensive toolkit for building modern, scalable, and secure applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <Card 
              key={category.title} 
              className={`bg-gradient-to-br ${category.gradient} border-primary/20 hover:shadow-glow transition-all duration-300 hover:scale-105 animate-fade-in group`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader className="pb-3">
                <div className="flex items-center space-x-3">
                  <div className={`${category.iconBg} p-2 rounded-lg shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <category.icon className="h-5 w-5 text-white" />
                  </div>
                  <CardTitle className="text-lg font-semibold text-foreground">
                    {category.title}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge 
                      key={skill} 
                      variant="secondary" 
                      className="bg-background/50 text-foreground hover:bg-primary/20 hover:text-primary transition-colors duration-200 text-xs"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="text-center mt-16 animate-fade-in">
          <Card className="bg-gradient-to-r from-violet/5 via-teal/5 to-electric-blue/5 border-primary/20 shadow-glow max-w-4xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Always Learning, Always Growing
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Technology evolves rapidly, and I believe in continuous learning. I'm constantly exploring new frameworks, 
                experimenting with emerging technologies, and staying updated with industry best practices. 
                Currently diving deeper into AI integration, advanced React patterns, and cloud-native architectures.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}