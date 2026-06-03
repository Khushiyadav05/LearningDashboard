"use client";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

import HeroTile from "./HeroTile";
import CourseCard from "./CourseCard";
import type { Course } from "@/lib/types";


const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const item: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 20,
    },
  },
};

export default function DashboardClient({
  courses,
}: {
  courses: Course[];
}) {
  return (
    <motion.section
      variants={container}
      initial="hidden"
      animate="show"
      className="grid gap-4 md:grid-cols-2 lg:grid-cols-3"
    >
      
      <motion.article variants={item} className="lg:col-span-2">
        <HeroTile />
      </motion.article>

     
      <motion.article
        variants={item}
        className="rounded-3xl border border-white/10 bg-white/5 p-6"
      >
        <h2 className="text-lg font-semibold">Activity</h2>

        <div className="mt-4 grid grid-cols-7 gap-1">
          {Array.from({ length: 28 }).map((_, i) => (
            <div key={i} className="h-4 w-4 rounded-sm bg-white/10" />
          ))}
        </div>
      </motion.article>

      
      {courses?.map((course) => (
        <motion.article key={course.id} variants={item}>
          <CourseCard
            title={course.title}
            progress={course.progress}
            icon={course.icon_name}
          />
        </motion.article>
      ))}
    </motion.section>
  );
}