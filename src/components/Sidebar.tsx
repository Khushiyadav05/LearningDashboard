"use client";

import { useState } from "react";
import { Home, BookOpen, Activity, Settings } from "lucide-react";
import { motion } from "framer-motion";

const items = [
  { id: "home", icon: Home },
  { id: "courses", icon: BookOpen },
  { id: "activity", icon: Activity },
  { id: "settings", icon: Settings },
];

export default function Sidebar() {
  const [active, setActive] = useState("home");

  return (
    <nav className="h-screen bg-[#0a0a0a] border-r border-white/10 flex flex-col items-center py-6 gap-6">
      {items.map((item) => {
        const Icon = item.icon;
        const isActive = active === item.id;

        return (
          <button
            key={item.id}
            onClick={() => setActive(item.id)}
            className="relative p-3 rounded-xl"
          >
            {isActive && (
              <motion.div
                layoutId="activeTab"
                className="absolute inset-0 bg-white/10 rounded-xl"
              />
            )}

            <Icon
              size={20}
              className={isActive ? "text-white" : "text-white/40"}
            />
          </button>
        );
      })}
    </nav>
  );
}