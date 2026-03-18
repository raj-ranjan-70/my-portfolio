"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { Github, Maximize2 } from "lucide-react"
import Image from "next/image"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Dialog, DialogContent, DialogTrigger, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import Autoplay from "embla-carousel-autoplay"

// Real image data extracted from the public folders for the carousel feature
const projects = [
  {
    id: 1,
    title: "Compliance Command Center",
    description:
      "A role-based Labour Compliance Management System built using the MERN stack to streamline organizational compliance tracking, reporting, and task management with secure multi-level access control.",
    images: [
      "/compliance-management-system/Home Page.png",
      "/compliance-management-system/Login Page.png",
      "/compliance-management-system/Compliance Officer's Dashboard.png",
      "/compliance-management-system/Manager's Dashboard.png",
      "/compliance-management-system/Auditor's Dashboard.png",
      "/compliance-management-system/Viewer's Dashboard.png",
      "/compliance-management-system/Reports' Page.png",
      "/compliance-management-system/Compliance Items' Page.png"
    ],
    techStack: ["MongoDB", "Express.js", "React", "Node.js"],
    features: [
      "Role-based authentication for Compliance Officer, Manager, Auditor, and User",
      "Centralized dashboard for monitoring labour law compliance status",
      "Secure API-based backend with JWT authentication",
      "Efficient state management and dynamic UI using React",
    ],
    github: "https://github.com/raj-ranjan-70/labour-compliance-system",
  },
  {
    id: 2,
    title: "Travel Comparison Pro",
    description:
      "AI-powered chatbot assisting users in finding the best flights, hotels, and travel packages through natural conversation using NLP and API integrations.",
    images: [
      "/ai-travel-chatbot-comparison-interface-dark.jpg",
      "/ai-travel-chatbot-comparison-interface-dark.jpg", // Duplicate for carousel
    ],
    techStack: ["HTML", "CSS", "JavaScript", "API", "AI (Gemini 2.5 Flash)"],
    features: [
      "NLP logic for natural conversation flow",
      "Structured intent-handling for accurate comparisons",
      "Context-aware responses for reliable travel recommendations",
    ],
    github: "https://github.com/raj-ranjan-70/Travel-Comparison-Pro",
  },
  {
    id: 3,
    title: "Maze Solver",
    description:
      "Developed a Maze Runner visualizer demonstrating how different pathfinding algorithms navigate through complex grid-based mazes with real-time visualization.",
    images: [
      "/maze-solver-pathfinding-visualization-dark-theme.jpg",
      "/maze-solver-pathfinding-visualization-dark-theme.jpg", // Duplicate for carousel
    ],
    techStack: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    features: [
      "Integrated four major algorithms—BFS, DFS, Dijkstra's, and A*",
      "Real-time visualization highlighting traversal, cost, and efficiency",
      "Effective educational tool for understanding pathfinding concepts",
    ],
    github: "https://github.com/raj-ranjan-70/maze-solver",
  },
  {
    id: 4,
    title: "Meal Planner Website",
    description:
      "Full-stack application helping users easily discover recipes, plan meals, and organize their weekly food schedule with ingredient-based search.",
    images: [
      "/meal-planner-recipe-app-dark-interface.jpg",
      "/meal-planner-recipe-app-dark-interface.jpg", // Duplicate for carousel
    ],
    techStack: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    features: [
      "Ingredient-based search functionality",
      "Personalized user dashboard",
      "Optimized queries for faster recipe retrieval and smoother navigation",
    ],
    github: "https://github.com/raj-ranjan-70/Meal-Planner",
  },
]

