import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, MapPin, Calendar, Lightbulb } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="bg-gradient-primary bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A passionate developer on a mission to create innovative solutions that make a difference
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Bio Content */}
          <div className="space-y-6 animate-slide-in-left">
            <p className="text-lg leading-relaxed text-muted-foreground">
              I'm a dedicated full-stack developer with a passion for creating secure, intelligent web applications. 
              My journey in technology is driven by curiosity and the desire to solve real-world problems through code.
            </p>
            
            <p className="text-lg leading-relaxed text-muted-foreground">
              With expertise spanning both frontend and backend development, I specialize in modern technologies 
              like React, Python, and cloud services. I'm particularly fascinated by the intersection of 
              AI and web development, constantly exploring new ways to integrate intelligent features into applications.
            </p>

            <p className="text-lg leading-relaxed text-muted-foreground">
              When I'm not coding, you'll find me exploring cybersecurity concepts, experimenting with new frameworks, 
              or contributing to open-source projects. I believe in continuous learning and staying ahead of 
              technology trends.
            </p>

            {/* Interests */}
            <div className="space-y-2">
              <h3 className="text-xl font-semibold text-foreground mb-3">Interests & Passions</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "AI & Chatbots",
                  "Full-Stack Development",
                  "Cybersecurity",
                  "Cloud Technologies", 
                  "Innovation"
                ].map((interest) => (
                  <Badge key={interest} variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">
                    {interest}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          {/* Education & Info Cards */}
          <div className="space-y-6 animate-fade-in">
            {/* Education Card */}
            <Card className="bg-gradient-to-br from-violet/5 to-teal/5 border-primary/20 shadow-violet">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-primary p-3 rounded-lg">
                    <GraduationCap className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-foreground mb-2">Education</h3>
                    <div className="space-y-1">
                      <p className="text-foreground font-medium">Bachelor of Technology</p>
                      <p className="text-muted-foreground">PSIT, Kanpur</p>
                      <p className="text-sm text-muted-foreground flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        Currently Pursuing
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Location Card */}
            <Card className="bg-gradient-to-br from-teal/5 to-electric-blue/5 border-accent/20 shadow-teal">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-accent p-3 rounded-lg">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-foreground mb-2">Location</h3>
                    <p className="text-muted-foreground">Kanpur, India</p>
                    <p className="text-sm text-muted-foreground">Available for remote opportunities</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Philosophy Card */}
            <Card className="bg-gradient-to-br from-electric-blue/5 to-violet/5 border-electric-blue/20 shadow-glow">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-secondary p-3 rounded-lg">
                    <Lightbulb className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-foreground mb-2">Philosophy</h3>
                    <p className="text-muted-foreground italic">
                      "Technology should empower people and solve meaningful problems. 
                      Every line of code is an opportunity to make someone's life better."
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}