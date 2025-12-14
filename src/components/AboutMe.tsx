import { useRef } from "react"
import { motion, useInView } from "framer-motion"

export default function AboutMe() {
  const ref = useRef(null)
  const isInView = useInView(ref, { margin: "-40%" })

  return (
    <section
      ref={ref}
      className="w-full min-h-screen bg-[#0b0e14] text-[#c0caf5] px-10 py-24 relative"
    >
      <div className="max-w-6xl mx-auto space-y-12">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 10 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-mono text-sm text-[#7aa2f7] mb-2">
            man hydradev
          </h2>
          <h3 className="text-4xl font-bold text-white">
            About
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

          {/* About */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : -20 }}
            transition={{ duration: 0.6 }}
            className="bg-[#0f1419] border border-[#1f2335] rounded-lg font-mono text-sm"
          >
            <div className="px-4 py-2 border-b border-[#1f2335] text-gray-400">
              $ cat about.md
            </div>
            <div className="p-4 space-y-4 text-gray-300 leading-relaxed">
              <p>
                Hi, I’m <span className="text-white">HydraDevX</span>.
              </p>
              <p>
                I build developer tools, automation systems, and UI-heavy
                applications with a focus on performance and control.
              </p>
              <p>
                My daily environment is <span className="text-white">Arch Linux</span>.
                I prefer minimal systems, clean abstractions, and tooling that
                stays out of the way.
              </p>
            </div>
          </motion.div>

          {/* Stack & Stats */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : 20 }}
            transition={{ duration: 0.6 }}
            className="space-y-6 font-mono text-sm"
          >
            {/* Tech Stack */}
            <div className="bg-[#0f1419] border border-[#1f2335] rounded-lg">
              <div className="px-4 py-2 border-b border-[#1f2335] text-gray-400">
                tech stack
              </div>
              <div className="p-4 flex flex-wrap gap-2">
                <img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=white" />
                <img src="https://img.shields.io/badge/Node.js-339933?style=flat&logo=node.js&logoColor=white" />
                <img src="https://img.shields.io/badge/Linux-000000?style=flat&logo=linux&logoColor=white" />
                <img src="https://img.shields.io/badge/Arch_Linux-1793D1?style=flat&logo=arch-linux&logoColor=white" />
                <img src="https://img.shields.io/badge/React-20232A?style=flat&logo=react&logoColor=61DAFB" />
                <img src="https://img.shields.io/badge/Tailwind-0F172A?style=flat&logo=tailwind-css&logoColor=38BDF8" />
                <img src="https://img.shields.io/badge/Discord_Bots-5865F2?style=flat&logo=discord&logoColor=white" />
              </div>
            </div>

            {/* System Info */}
            <div className="bg-[#0f1419] border border-[#1f2335] rounded-lg">
              <div className="px-4 py-2 border-b border-[#1f2335] text-gray-400">
                system
              </div>
              <div className="p-4 text-gray-300 space-y-1">
                <p><span className="text-[#7aa2f7]">OS</span>: Arch Linux</p>
                <p><span className="text-[#7aa2f7]">Shell</span>: fish</p>
                <p><span className="text-[#7aa2f7]">Editor</span>: VS Code</p>
                <p><span className="text-[#7aa2f7]">Focus</span>: Tooling, Automation</p>
              </div>
            </div>

            {/* GitHub Stats */}
            <div className="bg-[#0f1419] border border-[#1f2335] rounded-lg p-4">
              <img
                src="https://github-readme-stats.vercel.app/api?username=Hydradevx&theme=transparent&hide_border=true&text_color=c0caf5&title_color=7aa2f7&icon_color=7aa2f7"
                alt="GitHub stats"
                className="w-full"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Subtle grid */}
      <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(122,162,247,0.03)_1px,transparent_1px)] bg-[size:100%_3px]" />
    </section>
  )
}