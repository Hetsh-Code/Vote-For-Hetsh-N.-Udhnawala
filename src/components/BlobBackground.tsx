import { motion } from "motion/react";

export default function BlobBackground() {
  return (
    <div className="fixed inset-0 -z-50 overflow-hidden bg-[#030712] pointer-events-none">
      {/* Absolute ambient lights */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-cyan-500/10 blur-[120px] mix-blend-screen" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-violet-500/10 blur-[120px] mix-blend-screen" />
      <div className="absolute top-[40%] right-[15%] w-[40%] h-[40%] rounded-full bg-pink-500/5 blur-[150px] mix-blend-screen" />

      {/* Floating Liquid Blobs */}
      <motion.div
        className="absolute w-[28rem] h-[28rem] rounded-full bg-gradient-to-tr from-cyan-400/20 to-blue-600/15 blur-[60px]"
        style={{ top: "10%", left: "15%" }}
        animate={{
          x: [0, 80, -40, 0],
          y: [0, -100, 60, 0],
          scale: [1, 1.15, 0.9, 1],
          rotate: [0, 120, 240, 360],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute w-[32rem] h-[32rem] rounded-full bg-gradient-to-bl from-indigo-500/15 to-purple-600/10 blur-[70px]"
        style={{ bottom: "15%", right: "10%" }}
        animate={{
          x: [0, -100, 50, 0],
          y: [0, 80, -50, 0],
          scale: [1, 0.9, 1.1, 1],
          rotate: [360, 240, 120, 0],
        }}
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute w-[24rem] h-[24rem] rounded-full bg-gradient-to-br from-emerald-400/10 to-teal-500/15 blur-[50px]"
        style={{ top: "50%", left: "50%" }}
        animate={{
          x: [0, 120, -100, 0],
          y: [0, 60, 120, 0],
          scale: [0.9, 1.1, 0.95, 0.9],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute w-[26rem] h-[26rem] rounded-full bg-gradient-to-r from-pink-500/10 to-rose-500/10 blur-[60px]"
        style={{ top: "-5%", right: "25%" }}
        animate={{
          x: [0, -50, 80, 0],
          y: [0, 100, -40, 0],
          scale: [1.1, 0.95, 1.05, 1.1],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Grid Overlay for structure */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-60" 
      />
    </div>
  );
}
