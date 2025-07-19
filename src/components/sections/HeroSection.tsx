import { Button } from "@/components/ui/button"
import { ArrowDown, Download } from "lucide-react"
import profileImage from "@/assets/saloni-profile.jpg"

export function HeroSection() {
  const scrollToProjects = () => {
    const element = document.querySelector("#projects")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const scrollToContact = () => {
    const element = document.querySelector("#contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-violet/10 via-transparent to-teal/10" />
      <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-primary opacity-20 rounded-full blur-3xl animate-glow-pulse" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-secondary opacity-20 rounded-full blur-3xl animate-glow-pulse delay-1000" />
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="animate-fade-in">
          {/* Profile Image */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <div className="w-48 h-48 rounded-full overflow-hidden shadow-glow ring-2 ring-primary/30">
                <img 
                  src={profileImage} 
                  alt="Saloni Gupta"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 rounded-full bg-gradient-primary opacity-20 animate-glow-pulse" />
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="block text-foreground">Hi, I'm</span>
            <span className="block bg-gradient-primary bg-clip-text text-transparent">
              Saloni Gupta
            </span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-4 max-w-4xl mx-auto">
            Full-Stack Developer | AI & Web Enthusiast | Cybersecurity Explorer
          </p>
          
          {/* Description */}
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Passionate about building secure, intelligent web applications that solve real-world problems. 
            Currently pursuing B.Tech at PSIT, Kanpur, with expertise in modern web technologies and AI integration.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              onClick={scrollToProjects}
              className="bg-gradient-primary hover:bg-gradient-secondary text-white px-8 py-3 text-lg font-medium shadow-violet transition-all duration-300 hover:shadow-glow hover:scale-105"
            >
              View Projects
              <ArrowDown className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              onClick={scrollToContact}
              className="border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3 text-lg font-medium transition-all duration-300 hover:shadow-violet"
            >
              Let's Connect
              <Download className="ml-2 h-5 w-5" />
            </Button>
          </div>
          
          {/* Fun Fact */}
          <div className="inline-block bg-card/50 backdrop-blur-sm border border-border/50 rounded-full px-6 py-3 shadow-lg">
            <p className="text-sm text-muted-foreground">
              💡 "Build something that people can't stop using!"
            </p>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  )
}