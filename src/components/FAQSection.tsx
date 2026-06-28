import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { HelpCircle, ChevronDown, Sparkles } from "lucide-react";
import { faqData } from "../data/campaignData";
import GlassCard from "./GlassCard";

export default function FAQSection() {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggleFAQ = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="campaign-faq" className="py-24 px-4 md:px-6 max-w-4xl mx-auto relative">
      {/* Decorative Blurs */}
      <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full bg-cyan-500/5 blur-[120px] pointer-events-none" />

      {/* Title */}
      <div className="text-center mb-16">
        <h2 className="font-display text-3xl md:text-5xl font-black text-white mb-4">
          FREQUENTLY <span className="text-gradient-cyan-indigo text-glow">ASKED</span> QUESTIONS
        </h2>
        <div className="h-[2px] w-24 bg-gradient-to-r from-cyan-400 to-indigo-500 mx-auto rounded-full mb-4" />
        <p className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto">
          Clear, direct answers regarding Hetsh's goals, feasibility of his manifesto, and student representation.
        </p>
      </div>

      {/* Accordion Stack */}
      <div className="space-y-4">
        {faqData.map((faq, index) => {
          const isOpen = openId === faq.id;

          return (
            <GlassCard
              id={`faq-card-${faq.id}`}
              key={faq.id}
              className={`p-1.5 md:p-2 cursor-pointer transition-all duration-300 ${
                isOpen ? "ring-1 ring-cyan-400/20" : ""
              }`}
              delay={index * 0.08}
              hoverEffect={!isOpen}
            >
              {/* Question Header */}
              <div
                onClick={() => toggleFAQ(faq.id)}
                className="flex items-center justify-between gap-4 p-4 select-none"
              >
                <div className="flex items-center gap-3.5">
                  <div className="p-2 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 shrink-0">
                    <HelpCircle className="w-4.5 h-4.5" />
                  </div>
                  <span className="font-display font-bold text-sm md:text-base text-white">
                    {faq.question}
                  </span>
                </div>

                <motion.div
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="p-1 rounded-full bg-white/5 border border-white/10 text-gray-400 shrink-0"
                >
                  <ChevronDown className="w-4 h-4" />
                </motion.div>
              </div>

              {/* Collapsible Answer */}
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="px-4 pb-5 pt-1 text-gray-300 text-xs md:text-sm font-light leading-relaxed border-t border-white/5 mt-2">
                      <p className="pl-8">{faq.answer}</p>
                      
                      {/* Mini visual note */}
                      <div className="flex items-center gap-1.5 mt-4 text-[10px] font-mono text-cyan-300 bg-cyan-500/5 px-2.5 py-1.5 rounded-lg w-fit ml-8 border border-cyan-400/10">
                        <Sparkles className="w-3 h-3 text-cyan-400 animate-spin" style={{ animationDuration: "8s" }} />
                        <span>Actionable &bullet; Approved Campaign Goal</span>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </GlassCard>
          );
        })}
      </div>
    </section>
  );
}
