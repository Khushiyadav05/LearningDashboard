"use client";

import { motion } from "framer-motion";
import * as Icons from "lucide-react";

type Props = {
  title: string;
  progress: number;
  icon?: string;
};

function getIcon(name?: string) {
  const Icon = (Icons as any)[name || "BookOpen"];
  return Icon ? <Icon size={20} /> : <Icons.BookOpen size={20} />;
}

export default function CourseCard({ title, progress, icon }: Props) {
  return (
    <article
      className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md p-5"
    >
      <div className="flex items-center gap-2">
        <span className="text-purple-400">{getIcon(icon)}</span>
        <h3 className="font-semibold">{title}</h3>
      </div>

      <p className="text-sm text-white/60 mt-2">
        Progress: {progress}%
      </p>

      <div className="h-2 bg-white/10 rounded-full mt-3 overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-purple-500 to-pink-500"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 1 }}
        />
      </div>
    </article>
  );
}