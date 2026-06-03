export default function Loading() {
  return (
    <main className="min-h-screen bg-[#09090b] text-white grid lg:grid-cols-[90px_1fr]">
      <div className="hidden lg:block bg-white/5 animate-pulse" />

      <section className="p-6 space-y-4">
        <div className="h-32 bg-white/5 rounded-3xl animate-pulse" />

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <div className="h-40 bg-white/5 rounded-3xl animate-pulse" />
          <div className="h-40 bg-white/5 rounded-3xl animate-pulse" />
          <div className="h-40 bg-white/5 rounded-3xl animate-pulse" />
        </div>
      </section>
    </main>
  );
}