import { useEffect, useState } from "react"
import { motion } from "framer-motion"

const COMMANDS = [
  "whoami",
  "uname -a",
  "cat arch.txt",
  "cat about.txt"
]

const OUTPUTS = [
  "hydradevx",
  "Linux arch 6.8.9-arch1-1 x86_64 GNU/Linux",
  `
                   /\\
                  /  \\
                 /\\   \\
                /      \\
               /   ,,   \\
              /   |  |   \\
             /_-''    ''-_\\

OS: Arch Linux
Shell: zsh
WM: Hyprland
`,
  "Developer. Linux user. Systems & UI engineer."
]

export default function Hero() {
  const [line, setLine] = useState(0)
  const [typed, setTyped] = useState("")
  const [done, setDone] = useState(false)

  useEffect(() => {
    if (line >= COMMANDS.length) return

    let i = 0
    const interval = setInterval(() => {
      setTyped(COMMANDS[line].slice(0, i + 1))
      i++
      if (i === COMMANDS[line].length) {
        clearInterval(interval)
        setTimeout(() => setDone(true), 350)
      }
    }, 55)

    return () => clearInterval(interval)
  }, [line])

  useEffect(() => {
    if (!done) return
    const t = setTimeout(() => {
      setTyped("")
      setDone(false)
      setLine((l) => l + 1)
    }, 750)
    return () => clearTimeout(t)
  }, [done])

  return (
    <section className="relative h-screen bg-[#0b0e14] text-[#c0caf5] px-10 flex items-center">
      <div className="max-w-4xl w-full">

        {/* Header */}
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-bold tracking-tight text-white mb-2"
        >
          HydraDevX
        </motion.h1>

        <p className="text-sm text-[#7aa2f7] mb-8 font-mono">
          Arch Linux • TypeScript • Systems • UI
        </p>

        {/* Terminal */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="bg-[#0f1419] border border-[#1f2335] rounded-lg font-mono text-sm overflow-hidden shadow-xl"
        >
          {/* Titlebar */}
          <div className="flex items-center gap-2 px-4 py-2 bg-[#111827] border-b border-[#1f2335]">
            <span className="w-3 h-3 bg-red-500 rounded-full" />
            <span className="w-3 h-3 bg-yellow-500 rounded-full" />
            <span className="w-3 h-3 bg-green-500 rounded-full" />
            <span className="ml-4 text-xs text-gray-400">
              hydra@arch: ~
            </span>
          </div>

          {/* Terminal Body */}
          <div className="p-4 space-y-3 whitespace-pre-wrap">
            {COMMANDS.slice(0, line).map((cmd, i) => (
              <div key={i}>
                <div className="text-[#7aa2f7]">
                  <span className="text-[#9ece6a]">hydra@arch</span>
                  <span className="text-gray-500">:</span>
                  <span className="text-[#7aa2f7]">~</span>$ {cmd}
                </div>
                <div className="text-gray-300 pl-4">
                  {OUTPUTS[i]}
                </div>
              </div>
            ))}

            {line < COMMANDS.length && (
              <div className="text-[#7aa2f7]">
                <span className="text-[#9ece6a]">hydra@arch</span>
                <span className="text-gray-500">:</span>
                <span className="text-[#7aa2f7]">~</span>$ {typed}
                <span className="animate-pulse">▋</span>
              </div>
            )}
          </div>
        </motion.div>

      </div>

      {/* Scroll Hint */}
      <motion.div
        animate={{ y: [0, 6, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-xs text-gray-500 font-mono"
      >
        scroll ↓
      </motion.div>
    </section>
  )
}