export default function FeaturedProjects() {
  const autoplayPlugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  )

  return (
    <section id="featured-projects" className="py-12 px-4 bg-gradient-to-b from-white to-pink-50 dark:from-slate-900 dark:to-slate-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">Featured Projects</h2>
          <p className="text-muted-foreground text-lg">A selection of my recent work</p>
        </div>

        <div className="flex flex-col gap-16 md:gap-24">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                } gap-8 lg:gap-12 items-center`}
            >
              {/* Left Side: Project details */}
              <div className="w-full lg:w-1/2 flex flex-col justify-center space-y-6">
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">{project.title}</h3>
                  <p className="text-lg text-muted-foreground">{project.description}</p>
                </div>

                <ul className="space-y-2 text-base">
                  {project.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-700 dark:text-gray-300">
                      <span className="text-pink-500 font-bold mt-0.5">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 pt-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-sm font-medium bg-pink-100 dark:bg-pink-500/10 text-pink-600 dark:text-pink-400 border border-pink-200 dark:border-pink-500/20 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="pt-4">
                  <Button variant="outline" size="lg" className="hover:text-pink-600 dark:hover:text-pink-400 hover:border-pink-400 dark:hover:border-pink-500 transition-colors" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-5 w-5" />
                      View Repository
                    </a>
                  </Button>
                </div>
              </div>

              {/* Right Side: Image Carousel */}
              <div className="w-full lg:w-1/2">
                <div className="bg-white/50 dark:bg-slate-800/50 p-2 sm:p-4 rounded-3xl border border-pink-100 dark:border-slate-700/50 shadow-xl backdrop-blur-sm">
                  <Dialog>
                    <Carousel
                      plugins={[
                        Autoplay({
                          delay: 3000,
                          stopOnInteraction: false,
                          stopOnMouseEnter: true,
                        }) as any,
                      ]}
                      className="w-full rounded-2xl overflow-hidden"
                    >
                      <CarouselContent>
                        {project.images.map((img, idx) => (
                          <CarouselItem key={idx}>
                            <DialogTrigger asChild>
                              <div className="relative group cursor-pointer overflow-hidden rounded-xl aspect-16/10 bg-slate-100 dark:bg-slate-900 border border-transparent hover:border-pink-300 dark:hover:border-pink-500/50 transition-colors">
                                <Image
                                  src={img || "/placeholder.svg"}
                                  alt={`${project.title} screenshot ${idx + 1}`}
                                  fill
                                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 dark:group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                                  <Maximize2 className="text-white opacity-0 group-hover:opacity-100 transform scale-75 group-hover:scale-100 transition-all duration-300 w-10 h-10 drop-shadow-lg" />
                                </div>
                              </div>
                            </DialogTrigger>
                          </CarouselItem>
                        ))}
                      </CarouselContent>
                      {project.images.length > 1 && (
                        <>
                          <CarouselPrevious className="left-4 bg-white/80 dark:bg-black/50 hover:bg-white dark:hover:bg-black border-none" />
                          <CarouselNext className="right-4 bg-white/80 dark:bg-black/50 hover:bg-white dark:hover:bg-black border-none" />
                        </>
                      )}
                    </Carousel>

                    <DialogContent className="max-w-[95vw] sm:max-w-[95vw] w-fit h-fit max-h-[95vh] p-0 overflow-hidden bg-transparent border-none shadow-none focus:outline-none focus-visible:outline-none">
                      <DialogTitle className="sr-only">{project.title} Preview</DialogTitle>
                      <DialogDescription className="sr-only">A full screen interactive preview of the {project.title} project.</DialogDescription>

                      <div className="relative w-[90vw] h-[85vh]">
                        <Carousel className="w-full h-full">
                          <CarouselContent className="h-full ml-0">
                            {project.images.map((img, idx) => (
                              <CarouselItem key={idx} className="h-[85vh] pl-0 flex items-center justify-center">
                                <div className="relative w-full h-full flex items-center justify-center">
                                  <Image
                                    src={img || "/placeholder.svg"}
                                    alt={`${project.title} full preview ${idx + 1}`}
                                    fill
                                    className="object-contain"
                                    quality={100}
                                  />
                                </div>
                              </CarouselItem>
                            ))}
                          </CarouselContent>
                          {project.images.length > 1 && (
                            <>
                              <CarouselPrevious className="left-4 md:left-8 bg-white/50 hover:bg-white dark:bg-black/50 dark:hover:bg-black text-gray-900 dark:text-white border-none w-12 h-12 shadow-md backdrop-blur-md transition-all scale-100 opacity-100 z-50" />
                              <CarouselNext className="right-4 md:right-8 bg-white/50 hover:bg-white dark:bg-black/50 dark:hover:bg-black text-gray-900 dark:text-white border-none w-12 h-12 shadow-md backdrop-blur-md transition-all scale-100 opacity-100 z-50" />
                            </>
                          )}
                        </Carousel>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
