"use client";

import { motion } from "framer-motion";

export function ScrollIndicator() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.2, duration: 0.8 }}
      className="hidden md:flex flex-col items-center gap-2 cursor-pointer group"
      onClick={() => {
        window.scrollTo({
          top: window.innerHeight * 0.8,
          behavior: "smooth",
        });
      }}
    >
      <span className="text-[10px] uppercase font-mono tracking-widest text-[#111111]/50 group-hover:text-[#D9A520] transition-colors">
        Scroll Down
      </span>
      <div className="w-5 h-9 rounded-full border-2 border-[#111111]/20 group-hover:border-[#D9A520] p-1 flex justify-center transition-colors">
        <motion.div
          animate={{
            y: [0, 12, 0],
          }}
          transition={{
            duration: 1.8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="w-1 h-2 rounded-full bg-[#111111]/60 group-hover:bg-[#D9A520] transition-colors"
        />
      </div>
    </motion.div>
  );
}
