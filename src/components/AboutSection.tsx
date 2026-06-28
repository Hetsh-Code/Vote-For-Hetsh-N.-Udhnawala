import { Calendar, Award, Compass, MessageSquareCode } from "lucide-react";
import { achievementsData } from "../data/campaignData";
import GlassCard from "./GlassCard";

export default function AboutSection() {
  return (
    <section id="campaign-about" className="py-24 px-4 md:px-6 max-w-6xl mx-auto relative">
      {/* Decorative Blur Backgrounds */}
      <div className="absolute left-[-10%] top-[30%] w-[350px] h-[350px] rounded-full bg-violet-600/5 blur-[120px] pointer-events-none" />
      <div className="absolute right-[-10%] bottom-[20%] w-[350px] h-[350px] rounded-full bg-cyan-600/5 blur-[120px] pointer-events-none" />

      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="font-display text-3xl md:text-5xl font-black text-white mb-4">
          MEET YOUR <span className="text-gradient-cyan-indigo text-glow">CANDIDATE</span>
        </h2>
        <div className="h-[2px] w-24 bg-gradient-to-r from-cyan-400 to-indigo-500 mx-auto rounded-full mb-4" />
        <p className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto">
          Determined, approachable, and proven. Learn about Hetsh's path of student representation, leadership, and vision.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Hand: Personal Speech / Open Letter */}
        <div className="lg:col-span-7 space-y-6">
          <GlassCard id="about-letter-card" className="relative flex flex-col justify-between" delay={0.1}>
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400">
                  <MessageSquareCode className="w-5 h-5" />
                </div>
                <h3 className="font-display text-2xl font-bold text-white">A Letter to My Peers</h3>
              </div>

              <div className="space-y-4 text-gray-300 text-sm md:text-base font-light leading-relaxed">
                <p>
                  Dear fellow students, teachers, and friends,
                </p>
                <p>
                  Our school is more than just a building of classrooms—it is a community where lifelong dreams are initiated, sports rivalries unite us, and daily peer interactions form our characters. To lead this community as your <span className="text-cyan-300 font-semibold text-glow">Head Boy</span> is not just a role; it is a serious promise of absolute service and dedicated support.
                </p>
                
                {/* Visual Pull-quote with glass border */}
                <div className="p-4 rounded-xl bg-cyan-500/5 border-l-4 border-cyan-400 font-display italic text-gray-200 text-sm my-5">
                  "Leadership is not about carrying a badge of authority; it is about standing as the bridge that translates your silent worries into direct, executable changes."
                </div>

                <p>
                  Over my past term as Prefect and Deputy, I realized that our biggest strength is our collective voice. But too often, great suggestions are lost in the noise. Through the <span className="text-indigo-300 font-semibold">H.E.T.S.H. Formula</span>, I will make sure we establish clear, transparent digital glass boxes for your requests, bring back competitive house enthusiasm across sports and arts, and implement collaborative academic peer-mentorship.
                </p>
                <p>
                  On election day, I ask not just for your vote, but for your trust and your synergy. Let's design a legacy that we will all look back on with immense pride.
                </p>
              </div>
            </div>

            <div className="border-t border-white/10 mt-6 pt-4 flex items-center justify-between">
              <div>
                <p className="font-display font-bold text-white text-base">Hetsh N. Udhnawala</p>
                <p className="font-mono text-xs text-gray-400">Deputy Head Boy & Candidate for Head Boy '26</p>
              </div>
              <div className="p-2 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-mono uppercase tracking-wider">
                Proven Leader
              </div>
            </div>
          </GlassCard>
        </div>

        {/* Right Hand: Achievements & Timeline */}
        <div className="lg:col-span-5 space-y-6">
          <GlassCard id="about-timeline-card" className="h-full" delay={0.25}>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="font-display text-2xl font-bold text-white">Track Record & Service</h3>
            </div>

            <p className="text-gray-400 text-xs md:text-sm mb-6 font-light">
              Leadership isn't built overnight. Here is how Hetsh has actively served our student community over the past years:
            </p>

            {/* Vertical Timeline */}
            <div className="relative border-l-2 border-white/10 pl-6 ml-3 space-y-8">
              {achievementsData.map((ach) => (
                <div key={ach.id} className="relative group">
                  {/* Glowing Node Dot */}
                  <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-slate-950 border-2 border-cyan-400 group-hover:bg-cyan-400 transition-colors duration-300 shadow-[0_0_8px_rgba(34,211,238,0.5)]" />
                  
                  <div>
                    <span className="font-mono text-[10px] bg-white/5 border border-white/10 text-cyan-300 px-2 py-0.5 rounded-md font-semibold">
                      {ach.year}
                    </span>
                    <h4 className="font-display font-bold text-sm md:text-base text-white mt-1.5 group-hover:text-cyan-300 transition-colors duration-200">
                      {ach.title}
                    </h4>
                    <p className="text-xs text-gray-400 leading-relaxed mt-1 font-light">
                      {ach.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </GlassCard>
        </div>
      </div>
    </section>
  );
}
