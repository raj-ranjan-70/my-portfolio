"use client"

import { useRef, useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Eye, Award, X } from "lucide-react"

const certData = [
  {
    id: "01",
    title: "Cloud Computing",
    issuer: "NPTEL",
    date: "Oct 2025",
    image: "/certificates/Cloud Computing NPTEL.jpg",
    color: "from-cyan-500 to-blue-500",
    shadow: "shadow-blue-500/20",
  },
  {
    id: "02",
    title: "Competitive Programming",
    issuer: "Algotutor",
    date: "Aug 2025",
    image: "/certificates/Raj Ranjan - Certificate.png",
    color: "from-purple-500 to-pink-500",
    shadow: "shadow-purple-500/20",
  },
  {
    id: "03",
    title: "GenAI Fundamentals",
    issuer: "Disha",
    date: "Jun 2025",
    image: "/certificates/Raj Ranjan GenAI Fundamentals certificate.jpg",
    color: "from-blue-500 to-indigo-500",
    shadow: "shadow-indigo-500/20",
  },
  {
    id: "04",
    title: "Java Programming",
    issuer: "Iamneo",
    date: "May 2025",
    image: "/certificates/Certificate of Completion of Java Programming on Iamneo Platform.jpg",
    color: "from-emerald-500 to-teal-500",
    shadow: "shadow-emerald-500/20",
  },
  {
    id: "05",
    title: "Data Structures and Algorithms",
    issuer: "Iamneo",
    date: "Dec 2024",
    image: "/certificates/Certificate of Completion of Data Structures and Algorithms on Iamneo Platform.jpg",
    color: "from-orange-500 to-red-500",
    shadow: "shadow-orange-500/20",
  },
  {
    id: "06",
    title: "Object Oriented Programming",
    issuer: "Iamneo",
    date: "Dec 2024",
    image: "/certificates/Certificate of Completion of Object Oriented Programming on Iamneo Platform.jpg",
    color: "from-yellow-500 to-orange-500",
    shadow: "shadow-yellow-500/20",
  },
  {
    id: "07",
    title: "Java",
    issuer: "NPTEL",
    date: "Apr 2023",
    image: "/certificates/Java NPTEL.jpg",
    color: "from-blue-400 to-indigo-400",
    shadow: "shadow-blue-500/20",
  },
]

