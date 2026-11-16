"use client";

import { useEffect, useState, useRef } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export default function NavigationProgress() {
  const pathname = usePathname();
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const prevPathname = useRef(pathname);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (pathname !== prevPathname.current) {
      // New navigation started
      prevPathname.current = pathname;
      setLoading(true);
      setProgress(10);

      // Clear any existing timers
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (timerRef.current) clearTimeout(timerRef.current);

      // Simulate progress
      intervalRef.current = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 85) {
            if (intervalRef.current) clearInterval(intervalRef.current);
            return 85;
          }
          return prev + Math.random() * 15 + 5;
        });
      }, 200);

      // Complete progress after a short delay
      timerRef.current = setTimeout(() => {
        if (intervalRef.current) clearInterval(intervalRef.current);
        setProgress(100);
        setTimeout(() => {
          setLoading(false);
          setProgress(0);
        }, 400);
      }, 600);
    }

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [pathname]);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed top-0 left-0 right-0 z-[9999] h-1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <motion.div
            className="h-full bg-gradient-to-r from-[#F9B250] via-[#E05912] to-[#FF8C00] shadow-[0_0_10px_rgba(249,178,80,0.7)]"
            initial={{ width: "0%" }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          />
          {/* Glow effect */}
          <motion.div
            className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-[#F9B250] to-transparent opacity-70"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 0.8, repeat: Infinity }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
