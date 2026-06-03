import Sidebar from "@/components/Sidebar";
import DashboardClient from "@/components/DashboardClient";
import type { Course } from "@/lib/types";
import { createClient } from "@supabase/supabase-js";

export default async function Home() {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!
  );

  const { data } = await supabase.from("courses").select("*");

  const courses: Course[] = data ?? [];

  return (
    <main className="min-h-screen bg-[#09090b] text-white grid lg:grid-cols-[90px_1fr]">
      <Sidebar />

      <section className="p-6">
        <DashboardClient courses={courses} />
      </section>
    </main>
  );
}