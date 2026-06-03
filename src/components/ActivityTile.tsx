<motion.article
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{
    type: "spring",
    stiffness: 260,
    damping: 20,
    delay: 0.1,
  }}
  className="rounded-3xl border border-white/10 bg-white/5 p-6"
>
  <h2 className="text-lg font-semibold">Activity</h2>

  <div className="mt-4 grid grid-cols-7 gap-1">
    {Array.from({ length: 28 }).map((_, i) => (
      <div
        key={i}
        className="h-4 w-4 rounded-sm bg-white/10"
      />
    ))}
  </div>
</motion.article>