import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ShieldCheck, HeartHandshake, Trophy, Users2, Leaf, LucideIcon, ChevronDown, Check } from "lucide-react";
import { manifestoData } from "../data/campaignData";
import GlassCard from "./GlassCard";

const iconMap: Record<string, LucideIcon> = {
  ShieldCheck,
  HeartHandshake,
  Trophy,
  Users2,
  Leaf,
};

export default function ManifestoSection() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="campaign-manifesto" className="py-24 px-4 md:px-6 max-w-6xl mx-auto relative">
      {/* Visual Accent Blurs */}
      <div className="absolute right-[5%] top-[20%] w-[300px] h-[300px] rounded-full bg-indigo-500/5 blur-[100px] pointer-events-none" />
      <div className="absolute left-[5%] bottom-[10%] w-[350px] h-[350px] rounded-full bg-emerald-500/5 blur-[120px] pointer-events-none" />

      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="font-display text-3xl md:text-5xl font-black text-white mb-4">
          THE <span className="text-gradient-cyan-indigo text-glow">H.E.T.S.H.</span> FORMULA
        </h2>
        <div className="h-[2px] w-24 bg-gradient-to-r from-cyan-400 to-indigo-500 mx-auto rounded-full mb-4" />
        <p className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto">
          Five cohesive pillars designed to empower every student, revitalize our house spirit, and create a transparent, active student council.
        </p>
      </div>

      {/* Platform Bento Grid / Stack */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {manifestoData.map((item, index) => {
          const IconComponent = iconMap[item.iconName] || ShieldCheck;
          const isExpanded = expandedId === item.id;

          return (
            <GlassCard
              id={`manifesto-card-${item.id}`}
              key={item.id}
              className={`flex flex-col h-full cursor-pointer transition-all duration-300 relative ${
                isExpanded ? "md:col-span-2 lg:col-span-3 ring-2 ring-cyan-400/30" : ""
              }`}
              delay={index * 0.1}
              hoverEffect={!isExpanded}
            >
              {/* Main Card Header Area */}
              <div
                onClick={() => toggleExpand(item.id)}
                className="flex items-start justify-between gap-4 select-none"
              >
                <div className="flex gap-4">
                  {/* Glassy Animated Icon Ring */}
                  <div className={`p-3.5 rounded-xl bg-gradient-to-br ${item.color} bg-opacity-10 border border-white/10 flex items-center justify-center relative shadow-md shrink-0`}>
                    <IconComponent className="w-6 h-6 text-white drop-shadow-[0_0_6px_rgba(255,255,255,0.5)] animate-pulse-subtle" />
                  </div>
                  
                  <div>
                    <span className="font-mono text-[10px] tracking-widest text-cyan-400 uppercase font-bold">
                      {item.category}
                    </span>
                    <h3 className="font-display text-xl md:text-2xl font-bold text-white mt-0.5">
                      {item.title}
                    </h3>
                  </div>
                </div>

                <motion.div
                  animate={{ rotate: isExpanded ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="p-1 rounded-full bg-white/5 border border-white/10 text-gray-400 self-center"
                >
                  <ChevronDown className="w-5 h-5" />
                </motion.div>
              </div>

              {/* Pitch Summary */}
              <p 
                onClick={() => toggleExpand(item.id)}
                className="text-gray-300 text-sm md:text-base mt-4 font-light select-none leading-relaxed"
              >
                {item.description}
              </p>

              {/* Expanded Action Detail Points */}
              <AnimatePresence initial={false}>
                {isExpanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="border-t border-white/10 mt-6 pt-6 space-y-4">
                      <h4 className="font-display font-semibold text-sm text-cyan-300 uppercase tracking-wider">
                        Core Proposals & Objectives:
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {item.details.map((detail, idx) => {
                          const [heading, body] = detail.split(": ");
                          return (
                            <motion.div
                              key={idx}
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: idx * 0.1 }}
                              className="p-4 rounded-xl bg-slate-950/40 border border-white/5 flex gap-3 items-start"
                            >
                              <div className="p-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 shrink-0 mt-0.5">
                                <Check className="w-3.5 h-3.5" />
                              </div>
                              <div>
                                <h5 className="font-display font-bold text-sm text-white mb-0.5">{heading}</h5>
                                <p className="text-xs text-gray-400 leading-relaxed">{body}</p>
                              </div>
                            </motion.div>
                          );
                        })}
                      </div>

                      {/* Call to Support micro message */}
                      <div className="flex justify-between items-center bg-cyan-500/5 border border-cyan-500/10 rounded-xl p-3 text-xs mt-2">
                        <span className="text-gray-400">Do you believe in this vision for the school?</span>
                        <button 
                          onClick={() => {
                            const btn = document.getElementById("cast-vote-btn");
                            btn?.scrollIntoView({ behavior: "smooth" });
                            btn?.classList.add("ring-4", "ring-cyan-400");
                            setTimeout(() => btn?.classList.remove("ring-4", "ring-cyan-400"), 1200);
                          }}
                          className="text-cyan-300 font-bold hover:underline"
                        >
                          Show Support →
                        </button>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Inactive hint */}
              {!isExpanded && (
                <div 
                  onClick={() => toggleExpand(item.id)}
                  className="text-xs text-cyan-400/60 font-semibold mt-4 flex items-center gap-1 hover:text-cyan-400 select-none"
                >
                  <span>Click to expand details</span>
                  <span>&rarr;</span>
                </div>
              )}
            </GlassCard>
          );
        })}
      </div>
    </section>
  );
}
