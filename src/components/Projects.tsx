import { motion } from "framer-motion"

const projects = [
  {
    name: "Hydrion Game Bot",
    description: "A feature-rich Discord game bot with games, economy, and engagement systems.",
    github: "https://github.com/Hydradevx/Hydrion-Game-Bot",
    stack: ["TypeScript", "discord.js"]
  },
  {
    name: "Hypr",
    description: "Advanced Discord automation and selfbot tooling with modular architecture.",
    github: "https://github.com/Hydradevx/Hypr",
    stack: ["TypeScript", "discord.js-selfbot-v13", "Automation"]
  },
  {
    name: "Dotfiles",
    description: "My Arch Linux setup — window manager, shell, tooling, and workflow configs.",
    github: "https://github.com/Hydradevx/dotfiles",
    stack: ["Linux", "Arch", "Quickshell"]
  },
  {
    name: "Portfolio",
    description: "Terminal-inspired personal site built with React, Tailwind, and motion.",
    github: "https://github.com/Hydradevx/hydra.github.io",
    stack: ["React", "Tailwind", "Framer Motion"]
  }
]

export default function Projects() {
  return (
    <section className="relative min-h-screen bg-[#0b0e14] px-10 py-28 overflow-hidden">
      {/* Subtle grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(122,162,247,0.04)_1px,transparent_1px)] bg-[size:100%_3px]" />

      <div className="relative max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="font-mono text-sm text-[#7aa2f7] mb-2">
            $ ls ~/projects
          </p>
          <h2 className="text-4xl font-bold text-white">
            Projects
          </h2>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group bg-[#0f1419] border border-[#1f2335] rounded-lg p-6 hover:border-[#7aa2f7]/60 transition"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-xl font-semibold text-white group-hover:text-[#7aa2f7] transition">
                  {project.name}
                </h3>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-xs text-gray-400 hover:text-[#7aa2f7]"
                >
                  source →
                </a>
              </div>

              {/* Description */}
              <p className="text-sm text-gray-300 leading-relaxed mb-4">
                {project.description}
              </p>

              {/* Stack */}
              <div className="flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 text-xs font-mono rounded-md bg-[#111827] border border-[#1f2335] text-gray-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer Status */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 bg-[#0f1419] border border-[#1f2335] rounded-lg p-6 font-mono text-sm text-gray-300"
        >
          <p>
            <span className="text-[#7aa2f7]">$</span> projects --status
          </p>
          <div className="mt-2 space-y-1">
            <p>• active repositories: {projects.length}</p>
            <p>• primary focus: tooling & automation</p>
            <p>• environment: arch linux</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}