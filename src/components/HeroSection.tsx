import { useState, useEffect, MouseEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sparkles, Vote, Award, Clock } from "lucide-react";
import GlassCard from "./GlassCard";

interface HeroSectionProps {
  votes: number;
  onVote: (x: number, y: number) => void;
}

export default function HeroSection({ votes, onVote }: HeroSectionProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Calculate countdown to July 3, 2026 at 09:00 AM (Election Day)
  useEffect(() => {
    const electionDate = new Date("2026-07-03T09:00:00-07:00").getTime();

    const updateTimer = () => {
      const now = new Date().getTime();
      const distance = electionDate - now;

      if (distance < 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, []);

  const targetVotes = 1000;
  const progressPercent = Math.min(Math.round((votes / targetVotes) * 100), 100);

  // Handle support click and pass coordinates for bubble burst
  const handleVoteClick = (e: MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left + window.scrollX;
    const y = e.clientY - rect.top + window.scrollY;
    onVote(e.clientX, e.clientY);
  };

  return (
    <section id="campaign-hero" className="relative min-h-screen pt-28 pb-16 flex flex-col justify-center items-center px-4 md:px-6">
      {/* Background Liquid Rings */}
      <div className="absolute top-[25%] left-1/2 -translate-x-1/2 w-[90%] max-w-4xl h-[400px] pointer-events-none rounded-full bg-gradient-to-r from-cyan-500/10 via-purple-500/5 to-pink-500/10 blur-[80px] -z-10" />

      {/* Decorative Badges */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, cubicBezier: [0.16, 1, 0.3, 1] }}
        className="flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-white/10 text-cyan-300 text-xs md:text-sm font-medium uppercase tracking-wider mb-6 shadow-[0_4px_12px_rgba(6,182,212,0.15)]"
      >
        <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
        Official Campaign &middot; Vote For Head Boy
      </motion.div>

      {/* Primary Campaign Headers */}
      <div className="text-center max-w-4xl z-10 mb-8">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, cubicBezier: [0.16, 1, 0.3, 1] }}
          className="font-display text-4xl sm:text-6xl md:text-8xl font-extrabold tracking-tight text-white mb-4"
        >
          <span className="opacity-90">HETSH N.</span> <br className="sm:hidden" />
          <span className="text-gradient-cyan-indigo text-glow">UDHNAWALA</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, cubicBezier: [0.16, 1, 0.3, 1] }}
          className="font-display text-lg sm:text-2xl md:text-3xl font-medium tracking-wide text-gray-300 max-w-2xl mx-auto"
        >
          Leading with <span className="text-cyan-300 font-semibold text-glow">Honesty</span>, Driving with <span className="text-violet-300 font-semibold text-glow">Synergy</span>.
        </motion.p>
      </div>

      {/* Liquid Glass Showcase Card */}
      <div className="w-full max-w-4xl z-10 grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
        
        {/* Left Column: Glass Shield Logo & Interactive Counter */}
        <GlassCard id="hero-badge-panel" className="md:col-span-7 flex flex-col justify-between" delay={0.25}>
          <div className="relative mb-6 flex flex-col items-center text-center">
            {/* Elegant CSS Liquid Glass Shield */}
            <div className="relative w-40 h-40 mb-4 flex items-center justify-center">
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 via-indigo-500/10 to-violet-500/25 blur-sm border border-white/25 rounded-full"
                animate={{
                  borderRadius: ["60% 40% 30% 70% / 60% 30% 70% 40%", "30% 60% 70% 30% / 50% 60% 30% 70%", "60% 40% 30% 70% / 60% 30% 70% 40%"],
                  rotate: [0, 180, 360]
                }}
                transition={{
                  duration: 12,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
              <div className="absolute inset-2 glass rounded-full flex flex-col items-center justify-center border border-white/20 shadow-inner">
                <Award className="w-12 h-12 text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.4)] animate-pulse-subtle" />
                <span className="font-display font-bold text-lg text-white mt-1">H. N. U.</span>
                <span className="font-mono text-[9px] tracking-widest text-cyan-300 uppercase mt-0.5">HEAD BOY '26</span>
              </div>
            </div>

            <h3 className="font-display text-2xl font-bold text-white mb-2">Campaign Core Formula</h3>
            <p className="text-gray-400 text-sm max-w-md">
              Constructed on <span className="text-cyan-300">Honesty</span>, <span className="text-rose-300">Empathy</span>, <span className="text-amber-300">Tenacity</span>, <span className="text-emerald-300">Synergy</span>, and <span className="text-indigo-300">Honor</span>.
            </p>
          </div>

          {/* Support Voting Area */}
          <div className="border-t border-white/10 pt-6 mt-auto">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
              <div>
                <p className="text-xs font-mono tracking-widest text-gray-400 uppercase">Live Community Endorsement</p>
                <div className="flex items-baseline gap-2">
                  <motion.span
                    key={votes}
                    initial={{ scale: 1.2, color: "#22d3ee" }}
                    animate={{ scale: 1, color: "#ffffff" }}
                    transition={{ type: "spring", stiffness: 300, damping: 15 }}
                    className="font-display text-4xl font-extrabold text-white"
                  >
                    {votes}
                  </motion.span>
                  <span className="text-gray-400 text-sm font-medium">Votes Casted</span>
                </div>
              </div>

              {/* Glass Tactile Button */}
              <motion.button
                id="cast-vote-btn"
                onClick={handleVoteClick}
                whileHover={{ scale: 1.05, shadow: "0 0 25px rgba(56, 189, 248, 0.4)" }}
                whileTap={{ scale: 0.95 }}
                className="relative overflow-hidden px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500/25 via-indigo-500/20 to-purple-500/25 border border-white/20 text-white font-semibold text-sm tracking-wide shadow-[0_8px_32px_rgba(6,182,212,0.15)] flex items-center justify-center gap-2 cursor-pointer group"
              >
                <div className="absolute inset-0 w-1/2 h-full bg-white/10 transform -skew-x-12 -translate-x-full group-hover:translate-x-[300%] transition-transform duration-1000 ease-out" />
                <Vote className="w-4 h-4 text-cyan-300 animate-bounce" />
                <span>Cast Support Vote</span>
              </motion.button>
            </div>

            {/* Liquid Progress Bar */}
            <div className="space-y-1.5">
              <div className="flex justify-between text-xs font-mono text-gray-400">
                <span>PROGRESS TO CAMPAIGN TARGET</span>
                <span>{progressPercent}% ({votes}/{targetVotes})</span>
              </div>
              <div className="h-4 w-full bg-slate-950/60 rounded-full overflow-hidden border border-white/5 p-0.5 relative">
                <motion.div
                  className="h-full rounded-full bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-500 relative"
                  initial={{ width: 0 }}
                  animate={{ width: `${progressPercent}%` }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                >
                  {/* Glistening sheen */}
                  <div className="absolute inset-0 bg-gradient-to-b from-white/30 to-transparent rounded-full" />
                  {/* Pulse tip */}
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-white animate-ping" />
                </motion.div>
              </div>
            </div>
          </div>
        </GlassCard>

        {/* Right Column: Election Countdown & Mission Stat */}
        <GlassCard id="hero-countdown-panel" className="md:col-span-5 flex flex-col justify-between" delay={0.35}>
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Clock className="w-5 h-5 text-purple-400 animate-spin" style={{ animationDuration: "10s" }} />
              <h4 className="font-display text-lg font-bold text-white uppercase tracking-wider">ELECTION COUNTDOWN</h4>
            </div>
            <p className="text-gray-400 text-sm mb-6">
              Official ballot voting closes on July 3rd at 9:00 AM. Cast your voice, define the future!
            </p>

            {/* Ticking Grid Boxes */}
            <div className="grid grid-cols-4 gap-2.5 mb-8">
              {[
                { label: "DAYS", value: timeLeft.days },
                { label: "HRS", value: timeLeft.hours },
                { label: "MINS", value: timeLeft.minutes },
                { label: "SECS", value: timeLeft.seconds },
              ].map((timeUnit, index) => (
                <div key={index} className="flex flex-col items-center justify-center p-3 rounded-xl bg-slate-950/40 border border-white/5 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />
                  <motion.span
                    key={timeUnit.value}
                    initial={{ y: -10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    className="font-display text-2xl md:text-3xl font-black text-glow text-white"
                  >
                    {String(timeUnit.value).padStart(2, "0")}
                  </motion.span>
                  <span className="font-mono text-[9px] text-gray-400 tracking-wider mt-1">{timeUnit.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Mission Bullet Points */}
          <div className="bg-slate-950/30 rounded-xl p-4 border border-white/5 mt-auto">
            <h5 className="font-display font-semibold text-sm text-cyan-300 mb-2">Why voting matters:</h5>
            <ul className="text-xs text-gray-400 space-y-2">
              <li className="flex items-start gap-1.5">
                <span className="text-cyan-400 mt-0.5">•</span>
                <span>Restores house pride by introducing direct inter-house feedback.</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="text-purple-400 mt-0.5">•</span>
                <span>Unites academic peer leaders for stress-free exam assistance.</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="text-pink-400 mt-0.5">•</span>
                <span>Provides a glass-box transparent forum for student ideas.</span>
              </li>
            </ul>
          </div>
        </GlassCard>
      </div>

      {/* Decorative arrow helper */}
      <div className="mt-12 text-center pointer-events-none">
        <p className="font-mono text-[10px] text-gray-400 uppercase tracking-widest animate-pulse">Explore Manifesto Platform</p>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="text-gray-500 text-sm mt-1"
        >
          ▼
        </motion.div>
      </div>
    </section>
  );
}
