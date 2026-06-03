"use client";

import { motion } from "framer-motion";

export default function HeroTile() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
      className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 blur-2xl" />

      <div className="relative z-10">
        <h1 className="text-2xl font-semibold">
          Welcome Back, Khushi 👋
        </h1>

        <p className="text-white/60 mt-2">
          Continue your learning journey today.
        </p>

        <div className="mt-4 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-sm">
          🔥 21 Day Streak
        </div>
      </div>
    </motion.section>
  );
}