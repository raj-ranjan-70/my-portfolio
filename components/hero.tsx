"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react"

export default function Hero() {
  const handleViewWork = () => {
    const element = document.getElementById("featured-projects")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const handleContactMe = () => {
    const element = document.getElementById("contact-section")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const handleDownloadResume = () => {
    const link = document.createElement("a")
    link.href = "/Raj-Ranjan-Resume.pdf"
    link.download = "Raj-Ranjan-Resume.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden pt-20 pb-12 dark:bg-linear-to-b dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed dark:opacity-30"
        style={{
          backgroundImage: "url('/images/daniel-hehn-ndkm92craxg-unsplash.jpg')",
          backgroundAttachment: "fixed",
        }}
      />

      <div className="absolute inset-0 bg-linear-to-b from-transparent via-white/20 to-white/40 dark:from-slate-950/50 dark:via-black/40 dark:to-slate-950/60" />

      <div className="relative z-10 max-w-6xl mx-auto w-full">
        <div className="rounded-2xl p-8 sm:p-12 md:p-16 shadow-xl bg-white/70 dark:bg-slate-950/95 backdrop-blur-md border border-white/30 dark:border-slate-700/50">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Column: Name and Description */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Raj Ranjan
                </h1>
                <div className="space-y-4">
                  <p className="text-base sm:text-lg md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    A curious mind who enjoys turning complex problems into simple solutions. Passionate about technology, learning, and building things that actually work.
                  </p>
                  <p className="text-base sm:text-lg md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    My development journey started with the MERN Stack, where I built hands-on experience in creating full stack applications. Now, I'm advancing my journey by learning Laravel and springBoot to strengthen my backend expertise.
                  </p>
                  <p className="text-base sm:text-lg md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    Beyond coding I'd like to keep the human side alive. In my free time, I enjoy listening to music and watching movies. I believe growth happens step-by-step and I'm always improving one line of code at a time.
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-start gap-4 pt-4">
                <Button
                  size="lg"
                  className="bg-pink-500 hover:bg-pink-600 dark:bg-pink-600 dark:hover:bg-pink-700 text-white group w-full sm:w-auto"
                  onClick={handleViewWork}
                >
                  View Work
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-pink-300 dark:border-pink-400 text-gray-900 dark:text-white hover:bg-pink-50 dark:hover:bg-pink-900/30 hover:text-gray-900 dark:hover:text-white w-full sm:w-auto bg-transparent"
                  onClick={handleContactMe}
                >
                  Contact Me
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-pink-300 dark:border-pink-400 text-gray-900 dark:text-white hover:bg-pink-50 dark:hover:bg-pink-900/30 hover:text-gray-900 dark:hover:text-white w-full sm:w-auto bg-transparent group"
                  onClick={handleDownloadResume}
                >
                  <Download className="mr-2 h-4 w-4 transition-transform group-hover:translate-y-1" />
                  Download Resume
                </Button>
              </div>

              <div className="flex items-center gap-4 pt-4">
                <a
                  href="https://github.com/raj-ranjan-70"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="flex items-center justify-center w-12 h-12 rounded-full border-2 border-pink-400 dark:border-pink-300 text-pink-600 dark:text-pink-300 bg-white/50 dark:bg-slate-800/70 hover:bg-pink-100 dark:hover:bg-pink-900/50 hover:border-pink-500 dark:hover:border-pink-200 hover:text-pink-700 dark:hover:text-pink-200 transition-all duration-300 hover:scale-110"
                >
                  <Github className="h-6 w-6" />
                </a>
                <a
                  href="https://www.linkedin.com/in/rajranjan70"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="flex items-center justify-center w-12 h-12 rounded-full border-2 border-pink-400 dark:border-pink-300 text-pink-600 dark:text-pink-300 bg-white/50 dark:bg-slate-800/70 hover:bg-pink-100 dark:hover:bg-pink-900/50 hover:border-pink-500 dark:hover:border-pink-200 hover:text-pink-700 dark:hover:text-pink-200 transition-all duration-300 hover:scale-110"
                >
                  <Linkedin className="h-6 w-6" />
                </a>
                <a
                  href="mailto:rajranjan707077@gmail.com"
                  aria-label="Email"
                  className="flex items-center justify-center w-12 h-12 rounded-full border-2 border-pink-400 dark:border-pink-300 text-pink-600 dark:text-pink-300 bg-white/50 dark:bg-slate-800/70 hover:bg-pink-100 dark:hover:bg-pink-900/50 hover:border-pink-500 dark:hover:border-pink-200 hover:text-pink-700 dark:hover:text-pink-200 transition-all duration-300 hover:scale-110"
                >
                  <Mail className="h-6 w-6" />
                </a>
              </div>
            </div>

            {/* Right Column: Profile Image */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-full max-w-sm">
                <img
                  src="/profile1.png"
                  alt="Raj Ranjan - Full Stack Developer"
                  className="w-full h-auto rounded-2xl shadow-2xl border-4 border-pink-200 dark:border-pink-900/50 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
