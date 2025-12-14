import { motion } from "framer-motion"

const STACK = {
  "Languages": [
    "TypeScript",
    "JavaScript",
    "Python",
    "C++",
    "Bash"
  ],
  "Runtime & Frameworks": [
    "Node.js",
    "React",
    "Next.js",
    "Express",
    "Bun"
  ],
  "Systems & Tooling": [
    "Linux",
    "Arch Linux",
    "Git",
    "Docker",
    "Vim"
  ],
  "APIs & Automation": [
    "Discord API",
    "REST",
    "WebSockets",
    "OAuth2",
    "Automation"
  ]
}

const badge = (name: string) =>
  `https://img.shields.io/badge/${encodeURIComponent(name)}-0b0e14?style=for-the-badge&logoColor=7aa2f7&labelColor=0b0e14&color=1f2335`

export default function Skills() {
  return (
    <section className="relative min-h-screen bg-[#0b0e14] px-10 py-28 overflow-hidden">
      {/* Background grid */}
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
            $ ls ~/stack
          </p>
          <h2 className="text-4xl font-bold text-white">
            Tech Stack
          </h2>
        </motion.div>

        {/* Stack Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {Object.entries(STACK).map(([group, items], i) => (
            <motion.div
              key={group}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-[#0f1419] border border-[#1f2335] rounded-lg p-6"
            >
              <h3 className="font-mono text-sm text-gray-400 mb-4">
                {group}
              </h3>

              <div className="flex flex-wrap gap-3">
                {items.map((tech) => (
                  <img
                    key={tech}
                    src={badge(tech)}
                    alt={tech}
                    className="h-7"
                    loading="lazy"
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            ["5+", "Years Coding"],
            ["20+", "Projects"],
            ["∞", "Configs Broken"],
            ["Arch", "BTW"]
          ].map(([value, label]) => (
            <div
              key={label}
              className="bg-[#0f1419] border border-[#1f2335] rounded-lg p-6 text-center"
            >
              <div className="text-3xl font-bold text-white mb-1">
                {value}
              </div>
              <div className="text-xs font-mono text-gray-400">
                {label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}