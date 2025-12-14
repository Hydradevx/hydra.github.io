import { Github, Users } from "lucide-react"

export default function Footer() {
  return (
    <footer className="relative w-full px-10 py-8 bg-[#0b0e14] border-t border-[#1f2335]">
      {/* subtle grid */}
      <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(122,162,247,0.03)_1px,transparent_1px)] bg-[size:100%_3px]" />

      <div className="relative max-w-6xl mx-auto flex flex-col gap-6">
        {/* Top row */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          {/* Left */}
          <div className="font-mono">
            <div className="text-white text-lg font-semibold">
              HydraDevX
            </div>
            <div className="text-sm text-gray-400">
              developer • linux • tooling
            </div>
          </div>

          {/* Center */}
          <div className="flex items-center gap-5">
            <a
              href="https://github.com/Hydradevx"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#7aa2f7] transition"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a
              href="https://discord.gg/6Tufbvnebj"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#7aa2f7] transition"
              aria-label="Discord"
            >
              <Users size={18} />
            </a>
          </div>

          {/* Right */}
          <div className="font-mono text-sm text-gray-500">
            <p>since 2024</p>
            <p>arch linux</p>
          </div>
        </div>

        {/* Bottom row */}
        <div className="pt-4 border-t border-[#1f2335] font-mono text-xs text-gray-500 flex flex-col md:flex-row justify-between gap-2">
          <span>
            © {new Date().getFullYear()} HydraDevX
          </span>
          <span className="text-gray-600">
            system status: operational
          </span>
        </div>
      </div>
    </footer>
  )
}