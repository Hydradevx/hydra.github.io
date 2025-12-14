import { useState, useEffect } from "react"
import { Menu, X, Github, Users, User } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const links = [
    {
      label: "github",
      href: "https://github.com/Hydradevx",
      icon: Github,
    },
    {
      label: "discord",
      href: "https://discord.gg/6Tufbvnebj",
      icon: Users,
    },
    {
      label: "profile",
      href: "https://discord.com/users/1251647487081709682",
      icon: User,
    },
  ]

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className={`fixed top-0 left-0 w-full z-50 transition ${
        scrolled
          ? "bg-[#0b0e14]/90 backdrop-blur border-b border-[#1f2335]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Brand */}
        <a href="#" className="font-mono">
          <div className="text-white font-semibold text-lg">
            HydraDevX
          </div>
          <div className="text-xs text-gray-400 -mt-1">
            arch • tooling • systems
          </div>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-6 font-mono text-sm">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-400 hover:text-[#7aa2f7] transition"
            >
              <l.icon size={16} />
              {l.label}
            </a>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen((o) => !o)}
          className="md:hidden p-2 rounded border border-[#1f2335] text-gray-300 hover:text-white hover:border-[#7aa2f7]/50 transition"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden border-t border-[#1f2335] bg-[#0b0e14]/95 backdrop-blur"
          >
            <div className="px-6 py-4 space-y-3 font-mono text-sm">
              {links.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-3 text-gray-400 hover:text-[#7aa2f7] transition"
                >
                  <l.icon size={16} />
                  {l.label}
                </a>
              ))}

              <div className="pt-3 mt-3 border-t border-[#1f2335] text-xs text-gray-500">
                system status: operational
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}