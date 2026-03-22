import Hero from "@/components/hero"
import TechStack from "@/components/tech-stack"
import FeaturedProjects from "@/components/featured-projects"
import Experience from "@/components/experience"
import Education from "@/components/education"
import Certifications from "@/components/certifications"
import Social from "@/components/social"
import Contact from "@/components/contact"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <TechStack />
      <FeaturedProjects />
      <Experience />
      <Education />
      <Certifications />
      <Social />
      <Contact />
    </main>
  )
}
