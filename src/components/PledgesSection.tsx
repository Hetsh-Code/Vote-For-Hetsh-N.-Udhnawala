import { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { HeartHandshake, UserPlus, Send, CheckCircle } from "lucide-react";
import { Pledge } from "../types";
import GlassCard from "./GlassCard";

interface PledgesSectionProps {
  pledges: Pledge[];
  onAddPledge: (pledge: Pledge) => void;
}

export default function PledgesSection({ pledges, onAddPledge }: PledgesSectionProps) {
  const [name, setName] = useState("");
  const [grade, setGrade] = useState("Grade 12 (Science)");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const grades = [
    "Grade 12 (Science)",
    "Grade 12 (Commerce)",
    "Grade 12 (Humanities)",
    "Grade 11 (Science)",
    "Grade 11 (Commerce)",
    "Grade 11 (Humanities)",
    "Grade 10",
    "Grade 9",
    "Alumni / Teacher",
  ];

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setError("");

    if (!name.trim()) {
      setError("Please provide your name.");
      return;
    }
    if (!message.trim()) {
      setError("Please write a short message or word of support.");
      return;
    }

    const newPledge: Pledge = {
      id: `p-${Date.now()}`,
      name: name.trim(),
      grade,
      message: message.trim(),
      timestamp: new Date().toISOString(),
    };

    onAddPledge(newPledge);
    setSuccess(true);
    setName("");
    setMessage("");

    setTimeout(() => {
      setSuccess(false);
    }, 5000);
  };

  return (
    <section id="campaign-pledges" className="py-24 px-4 md:px-6 max-w-6xl mx-auto relative">
      {/* Decorative glows */}
      <div className="absolute top-[30%] right-[-10%] w-[350px] h-[350px] rounded-full bg-pink-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[20%] left-[-10%] w-[300px] h-[300px] rounded-full bg-cyan-500/5 blur-[120px] pointer-events-none" />

      {/* Title */}
      <div className="text-center mb-16">
        <h2 className="font-display text-3xl md:text-5xl font-black text-white mb-4">
          WALL OF <span className="text-gradient-cyan-indigo text-glow">SUPPORT</span>
        </h2>
        <div className="h-[2px] w-24 bg-gradient-to-r from-cyan-400 to-indigo-500 mx-auto rounded-full mb-4" />
        <p className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto">
          Add your voice to the school community! Submit your endorsement pledge below and instantly join the running support feed.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Side: Submit Endorsement Form */}
        <div className="lg:col-span-5">
          <GlassCard id="pledge-form-card" className="h-full relative overflow-hidden" delay={0.1}>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
                <HeartHandshake className="w-5 h-5 animate-pulse" />
              </div>
              <h3 className="font-display text-2xl font-bold text-white">Pledge Your Vote</h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block font-mono text-[11px] text-gray-400 tracking-wider uppercase mb-1.5">
                  Your Full Name
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g., Aarav Mehta"
                  className="w-full glass-input px-4 py-3 rounded-xl text-white text-sm"
                  maxLength={50}
                />
              </div>

              <div>
                <label className="block font-mono text-[11px] text-gray-400 tracking-wider uppercase mb-1.5">
                  Your Grade / Class
                </label>
                <select
                  value={grade}
                  onChange={(e) => setGrade(e.target.value)}
                  className="w-full glass-input px-4 py-3 rounded-xl text-white text-sm cursor-pointer appearance-none bg-slate-900"
                >
                  {grades.map((g) => (
                    <option key={g} value={g} className="bg-slate-950 text-white">
                      {g}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block font-mono text-[11px] text-gray-400 tracking-wider uppercase mb-1.5">
                  Message of Endorsement
                </label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Why do you support Hetsh? (e.g. He is responsible, organized, helpful, tutoring...)"
                  className="w-full glass-input px-4 py-3 rounded-xl text-white text-sm h-28 resize-none"
                  maxLength={250}
                />
              </div>

              {/* Error Warning */}
              <AnimatePresence>
                {error && (
                  <motion.div
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="text-xs text-rose-400 font-medium"
                  >
                    ⚠ {error}
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Success Box */}
              <AnimatePresence>
                {success && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center gap-2 p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs"
                  >
                    <CheckCircle className="w-4 h-4 shrink-0" />
                    <span>Your support has been added to the Wall of Support!</span>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Submit Button */}
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-cyan-400 to-indigo-500 text-slate-950 font-bold text-sm tracking-wide shadow-lg shadow-cyan-400/20 flex items-center justify-center gap-2 cursor-pointer transition-all duration-300 hover:shadow-indigo-500/35"
              >
                <Send className="w-4 h-4" />
                Submit Support Pledge
              </motion.button>
            </form>
          </GlassCard>
        </div>

        {/* Right Side: scrolling/list wall of student confidence */}
        <div className="lg:col-span-7 h-full flex flex-col justify-stretch">
          <GlassCard id="pledges-feed-card" className="flex flex-col h-[520px]" delay={0.25}>
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center gap-2">
                <UserPlus className="w-5 h-5 text-indigo-400" />
                <h3 className="font-display text-xl font-bold text-white">Live Endorsement Feed</h3>
              </div>
              <span className="font-mono text-xs bg-white/5 border border-white/10 text-gray-400 px-2.5 py-1 rounded-full">
                {pledges.length} Active Pledges
              </span>
            </div>

            {/* Smooth Scrollable Container */}
            <div className="flex-1 overflow-y-auto pr-2 space-y-4 max-h-[420px] scroll-smooth">
              <AnimatePresence initial={false}>
                {pledges.map((pledge) => (
                  <motion.div
                    key={pledge.id}
                    initial={{ opacity: 0, x: 20, y: -10 }}
                    animate={{ opacity: 1, x: 0, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ type: "spring", stiffness: 150, damping: 15 }}
                    className="p-4 rounded-xl bg-slate-950/40 border border-white/5 relative group hover:border-cyan-500/20 hover:bg-slate-950/60 transition-all duration-300"
                  >
                    {/* Gloss sheen */}
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/0 via-cyan-400/5 to-cyan-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-xl" />
                    
                    <div className="flex justify-between items-start gap-4">
                      <div>
                        <h4 className="font-display font-bold text-sm text-white group-hover:text-cyan-300 transition-colors duration-200">
                          {pledge.name}
                        </h4>
                        <p className="font-mono text-[10px] text-gray-400 mt-0.5">
                          {pledge.grade}
                        </p>
                      </div>
                      <span className="font-mono text-[9px] text-gray-500">
                        {new Date(pledge.timestamp).toLocaleTimeString([], {
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </span>
                    </div>

                    <p className="text-gray-300 text-xs md:text-sm mt-3 font-light leading-relaxed italic">
                      "{pledge.message}"
                    </p>
                  </motion.div>
                ))}
              </AnimatePresence>

              {pledges.length === 0 && (
                <div className="text-center py-12 text-gray-500 text-sm">
                  Be the first to leave an endorsement message for Hetsh!
                </div>
              )}
            </div>
          </GlassCard>
        </div>
      </div>
    </section>
  );
}
