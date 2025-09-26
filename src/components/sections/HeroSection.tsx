/* src/components/sections/HeroSection.tsx */
import { useEffect, useMemo, useState, useCallback } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
// import { loadSlim } from "@tsparticles/slim";
// import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
// import type { Engine, Container, ISourceOptions } from "tsparticles-engine";

import {
  type ISourceOptions,
  type Container,
  MoveDirection,
  Engine,
  OutMode,
} from "@tsparticles/engine";

export default function HeroSection(): JSX.Element {
  const [inited, setInited] = useState(false);

  useEffect(() => {
    // initialize the tsParticles engine once (loads the slim bundle)
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setInited(true));
  }, []);

//   const particlesInit = useCallback(async (engine: any) => {
//   await loadSlim(engine);
// }, []);


  const particlesLoaded = useCallback(async (container?: Container) => {
    /* optional: use the container for runtime changes or debugging */
    // console.log("particles loaded", container);
  }, []);

//   const particlesLoaded = useCallback(async (container: Container | undefined) => {
//   // optional debugging
//   // console.log(container);
// }, []);


  const options: ISourceOptions = useMemo(
    () => ({
      // IMPORTANT: disable fullScreen so the canvas stays inside our wrapper div
      fullScreen: { enable: false },

      background: { color: { value: "#000000" } },
      fpsLimit: 60,
      detectRetina: true,

      interactivity: {
        events: {
          onHover: { enable: true, mode: "repulse" },
          onClick: { enable: true, mode: "push" },
        },
        modes: {
          repulse: { distance: 100, duration: 0.4 },
          push: { quantity: 3 },
        },
      },

      particles: {
        number: { value: 120, density: { enable: true, area: 800 } },
        color: { value: "#ffffff" },            // white particles
        shape: { type: "circle" },
        opacity: { value: 0.85 },
        size: { value: { min: 1, max: 2 } },
        links: { enable: false },

      move: {
        enable: true,
        speed: 0.6,
        direction: MoveDirection.top,   // instead of MoveDirection.top
        outModes: { default: OutMode.out },  // instead of OutMode.out
      },

      },
    }),
    []
  );

  return (
    <section className="relative flex flex-col items-center justify-center h-screen w-full bg-black text-white overflow-hidden">
      {/* Centered Text (z-10 to sit above the particles) */}
      {/* <div className="z-10 text-center px-4">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6">
          Hi! I'm Saloni Gupta
        </h1>

        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
          A <span className="font-semibold">Software Developer</span>{" "}
          specializing in frontend and mobile app development.
        </p>

        <p className="text-md md:text-lg text-gray-400 mt-3 max-w-3xl mx-auto">
          Passionate about <span className="text-white">learning</span> and{" "}
          <span className="text-white">building clean, professional code</span>.
        </p>
      </div> */}

<h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight text-center">
  <span className="block bg-gradient-primary bg-clip-text text-transparent">
    Hi, I'm Saloni Gupta
  </span>
</h1>


<div className="max-w-3xl mx-auto space-y-6 mb-12 text-center relative z-20">
  {/* Subtitle */}
  <p className="text-xl md:text-2xl text-muted-foreground font-medium">
    Full-Stack Developer | AI & Web Enthusiast
  </p>

  {/* Passion statement */}
  <p className="text-md md:text-lg text-gray-400 leading-relaxed">
    Passionate about{" "}
    <span className="text-white font-medium">learning</span> and{" "}
    <span className="text-white font-medium">
      building secure, intelligent web applications that solve real-world problems
    </span>.
  </p>

  {/* Education + experience */}
  {/* <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
    Currently pursuing{" "}
    <span className="font-semibold">
      B.Tech at Pranveer Singh Institute Of Technology, Kanpur, with hands-on experience in modern web technologies and AI integration.
    </span>
  </p> */}


<p className="text-base md:text-lg text-gray-300 leading-relaxed">
  Final-year {" "}
  <span className="font-semibold">
    CSE (Cyber Security) student at Pranveer Singh Institute Of Technology, Kanpur, with hands-on experience in modern web technologies and AI integration.
  </span>
</p>



  {/* Quote card */}
  <div className="inline-block bg-card/60 backdrop-blur-md border border-border/50 rounded-full px-6 py-3 shadow-lg">
    <p className="text-sm text-muted-foreground italic">
      💡 "Build something that people can't stop using!"
    </p>
  </div>
</div>

{/* <div className="max-w-3xl mx-auto space-y-6 mb-12 text-center">
  <p className="text-xl md:text-2xl text-muted-foreground font-medium">
    Full-Stack Developer | AI & Web Enthusiast
  </p>

  <p className="text-md md:text-lg text-gray-400 leading-relaxed">
    Passionate about{" "}
    <span className="text-white font-medium">learning</span> and{" "}
    <span className="text-white font-medium">
      building secure, intelligent web applications that solve real-world problems
    </span>.
  </p>

  <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
    Currently pursuing{" "}
    <span className="font-semibold">
      B.Tech at Pranveer Singh Institute Of Technology, Kanpur
    </span>
    , with hands-on experience in modern web technologies and AI integration.
  </p>

  <div className="inline-block bg-card/60 backdrop-blur-md border border-border/50 rounded-full px-6 py-3 shadow-lg">
    <p className="text-sm text-muted-foreground italic">
      💡 "Build something that people can't stop using!"
    </p>
  </div>

</div> */}


      {/* Horizon Line (glow under text) */}
      <div className="relative z-10 w-[90%] max-w-3xl mt-8">
        <div className="h-px bg-gradient-to-r from-transparent via-cyan-400/80 to-transparent" />
        <div className="pointer-events-none absolute left-1/2 -top-1 h-1 w-44 -translate-x-1/2 rounded-full bg-cyan-400/40 blur-md" />
      </div>

      {/* Particles container — absolutely positioned at bottom and 50% height*/}
      {inited && (
        <div className="absolute bottom-0 left-0 w-full h-1/2 pointer-events-none">
          <Particles
            id="tsparticles"
            // init={particlesInit}
            options={options}
            particlesLoaded={particlesLoaded}
          />
        </div>
      )}  

      {/* {inited && (
  <div className="absolute bottom-0 left-0 w-full h-1/2 pointer-events-none">
    <Particles 
    id="tsparticles" 
    options={options} 
    particlesLoaded={particlesLoaded} />
      </div>
    )} */}


    </section>
  );
}