export default function Certifications() {
  const containerRef = useRef<HTMLDivElement>(null)
  const carouselRef = useRef<HTMLDivElement>(null)
  const [dragConstraints, setDragConstraints] = useState({ left: 0, right: 0 })
  const [selectedCert, setSelectedCert] = useState<typeof certData[0] | null>(null)

  useEffect(() => {
    if (containerRef.current && carouselRef.current) {
      setDragConstraints({
        left: -carouselRef.current.scrollWidth + containerRef.current.offsetWidth - 32, // 32px padding
        right: 0,
      })
    }

    const handleResize = () => {
      if (containerRef.current && carouselRef.current) {
        setDragConstraints({
          left: -carouselRef.current.scrollWidth + containerRef.current.offsetWidth - 32,
          right: 0,
        })
      }
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <section className="py-24 px-4 border-t border-border/50 bg-slate-50 dark:bg-[#0a0f1c] transition-colors duration-300 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[100px] -translate-y-1/2 pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10 w-full" ref={containerRef}>
        <div className="text-center mb-16 relative z-10">
          <h2 className="text-4xl md:text-6xl font-black mb-4 tracking-tighter text-lime-400 dark:text-[#a3e635] uppercase drop-shadow-sm">
            Certifications
          </h2>
          <p className="text-muted-foreground text-sm tracking-wide lowercase opacity-80">
            {certData.length} verified credentials <span className="mx-2">·</span> drag to explore timeline <span className="mx-2">·</span> scroll →
          </p>
        </div>

        {/* Timeline Carousel container */}
        <div className="relative mt-24 mb-12">
          {/* Connecting Line (Horizontal) */}
          <div className="absolute top-0 left-0 right-0 h-px bg-slate-300 dark:bg-slate-700/50 z-0" />

          <motion.div
            ref={carouselRef}
            drag="x"
            dragConstraints={dragConstraints}
            dragElastic={0.1}
            className="flex gap-16 md:gap-24 items-start pt-16 cursor-grab active:cursor-grabbing w-max pr-8 md:pr-16"
          >
            {certData.map((cert, index) => {
              // Alternate vertical positions slightly for aesthetic staggered look, like in screenshot
              const isEven = index % 2 === 0
              return (
                <div key={cert.id} className={`relative flex flex-col items-center w-[300px] md:w-[340px] ${isEven ? 'mt-0' : 'mt-12'}`}>

                  {/* Timeline Point (Year/Date + Dot) positioned above the card and connected to horizontal line */}
                  <div className="absolute -top-16 left-1/2 -translate-x-1/2 flex flex-col items-center pointer-events-none">
                    <div className="text-center mb-2">
                      <span className="block text-xs font-bold text-slate-500 dark:text-slate-400 tracking-widest uppercase">
                        {cert.date.split(' ')[0]}
                      </span>
                      <span className="block text-sm font-black text-slate-700 dark:text-slate-300 tracking-widest">
                        {cert.date.split(' ')[1]}
                      </span>
                    </div>
                    {/* The Dot */}
                    <div className="w-4 h-4 rounded-full border-[3px] border-slate-50 dark:border-[#0a0f1c] bg-blue-500 z-10 shadow-[0_0_0_2px_rgba(59,130,246,0.3)]" />
                    {/* Vertical Connecting Line down to card */}
                    <div className="w-px h-8 bg-slate-300 dark:bg-slate-700/50" />
                  </div>

                  {/* Card Main Body */}
                  <div className="w-full bg-white dark:bg-[#1a2035] rounded-xl overflow-hidden shadow-lg border border-slate-200 dark:border-slate-800 transition-all hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/10 group">

                    {/* Top stylized image header */}
                    <div className="relative h-48 sm:h-52 w-full bg-slate-100 dark:bg-slate-900 overflow-hidden group/image cursor-pointer border-b border-slate-200 dark:border-slate-800"
                         onClick={() => setSelectedCert(cert)}
                    >
                      <img 
                        src={cert.image} 
                        alt={cert.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover/image:scale-105 pointer-events-none"
                        draggable={false}
                      />
                      {/* Subdued overlay */}
                      <div className="absolute inset-0 bg-slate-900/10 dark:bg-slate-900/30 group-hover/image:bg-slate-900/40 transition-colors duration-300 pointer-events-none" />
                      
                      {/* View Link Overlay Button */}
                      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <div className="bg-white/90 dark:bg-slate-800/95 text-slate-900 dark:text-white px-5 py-2.5 rounded-full font-bold text-sm flex items-center gap-2 transform translate-y-6 opacity-0 group-hover/image:translate-y-0 group-hover/image:opacity-100 transition-all duration-300 shadow-xl border border-white/20 dark:border-slate-700">
                          <Eye className="w-4 h-4" />
                          View Full Certificate
                        </div>
                      </div>

                      <div className="absolute top-4 right-4 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md text-[9px] font-black tracking-[0.2em] uppercase text-slate-700 dark:text-slate-300 px-3 py-1.5 rounded-sm shadow-md z-10 pointer-events-none border border-slate-200 dark:border-slate-700/50">
                        Course Certificate
                      </div>
                    </div>

                    {/* Bottom Info Section */}
                    <div className="p-6 relative">
                      {/* Gradient overlay on hover */}
                      <div className={`absolute inset-0 bg-linear-to-br ${cert.color} opacity-0 group-hover:opacity-[0.03] transition-opacity`} />

                      <div className="flex justify-between items-start mb-4 text-xs font-mono text-slate-400">
                        <span>{cert.id}</span>
                      </div>

                      <h3 className="text-lg md:text-xl font-bold text-slate-800 dark:text-slate-100 leading-snug mb-2 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors">
                        {cert.title}
                      </h3>

                      <div className="flex items-center gap-2 mt-4 text-sm font-semibold text-slate-500 dark:text-slate-400">
                        <span className={`w-2 h-2 rounded-full bg-gradient-to-r ${cert.color}`} />
                        {cert.issuer}
                      </div>

                      {/* View Button */}
                      <div className="mt-8">
                        <button
                          onClick={() => setSelectedCert(cert)}
                          className="inline-flex items-center justify-center gap-2 w-full px-4 py-2 bg-slate-800 dark:bg-slate-700 hover:bg-slate-900 dark:hover:bg-slate-600 text-white rounded-lg text-sm font-semibold transition-colors focus:ring-4 focus:ring-slate-500/20"
                        >
                          <Eye className="w-4 h-4" />
                          View Full Certificate
                        </button>
                      </div>
                    </div>
                  </div>

                </div>
              )
            })}
          </motion.div>
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCert(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8 bg-slate-950/80 backdrop-blur-xl"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 10 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 10 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-5xl flex flex-col items-center justify-center"
            >
              <button
                onClick={() => setSelectedCert(null)}
                className="absolute -top-12 right-0 md:-right-12 xl:-right-16 md:top-0 p-2 text-slate-400 hover:text-white bg-slate-900/50 hover:bg-slate-800 rounded-full backdrop-blur-md transition-all z-[110] border border-slate-700"
              >
                <X className="w-6 h-6" />
              </button>
              
              <div className="relative w-full rounded-lg md:rounded-2xl overflow-hidden shadow-2xl shadow-blue-500/10 border border-slate-700/50 bg-[#0a0f1c] flex items-center justify-center p-2 md:p-4">
                <img 
                  src={selectedCert.image} 
                  alt={selectedCert.title}
                  className="w-auto h-auto max-w-full max-h-[85vh] object-contain rounded-md md:rounded-xl shadow-inner"
                />
              </div>

              {/* Modal Details Tag */}
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-slate-900/90 backdrop-blur-lg px-6 py-3 rounded-full border border-slate-700 shadow-xl flex items-center gap-3 whitespace-nowrap z-[110]">
                <span className={`w-3 h-3 rounded-full bg-gradient-to-r ${selectedCert.color}`} />
                <span className="text-white font-bold">{selectedCert.title}</span>
                <span className="text-slate-400 font-medium px-3 border-l border-slate-700">{selectedCert.issuer}</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
