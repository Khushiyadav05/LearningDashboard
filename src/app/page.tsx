import Sidebar from "@/components/Sidebar";
import DashboardClient from "@/components/DashboardClient";
import { supabase } from "@/lib/supabase";
import type { Course } from "@/lib/types";

export default async function Home() {
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