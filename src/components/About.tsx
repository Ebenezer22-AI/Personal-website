import React from 'react';
import { User, Compass, Target, Info } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-[#0d121f]/60 border-y border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-semibold text-indigo-400 uppercase tracking-widest">
            Background &amp; Aspirations
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold tracking-tight text-white">
            About Me
          </h2>
          <p className="mt-2 text-sm text-slate-400">
            A concise overview of background, core interests, and forward-looking milestones.
          </p>
        </div>

        {/* Grid Layout for About, Interests, and Goals */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Main About Me Statement Card */}
          <div className="lg:col-span-6 bg-[#0f172a] rounded-2xl border border-slate-800 p-8 flex flex-col justify-between shadow-sm hover:border-slate-700/80 transition-colors">
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
                <User className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-white tracking-tight">
                Who I Am
              </h3>
              {/* Preserving exact placeholder without inventing any information */}
              <div className="p-5 rounded-xl bg-slate-900/80 border border-dashed border-slate-700/80 text-slate-300 font-sans leading-relaxed text-base">
                [Write about yourself here]
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-800/80 flex items-center gap-2 text-xs text-slate-400">
              <Info className="w-3.5 h-3.5 text-slate-400" />
              <span>Placeholder ready for your personalized autobiography or bio paragraph.</span>
            </div>
          </div>

          {/* Right Column: My Interests & My Goals */}
          <div className="lg:col-span-6 space-y-8">
            
            {/* My Interests Section */}
            <div className="bg-[#0f172a] rounded-2xl border border-slate-800 p-8 shadow-sm hover:border-slate-700/80 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
                  <Compass className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white tracking-tight">
                    My Interests
                  </h3>
                  <span className="text-xs text-slate-400">Fields, topics, and technical fascinations</span>
                </div>
              </div>

              {/* Exact placeholder preserved */}
              <div className="p-5 rounded-xl bg-slate-900/80 border border-dashed border-slate-700/80 text-slate-300 text-base">
                [Your Interests]
              </div>
            </div>

            {/* My Goals Section */}
            <div className="bg-[#0f172a] rounded-2xl border border-slate-800 p-8 shadow-sm hover:border-slate-700/80 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                  <Target className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white tracking-tight">
                    My Goals
                  </h3>
                  <span className="text-xs text-slate-400">Professional targets and learning milestones</span>
                </div>
              </div>

              {/* Exact placeholder preserved */}
              <div className="p-5 rounded-xl bg-slate-900/80 border border-dashed border-slate-700/80 text-slate-300 text-base">
                [Your Goals]
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
