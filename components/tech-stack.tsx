import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { FaJava, FaPython, FaPhp, FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaGitAlt } from "react-icons/fa"
import { SiC, SiCplusplus, SiJavascript, SiTailwindcss, SiExpress, SiSpringboot, SiMysql, SiMongodb, SiApachemaven } from "react-icons/si"
import { HiOutlineLightBulb, HiOutlineUserGroup, HiOutlineEye } from "react-icons/hi"
import { MdTransform } from "react-icons/md"

const categories = {
  Languages: [
    { name: "Java", icon: FaJava, color: "text-[#ed8b00]" },
    { name: "C", icon: SiC, color: "text-[#00599C]" },
    { name: "Python", icon: FaPython, color: "text-[#3776AB]" },
    { name: "PHP", icon: FaPhp, color: "text-[#777BB4]" },
    { name: "JavaScript", icon: SiJavascript, color: "text-[#F7DF1E]" },
    { name: "C++", icon: SiCplusplus, color: "text-[#00599C]" },
    { name: "HTML", icon: FaHtml5, color: "text-[#E34F26]" },
    { name: "CSS", icon: FaCss3Alt, color: "text-[#1572B6]" }
  ],
  Frameworks: [
    { name: "Tailwind", icon: SiTailwindcss, color: "text-[#06B6D4]" },
    { name: "ReactJS", icon: FaReact, color: "text-[#61DAFB]" },
    { name: "NodeJS", icon: FaNodeJs, color: "text-[#339933]" },
    { name: "ExpressJS", icon: SiExpress, color: "text-gray-900 dark:text-white" },
    { name: "Spring Boot", icon: SiSpringboot, color: "text-[#6DB33F]" }
  ],
  "Tools/Platforms": [
    { name: "MySQL", icon: SiMysql, color: "text-[#4479A1]" },
    { name: "MongoDB", icon: SiMongodb, color: "text-[#47A248]" },
    { name: "Maven", icon: SiApachemaven, color: "text-[#C71A22]" },
    { name: "Git", icon: FaGitAlt, color: "text-[#F05032]" }
  ],
  "Soft Skills": [
    { name: "Problem-Solving", icon: HiOutlineLightBulb, color: "text-amber-500" },
    { name: "Teamwork", icon: HiOutlineUserGroup, color: "text-blue-500" },
    { name: "Good Observer", icon: HiOutlineEye, color: "text-emerald-500" },
    { name: "Adaptability", icon: MdTransform, color: "text-purple-500" }
  ],
}

export default function TechStack() {
  return (
    <section className="min-h-screen py-24 px-4 border-t border-pink-200/50 dark:border-slate-700/50 bg-gradient-to-b from-white via-pink-50 to-white dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 transition-colors duration-300">
      <div className="max-w-6xl mx-auto w-full">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">Tech Stack</h2>

        <div className="flex justify-center">
          <Tabs defaultValue="Languages" className="w-full max-w-4xl min-h-[400px] mb-8">
            <TabsList className="w-full flex flex-wrap h-auto justify-center gap-3 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm border border-pink-200/30 dark:border-slate-700/30 p-2 rounded-2xl mb-8">
              {Object.keys(categories).map((category) => (
                <TabsTrigger
                  key={category}
                  value={category}
                  className="px-6 py-3 rounded-full text-base md:text-lg data-[state=active]:bg-white dark:data-[state=active]:bg-slate-800 data-[state=active]:text-pink-600 dark:data-[state=active]:text-pink-400 data-[state=active]:shadow-md hover:bg-white/60 dark:hover:bg-slate-800/60 transition-all text-gray-600 dark:text-gray-300 font-medium cursor-pointer"
                >
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>

            {Object.entries(categories).map(([category, items]) => (
              <TabsContent key={category} value={category} className="mt-0 outline-none">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                  {items.map((item, index) => (
                    <a
                      key={index}
                      href="#"
                      className="flex flex-col justify-center items-center gap-3 px-6 py-8 bg-white/70 dark:bg-slate-800/80 border border-white/30 dark:border-slate-600/50 rounded-2xl backdrop-blur-md hover:-translate-y-1 hover:border-pink-400 dark:hover:border-pink-400 hover:shadow-xl dark:hover:shadow-pink-500/20 transition-all duration-300 text-center group cursor-pointer"
                    >
                      <item.icon className={`w-10 h-10 ${item.color} group-hover:scale-110 transition-transform duration-300`} />
                      <span className="text-lg font-semibold text-gray-800 dark:text-gray-100 group-hover:text-pink-600 dark:group-hover:text-pink-400 transition-colors">{item.name}</span>
                    </a>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  )
}

