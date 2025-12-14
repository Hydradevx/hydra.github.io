import { motion } from "framer-motion"

export default function Contact() {
  return (
    <section className="relative min-h-screen bg-[#0b0e14] px-10 py-28 flex items-center">
      {/* Subtle grid */}
      <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(122,162,247,0.04)_1px,transparent_1px)] bg-[size:100%_3px]" />

      <div className="relative max-w-3xl mx-auto w-full">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <p className="font-mono text-sm text-[#7aa2f7] mb-2">
            $ contact --init
          </p>
          <h2 className="text-4xl font-bold text-white">
            Contact
          </h2>
          <p className="mt-3 text-gray-400 text-sm max-w-xl">
            Open to collaboration, tooling discussions, or technical questions.
          </p>
        </motion.div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Discord */}
          <motion.a
            href="https://discord.com/users/1251647487081709682"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -4 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="group bg-[#0f1419] border border-[#1f2335] rounded-lg p-6 transition hover:border-[#7aa2f7]/60"
          >
            <div className="font-mono text-xs text-gray-400 mb-1">
              discord
            </div>
            <div className="text-lg font-semibold text-white group-hover:text-[#7aa2f7] transition">
              Direct message
            </div>
            <p className="mt-2 text-sm text-gray-300">
              Best for quick conversations and collaboration.
            </p>
          </motion.a>

          {/* GitHub */}
          <motion.a
            href="https://github.com/Hydradevx"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -4 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.05 }}
            className="group bg-[#0f1419] border border-[#1f2335] rounded-lg p-6 transition hover:border-[#7aa2f7]/60"
          >
            <div className="font-mono text-xs text-gray-400 mb-1">
              github
            </div>
            <div className="text-lg font-semibold text-white group-hover:text-[#7aa2f7] transition">
              Source & issues
            </div>
            <p className="mt-2 text-sm text-gray-300">
              Code, projects, and discussions.
            </p>
          </motion.a>
        </div>

        {/* Footer Status */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="mt-12 bg-[#0f1419] border border-[#1f2335] rounded-lg p-6 font-mono text-sm text-gray-300"
        >
          <p>
            <span className="text-[#7aa2f7]">$</span> connection --status
          </p>
          <div className="mt-2 space-y-1">
            <p>• availability: open</p>
            <p>• preferred channel: discord</p>
            <p>• response time: async</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}