// import { Button } from "@/components/ui/button"
// import { ArrowDown, Download } from "lucide-react"
// import profileImage from "@/assets/saloni-profile-new.jpg"

// export function HeroSection() {
//   const scrollToProjects = () => {
//     const element = document.querySelector("#projects")
//     if (element) {
//       element.scrollIntoView({ behavior: "smooth" })
//     }
//   }

//   const scrollToContact = () => {
//     const element = document.querySelector("#contact")
//     if (element) {
//       element.scrollIntoView({ behavior: "smooth" })
//     }
//   }

//   return (
//     <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
//       {/* Background Elements */}
//       <div className="absolute inset-0 bg-gradient-to-br from-violet/10 via-transparent to-teal/10" />
//       <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-primary opacity-20 rounded-full blur-3xl animate-glow-pulse" />
//       <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-secondary opacity-20 rounded-full blur-3xl animate-glow-pulse delay-1000" />
      
//       <div className="container mx-auto px-4 text-center relative z-10">
//         <div className="animate-fade-in">
//           {/* Profile Image */}
//           <div className="mt-20 md:mt-32 mb-8 flex justify-center">
//             <div className="relative">
//               <div className="w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 rounded-full overflow-hidden shadow-glow ring-2 ring-primary/30">

//               {/* <div className="w-48 h-48 rounded-full overflow-hidden shadow-glow ring-2 ring-primary/30"> */}
//                 <img 
//                   src={profileImage} 
//                   alt="Saloni Gupta"
//                   className="w-full h-full object-cover"
//                 />
//               </div>
//               <div className="absolute inset-0 rounded-full bg-gradient-primary opacity-20 animate-glow-pulse" />
//             </div>
//           </div>

//           {/* Main Heading */}
//           <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
//             <span className="block text-foreground">Hi, I'm</span>
//             <span className="block bg-gradient-primary bg-clip-text text-transparent">
//               Saloni Gupta
//             </span>
//           </h1>
          
//           {/* Subtitle */}
//           <p className="text-xl md:text-2xl text-muted-foreground mb-4 max-w-4xl mx-auto">
//             Full-Stack Developer | AI & Web Enthusiast | Cybersecurity Explorer
//           </p>
          
//           {/* Description */}
//           <p className="text-lg text-muted-foreground mb-2 leading-relaxed">
//           Passionate about building secure, intelligent web applications that solve real-world problems.
//           </p>
//           <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed text-balanced">
//             {/* Passionate about building secure, intelligent web applications that solve real-world problems. <br /> */}
//             Currently pursuing B.Tech at Pranveer Singh Institute Of Technology, Kanpur. With hands-on experience in modern web technologies and AI integration. <br />
//           </p>
          
//           {/* CTA Buttons */}
//           <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
//             <Button 
//               onClick={scrollToProjects}
//               className="bg-gradient-primary hover:bg-gradient-secondary text-white px-8 py-3 text-lg font-medium shadow-violet transition-all duration-300 hover:shadow-glow hover:scale-105"
//             >
//               View Projects
//               <ArrowDown className="ml-2 h-5 w-5" />
//             </Button>
//             <Button 
//               variant="outline" 
//               onClick={scrollToContact}
//               className="border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3 text-lg font-medium transition-all duration-300 hover:shadow-violet"
//             >
//               Let's Connect
//               <Download className="ml-2 h-5 w-5" />
//             </Button>
//           </div>
          
//           {/* Fun Fact */}
//           <div className="inline-block bg-card/50 backdrop-blur-sm border border-border/50 rounded-full px-6 py-3 shadow-lg">
//             <p className="text-sm text-muted-foreground">
//               💡 "Build something that people can't stop using!"
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* Scroll Indicator */}
//       <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
//         <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
//           <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
//         </div>
//       </div>
//     </section>
//   )
// }

//             Full-Stack Developer | AI & Web Enthusiast

//             Currently pursuing B.Tech at Pranveer Singh Institute Of Technology, Kanpur. With hands-on experience in modern web technologies and AI integration. <br />
//           Passionate about building secure, intelligent web applications that solve real-world problems.
//               💡 "Build something that people can't stop using!"
