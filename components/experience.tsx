import { Briefcase } from "lucide-react"

const experiences = [
  {
    id: 1,
    role: "Competitive Programming Training",
    company: "Lovely Professional University",
    period: "Jul 2025",
    description:
      "Completed an intensive 28-day Competitive Programming training program to build consistency and strengthen problem-solving skills for technical interviews and coding contests.",
    achievements: [
      "Practiced algorithms and data structures daily including arrays, recursion, graphs, dynamic programming, and sliding window techniques",
      "Achieved noticeable improvement in logic-building and accuracy, resulting in faster problem-solving speed",
      "Gained better familiarity with common competitive programming patterns across multiple platforms",
    ],
  },
]

export default function Experience() {
  return (
    <section className="py-24 px-4 border-t border-border/50 bg-gradient-to-b from-white to-pink-50 dark:from-slate-900 dark:to-slate-950 transition-colors duration-300">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white">Training & Experience</h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-purple-500 via-blue-500 to-transparent" />

          <div className="space-y-12">
            {experiences.map((exp) => (
              <div key={exp.id} className="relative pl-8 md:pl-20">
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-[1.875rem] top-2 w-4 h-4 rounded-full bg-purple-500 border-4 border-background" />

                <div className="space-y-3">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <div>
                      <h3 className="text-xl font-bold">{exp.role}</h3>
                      <p className="text-muted-foreground flex items-center gap-2">
                        <Briefcase className="h-4 w-4" />
                        {exp.company}
                      </p>
                    </div>
                    <span className="text-sm text-muted-foreground bg-muted px-3 py-1 rounded-full w-fit">
                      {exp.period}
                    </span>
                  </div>

                  <p className="text-muted-foreground leading-relaxed">{exp.description}</p>

                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm">
                        <span className="text-purple-400 mt-1">•</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
