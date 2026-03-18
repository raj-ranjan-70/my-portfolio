import { GraduationCap, Calendar, MapPin } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const educationData = [
  {
    id: 1,
    degree: "Bachelor of Technology - Computer Science and Engineering",
    institution: "Lovely Professional University",
    location: "Punjab, India",
    period: "Aug 2024 - Present",
    cgpa: "8.81",
    highlights: [
      "Completed Competitive Programming training (28 days)",
      "Cloud Computing certification from NPTEL, IIT Kharagpur",
      "Active participant in coding contests (LeetCode Rating: 1500+, CodeForces: 920)",
    ],
  },
  {
    id: 2,
    degree: "Diploma in Computer Science and Engineering",
    institution: "Government Polytechnic Muzaffarpur",
    location: "Muzaffarpur, Bihar",
    period: "Aug 2020 - Mar 2023",
    cgpa: "8.78",
    highlights: [
      "Strong foundation in programming fundamentals",
      "Completed multiple certifications in Java, DSA, and OOP",
      "Built foundational projects and developed problem-solving skills",
    ],
  },
  {
    id: 3,
    degree: "Matriculation",
    institution: "St. Joseph's Sr. Sec. School",
    location: "Muzaffarpur, Bihar",
    period: "Apr 2017 - Mar 2018",
    cgpa: "78%",
    highlights: ["Completed secondary education with strong academic performance"],
  },
]

export default function Education() {
  return (
    <section className="py-24 px-4 border-t border-border/50 bg-white dark:bg-slate-950 transition-colors duration-300 relative overflow-hidden">
      
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[100px] -translate-y-1/2 -z-10" />

      <div className="max-w-4xl mx-auto relative">
        <div className="text-center mb-16 relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">Education</h2>
          <p className="text-muted-foreground text-lg">My academic journey</p>
        </div>

        <div className="relative">
          {/* Main Vertical Timeline Line */}
          <div className="absolute left-7 md:left-[27px] top-6 bottom-6 w-0.5 bg-linear-to-b from-purple-500 via-purple-300 to-transparent dark:from-purple-600 dark:via-purple-900/40" />

          <div className="space-y-12 relative z-10">
            {educationData.map((edu) => (
              <div key={edu.id} className="relative flex flex-col md:flex-row gap-8 items-start pl-20 md:pl-0">
                
                {/* Journey Node */}
                <div className="absolute left-0 top-0 md:relative md:top-0 md:flex flex-col items-center w-14 shrink-0 transition-transform duration-500 hover:scale-110">
                  <div className="flex items-center justify-center w-14 h-14 rounded-full bg-white dark:bg-slate-950 border-4 border-purple-200 dark:border-purple-800 shadow-md text-purple-600 dark:text-purple-400 z-10 relative">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                </div>

                {/* Content Card */}
                <Card className="flex-1 w-full border-border/50 hover:border-purple-500/40 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group relative overflow-hidden bg-white/60 dark:bg-slate-900/60 backdrop-blur-md">
                  {/* Subtle inner gradient hover effect */}
                  <div className="absolute inset-0 bg-linear-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <CardHeader className="pb-4 relative z-10">
                    <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                      
                      {/* Left Header info */}
                      <div>
                        <CardTitle className="text-xl mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                          {edu.degree}
                        </CardTitle>
                        <div className="space-y-2 text-sm text-muted-foreground">
                          <p className="font-semibold text-foreground text-base tracking-tight">{edu.institution}</p>
                          <div className="flex items-center gap-1.5 text-gray-600 dark:text-gray-400">
                            <MapPin className="w-4 h-4" />
                            {edu.location}
                          </div>
                        </div>
                      </div>
                      
                      {/* Right Header info */}
                      <div className="flex flex-col items-start md:items-end gap-2 shrink-0">
                        <div className="flex items-center gap-1.5 bg-purple-50 dark:bg-purple-500/10 text-purple-600 dark:text-purple-400 px-3 py-1.5 rounded-full text-sm font-medium border border-purple-100 dark:border-purple-500/20">
                          <Calendar className="w-4 h-4" />
                          {edu.period}
                        </div>
                        <span className="font-bold text-gray-900 dark:text-white bg-slate-100 dark:bg-slate-800 px-3 py-1.5 rounded-full text-sm border border-slate-200 dark:border-slate-700 shadow-sm">
                          {edu.cgpa.includes("%") ? `Score: ${edu.cgpa}` : `CGPA: ${edu.cgpa}`}
                        </span>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="relative z-10">
                    <ul className="space-y-3">
                      {edu.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm">
                          <span className="mt-1.5 shrink-0">
                            <div className="w-1.5 h-1.5 rounded-full bg-purple-400 dark:bg-purple-500 shadow-[0_0_8px_rgba(168,85,247,0.8)]" />
                          </span>
                          <span className="text-gray-600 dark:text-gray-300 leading-relaxed">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
