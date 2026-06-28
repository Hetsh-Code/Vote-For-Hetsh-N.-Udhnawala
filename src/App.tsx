import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Vote, Award, BookOpen, MessageCircle, HelpCircle, Heart, Flame } from "lucide-react";
import { Pledge } from "./types";
import { initialPledges } from "./data/campaignData";
import BlobBackground from "./components/BlobBackground";
import HeroSection from "./components/HeroSection";
import ManifestoSection from "./components/ManifestoSection";
import AboutSection from "./components/AboutSection";
import PledgesSection from "./components/PledgesSection";
import FAQSection from "./components/FAQSection";

export default function App() {
  // Persistence engines
  const [votes, setVotes] = useState<number>(() => {
    const saved = localStorage.getItem("vote_hetsh_count");
    return saved ? parseInt(saved, 10) : 742;
  });

  const [pledges, setPledges] = useState<Pledge[]>(() => {
    const saved = localStorage.getItem("vote_hetsh_pledges");
    return saved ? JSON.parse(saved) : initialPledges;
  });

  // Particle tracking
  const [particles, setParticles] = useState<{
    id: string;
    x: number;
    y: number;
    tx: number;
    ty: number;
    size: number;
    color: string;
  }[]>([]);

  // Update storage on update
  useEffect(() => {
    localStorage.setItem("vote_hetsh_count", votes.toString());
  }, [votes]);

  useEffect(() => {
    localStorage.setItem("vote_hetsh_pledges", JSON.stringify(pledges));
  }, [pledges]);

  // Global Liquid Glass Bubble Emitter
  const triggerBubbleBurst = (clientX: number, clientY: number) => {
    const burstCount = 18;
    const newParticles = Array.from({ length: burstCount }).map((_, i) => {
      const angle = Math.random() * Math.PI * 2;
      const distance = 60 + Math.random() * 140;
      const tx = Math.cos(angle) * distance;
      // Subtract to encourage general upwards floating float
      const ty = Math.sin(angle) * distance - (30 + Math.random() * 50);
      
      const glassColors = [
        "rgba(34, 211, 238, 0.45)",  // Cyan
        "rgba(99, 102, 241, 0.4)",   // Indigo
        "rgba(168, 85, 247, 0.45)",  // Purple
        "rgba(244, 63, 94, 0.4)",    // Pink
        "rgba(16, 185, 129, 0.45)"   // Emerald
      ];

      return {
        id: `${Date.now()}-${i}-${Math.random()}`,
        x: clientX,
        y: clientY,
        tx,
        ty,
        size: 8 + Math.random() * 16,
        color: glassColors[Math.floor(Math.random() * glassColors.length)],
      };
    });

    setParticles((prev) => [...prev, ...newParticles]);

    // Cleanup after animation completes
    setTimeout(() => {
      setParticles((prev) => prev.filter((p) => !newParticles.find((np) => np.id === p.id)));
    }, 1500);
  };

  const handleCastVote = (x: number, y: number) => {
    setVotes((prev) => prev + 1);
    triggerBubbleBurst(x, y);
  };

  const handleAddPledge = (newPledge: Pledge) => {
    setPledges((prev) => [newPledge, ...prev]);
    // When someone pledges, count that as an automatic extra support vote too!
    setVotes((prev) => prev + 1);
  };

  // Helper smooth scroll
  const scrollTo = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="relative min-h-screen text-slate-100 selection:bg-cyan-500/30 selection:text-white">
      {/* Liquid Organic Floating Background */}
      <BlobBackground />

      {/* Floating Pill Navigation Header */}
      <motion.header
        initial={{ y: -50, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-5 left-1/2 -translate-x-1/2 z-50 glass rounded-full px-5 py-2.5 border border-white/10 shadow-[0_12px_40px_rgba(0,0,0,0.5)] w-[92%] max-w-3xl flex items-center justify-between gap-4"
      >
        <div 
          onClick={() => scrollTo("campaign-hero")}
          className="flex items-center gap-2 cursor-pointer group"
        >
          <Flame className="w-5 h-5 text-cyan-400 group-hover:text-cyan-300 transition-colors animate-pulse" />
          <span className="font-display font-black text-white text-xs tracking-wider uppercase group-hover:text-cyan-200 transition-colors hidden sm:inline">
            HETSH '26
          </span>
        </div>

        {/* Navigation pill anchors */}
        <nav className="flex items-center gap-1 sm:gap-2">
          {[
            { id: "campaign-manifesto", label: "Manifesto", icon: BookOpen },
            { id: "campaign-about", label: "Timeline", icon: Award },
            { id: "campaign-pledges", label: "Pledges", icon: Heart },
            { id: "campaign-faq", label: "FAQ", icon: HelpCircle },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs text-gray-300 hover:text-white hover:bg-white/5 transition-all duration-200 cursor-pointer"
              >
                <Icon className="w-3.5 h-3.5 text-gray-400" />
                <span className="hidden md:inline">{item.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Mini Pill Counter */}
        <div className="flex items-center gap-1.5 bg-cyan-500/10 border border-cyan-500/20 px-3 py-1 rounded-full shrink-0">
          <Vote className="w-3.5 h-3.5 text-cyan-400" />
          <span className="font-mono text-xs font-bold text-cyan-200">{votes}</span>
        </div>
      </motion.header>

      {/* Main Campaign Layout */}
      <main className="relative z-10">
        <HeroSection votes={votes} onVote={handleCastVote} />
        
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <ManifestoSection />
        
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <AboutSection />
        
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <PledgesSection pledges={pledges} onAddPledge={handleAddPledge} />
        
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <FAQSection />
      </main>

      {/* Campaign Footer */}
      <footer className="relative z-10 border-t border-white/5 bg-slate-950/40 backdrop-blur-md py-12 px-4 md:px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h3 className="font-display font-black text-lg tracking-wider text-white">VOTE FOR HETSH N. UDHNAWALA</h3>
            <p className="text-gray-400 text-xs mt-1.5 max-w-sm font-light">
              Designing an inclusive, energetic, and completely transparent student council. Standing for School Head Boy.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end gap-2.5">
            <p className="font-mono text-[10px] text-gray-400 tracking-wider uppercase">
              Campaign support hub
            </p>
            <div className="flex gap-4">
              <button 
                onClick={() => scrollTo("campaign-hero")}
                className="text-xs text-gray-400 hover:text-cyan-300 transition-colors"
              >
                Back to top &uarr;
              </button>
              <span className="text-gray-700">|</span>
              <button 
                onClick={() => scrollTo("campaign-manifesto")}
                className="text-xs text-gray-400 hover:text-cyan-300 transition-colors"
              >
                Our Manifesto
              </button>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto border-t border-white/5 mt-8 pt-6 flex flex-col sm:flex-row justify-between text-[10px] text-gray-500 font-mono">
          <span>&copy; {new Date().getFullYear()} Hetsh N. Udhnawala Campaign. All rights of student voice reserved.</span>
          <span className="mt-2 sm:mt-0">Refined in Liquid Glass Design &bull; Powered by Student Synergy</span>
        </div>
      </footer>

      {/* Global Interactive Glass Bubble Overlay */}
      <div className="fixed inset-0 pointer-events-none z-[9999] overflow-hidden">
        {particles.map((p) => (
          <motion.div
            key={p.id}
            initial={{ x: p.x - p.size / 2, y: p.y - p.size / 2, opacity: 1, scale: 0.1 }}
            animate={{
              x: p.x + p.tx - p.size / 2,
              y: p.y + p.ty - p.size / 2,
              opacity: 0,
              scale: [1.2, 0.8, 0],
            }}
            transition={{ duration: 1.4, ease: "easeOut" }}
            className="absolute rounded-full border border-white/45 backdrop-blur-[2.5px] shadow-[inset_0_1.5px_4px_rgba(255,255,255,0.4),0_2px_10px_rgba(0,0,0,0.3)]"
            style={{
              width: p.size,
              height: p.size,
              backgroundColor: p.color,
            }}
          />
        ))}
      </div>
    </div>
  );
}
