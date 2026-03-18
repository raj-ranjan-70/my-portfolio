"use client"

import { useEffect, useState } from "react"
import { Github, Code2, Trophy, Code } from "lucide-react"
import { LineChart, Line, ResponsiveContainer, YAxis, XAxis, Tooltip } from "recharts"

const skillsData = [
  { name: 'SpringBoot', level: 50 },
  { name: 'Laravel', level: 30 },
  { name: 'React', level: 90 },
  { name: 'Node.js', level: 90 },
  { name: 'Java', level: 90 },
  { name: 'DSA', level: 80 },
]

export default function Social() {
  const [leetcodeData, setLeetcodeData] = useState<any[]>([])
  const [leetcodeTicks, setLeetcodeTicks] = useState<number[]>([])
  const [codeforcesData, setCodeforcesData] = useState<any[]>([])
  const [codeforcesTicks, setCodeforcesTicks] = useState<number[]>([])

  useEffect(() => {
    // Fetch LeetCode Data
    const fetchLeetCode = async () => {
      try {
        const res = await fetch('https://alfa-leetcode-api.onrender.com/rajranjan70/contest/history')
        const data = await res.json()
        if (data && data.contestHistory) {
          // Map to rating history, keeping only the last 6 months from the latest contest proportionally
          const attendedContests = data.contestHistory.filter((c: any) => c.attended)
          if (attendedContests.length > 0) {
            const latestTime = Math.max(...attendedContests.map((c: any) => c.contest.startTime * 1000))
            const ticks: number[] = []
            for (let i = 5; i >= 0; i--) {
              const d = new Date(latestTime)
              d.setMonth(d.getMonth() - i)
              ticks.push(d.getTime())
            }
            setLeetcodeTicks(ticks)
            const sixMonthsAgo = ticks[0]

            const formatted = attendedContests
              .filter((c: any) => (c.contest.startTime * 1000) >= sixMonthsAgo)
              .map((c: any) => ({
                timestamp: c.contest.startTime * 1000,
                rating: Math.round(c.rating)
              }))
            setLeetcodeData(formatted)
          }
        }
      } catch (error) {
        console.error("Failed to fetch LeetCode data", error)
      }
    }

    // Fetch CodeForces Data
    const fetchCodeForces = async () => {
      try {
        const res = await fetch('https://codeforces.com/api/user.rating?handle=Raj_Ranjan')
        const data = await res.json()
        if (data && data.status === "OK" && data.result && data.result.length > 0) {
          // Map to rating history, keeping only the last 6 months from the latest contest proportionally
          const latestTime = Math.max(...data.result.map((r: any) => r.ratingUpdateTimeSeconds * 1000))
          const ticks: number[] = []
          for (let i = 5; i >= 0; i--) {
            const d = new Date(latestTime)
            d.setMonth(d.getMonth() - i)
            ticks.push(d.getTime())
          }
          setCodeforcesTicks(ticks)
          const sixMonthsAgo = ticks[0]

          const formatted = data.result
            .filter((r: any) => (r.ratingUpdateTimeSeconds * 1000) >= sixMonthsAgo)
            .map((r: any) => ({
              timestamp: r.ratingUpdateTimeSeconds * 1000,
              rating: r.newRating
            }))
          setCodeforcesData(formatted)
        }
      } catch (error) {
        console.error("Failed to fetch CodeForces data", error)
      }
    }

    fetchLeetCode()
    fetchCodeForces()
  }, [])

  return (
    <section className="py-24 px-4 bg-gradient-to-b from-pink-50 to-white dark:from-slate-900 dark:to-slate-950 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-rose-400 via-pink-300 to-rose-300 dark:from-rose-300 dark:via-pink-200 dark:to-rose-200 bg-clip-text text-transparent">
            Connect With Me
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Find me across various platforms where I share code, solutions, and professional insights
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* GitHub Card */}
          <a
            href="https://github.com/raj-ranjan-70"
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <div className="relative h-full p-6 rounded-2xl border border-border/30 dark:border-border/50 bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm hover:border-border/50 dark:hover:border-rose-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-rose-200/20 dark:hover:shadow-rose-900/20 flex flex-col items-center text-center">
              <div className="flex items-center justify-center w-16 h-16 rounded-full border border-border/50 dark:border-border/70 bg-white dark:bg-slate-800 mb-4 hover:bg-slate-500/10 hover:border-slate-500/50 focus:ring-slate-500 transition-all duration-300 group-hover:scale-110">
                <Github className="w-8 h-8 text-gray-700 dark:text-gray-300" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white group-hover:text-rose-600 dark:group-hover:text-rose-400 transition-colors">
                GitHub
              </h3>

              {/* Contribution Heatmap Image */}
              <div className="w-full flex-grow flex items-center justify-center py-4 overflow-hidden">
                {/* 
                  Using a custom API for the contribution graph since it's the requested format.
                  Added a negative margin to pull it a bit and scale to fit nicely in the card.
                */}
                <img
                  src="https://github-readme-activity-graph.vercel.app/graph?username=raj-ranjan-70"
                  alt="GitHub Contribution Graph"
                  className="w-[120%] max-w-none h-auto object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                />
              </div>

              <span className="inline-flex items-center text-sm font-medium text-rose-600 group-hover:translate-x-1 transition-transform mt-auto pt-2">
                Visit Profile
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.5 6H6m0 0H4.5M6 6v13.5a1.5 1.5 0 001.5 1.5h10.5m0 0V6m0 0h1.5M6 19.5h12" />
                </svg>
              </span>
            </div>
          </a>

          {/* LeetCode Card */}
          <a
            href="https://leetcode.com/u/rajranjan70/"
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <div className="relative h-full p-6 rounded-2xl border border-border/30 dark:border-border/50 bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm hover:border-border/50 dark:hover:border-rose-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-rose-200/20 dark:hover:shadow-rose-900/20 flex flex-col items-center text-center">
              <div className="flex items-center justify-center w-16 h-16 rounded-full border border-border/50 dark:border-border/70 bg-white dark:bg-slate-800 mb-4 hover:bg-amber-500/10 hover:border-amber-500/50 focus:ring-amber-500 transition-all duration-300 group-hover:scale-110">
                <Code2 className="w-8 h-8 text-gray-700 dark:text-gray-300" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white group-hover:text-rose-600 dark:group-hover:text-rose-400 transition-colors">
                LeetCode
              </h3>

              {/* Rating Chart */}
              <div className="w-full flex-grow h-24 py-4 flex flex-col justify-end">
                {leetcodeData.length > 0 ? (
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={leetcodeData} margin={{ top: 20, right: 30, bottom: 20, left: 30 }}>
                      <XAxis
                        dataKey="timestamp"
                        type="number"
                        domain={[leetcodeTicks[0], leetcodeTicks[5]]}
                        ticks={leetcodeTicks}
                        tickFormatter={(tick) => new Date(tick).toLocaleString('default', { month: 'short' })}
                        tick={{ fill: '#64748b', fontSize: 12 }}
                        tickMargin={10}
                        axisLine={false}
                        tickLine={false}
                      />
                      <YAxis domain={['dataMin - 50', 'dataMax + 50']} hide />
                      <Tooltip
                        contentStyle={{ backgroundColor: 'rgba(15, 23, 42, 0.9)', border: 'none', borderRadius: '8px', color: '#fff', fontSize: '12px' }}
                        itemStyle={{ color: '#fbbf24' }}
                        labelFormatter={(label) => new Date(label).toLocaleString('default', { month: 'long', year: 'numeric' })}
                        formatter={(value) => [`${value}`, 'Rating']}
                        labelStyle={{ color: '#fff', marginBottom: '4px' }}
                      />
                      <Line
                        type="monotone"
                        dataKey="rating"
                        stroke="#fbbf24"
                        strokeWidth={3}
                        dot={{ r: 4, fill: '#fbbf24', strokeWidth: 0 }}
                        activeDot={{ r: 6, fill: '#fbbf24', strokeWidth: 0 }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="w-5 h-5 border-2 border-amber-500/20 border-t-amber-500 rounded-full animate-spin" />
                  </div>
                )}
              </div>

              <span className="inline-flex items-center text-sm font-medium text-rose-600 group-hover:translate-x-1 transition-transform mt-auto pt-2">
                Visit Profile
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.5 6H6m0 0H4.5M6 6v13.5a1.5 1.5 0 001.5 1.5h10.5m0 0V6m0 0h1.5M6 19.5h12" />
                </svg>
              </span>
            </div>
          </a>

          {/* CodeForces Card */}
          <a
            href="https://codeforces.com/profile/Raj_Ranjan"
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <div className="relative h-full p-6 rounded-2xl border border-border/30 dark:border-border/50 bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm hover:border-border/50 dark:hover:border-rose-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-rose-200/20 dark:hover:shadow-rose-900/20 flex flex-col items-center text-center">
              <div className="flex items-center justify-center w-16 h-16 rounded-full border border-border/50 dark:border-border/70 bg-white dark:bg-slate-800 mb-4 hover:bg-rose-500/10 hover:border-rose-500/50 focus:ring-rose-500 transition-all duration-300 group-hover:scale-110">
                <Trophy className="w-8 h-8 text-gray-700 dark:text-gray-300" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white group-hover:text-rose-600 dark:group-hover:text-rose-400 transition-colors">
                CodeForces
              </h3>

              {/* Rating Chart */}
              <div className="w-full flex-grow h-24 py-4 flex flex-col justify-end">
                {codeforcesData.length > 0 ? (
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={codeforcesData} margin={{ top: 20, right: 30, bottom: 20, left: 30 }}>
                      <XAxis
                        dataKey="timestamp"
                        type="number"
                        domain={[codeforcesTicks[0], codeforcesTicks[5]]}
                        ticks={codeforcesTicks}
                        tickFormatter={(tick) => new Date(tick).toLocaleString('default', { month: 'short' })}
                        tick={{ fill: '#64748b', fontSize: 12 }}
                        tickMargin={10}
                        axisLine={false}
                        tickLine={false}
                      />
                      <YAxis domain={['dataMin - 50', 'dataMax + 50']} hide />
                      <Tooltip
                        contentStyle={{ backgroundColor: 'rgba(15, 23, 42, 0.9)', border: 'none', borderRadius: '8px', color: '#fff', fontSize: '12px' }}
                        itemStyle={{ color: '#f43f5e' }}
                        labelFormatter={(label) => new Date(label).toLocaleString('default', { month: 'long', year: 'numeric' })}
                        formatter={(value) => [`${value}`, 'Rating']}
                        labelStyle={{ color: '#fff', marginBottom: '4px' }}
                      />
                      <Line
                        type="monotone"
                        dataKey="rating"
                        stroke="#f43f5e"
                        strokeWidth={3}
                        dot={{ r: 4, fill: '#f43f5e', strokeWidth: 0 }}
                        activeDot={{ r: 6, fill: '#f43f5e', strokeWidth: 0 }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="w-5 h-5 border-2 border-rose-500/20 border-t-rose-500 rounded-full animate-spin" />
                  </div>
                )}
              </div>

              <span className="inline-flex items-center text-sm font-medium text-rose-600 group-hover:translate-x-1 transition-transform mt-auto pt-2">
                Visit Profile
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.5 6H6m0 0H4.5M6 6v13.5a1.5 1.5 0 001.5 1.5h10.5m0 0V6m0 0h1.5M6 19.5h12" />
                </svg>
              </span>
            </div>
          </a>

          {/* Skills Card (Replaces LinkedIn) */}
          <div className="group relative h-full p-6 rounded-2xl border border-border/30 dark:border-border/50 bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm hover:border-border/50 dark:hover:border-rose-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-rose-200/20 dark:hover:shadow-rose-900/20 flex flex-col items-center text-center">
            <div className="flex items-center justify-center w-16 h-16 rounded-full border border-border/50 dark:border-border/70 bg-white dark:bg-slate-800 mb-4 hover:bg-blue-500/10 hover:border-blue-500/50 focus:ring-blue-500 transition-all duration-300 group-hover:scale-110">
              <Code className="w-8 h-8 text-gray-700 dark:text-gray-300" />
            </div>
            <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white group-hover:text-rose-600 dark:group-hover:text-rose-400 transition-colors">
              Skills
            </h3>

            {/* Skills Progress Bars */}
            <div className="w-full flex-grow flex flex-col justify-center space-y-3 py-2">
              {skillsData.map((skill) => (
                <div key={skill.name} className="w-full text-left">
                  <div className="flex justify-between text-xs mb-1">
                    <span className="font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
                  </div>
                  <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-1.5 overflow-hidden">
                    <div
                      className="bg-gradient-to-r from-rose-400 to-pink-500 h-1.5 rounded-full"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        <div className="mt-16 pt-16 border-t border-border/20 dark:border-border/50">
          <div className="text-center">
            <p className="text-muted-foreground mb-6">
              Or reach out directly via email to discuss opportunities
            </p>
            <a
              href="mailto:rajranjan707077@gmail.com"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-rose-400 to-pink-400 dark:from-rose-500 dark:to-pink-500 hover:from-rose-500 hover:to-pink-500 dark:hover:from-rose-600 dark:hover:to-pink-600 text-white font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-rose-300/50 dark:hover:shadow-rose-900/50 hover:scale-105"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Send Email
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
