import React, { useState } from 'react';
import { Layers, Check, Copy } from 'lucide-react';

export const Skills: React.FC = () => {
  const [copiedSkill, setCopiedSkill] = useState<string | null>(null);

  // Exactly 10 skill tags as requested
  const skillsList = [
    { id: 1, label: '[Skill 1]' },
    { id: 2, label: '[Skill 2]' },
    { id: 3, label: '[Skill 3]' },
    { id: 4, label: '[Skill 4]' },
    { id: 5, label: '[Skill 5]' },
    { id: 6, label: '[Skill 6]' },
    { id: 7, label: '[Skill 7]' },
    { id: 8, label: '[Skill 8]' },
    { id: 9, label: '[Skill 9]' },
    { id: 10, label: '[Skill 10]' },
  ];

  const handleCopySkill = (label: string) => {
    navigator.clipboard.writeText(label);
    setCopiedSkill(label);
    setTimeout(() => setCopiedSkill(null), 1800);
  };

  return (
    <section id="skills" className="py-20 bg-[#0d121f]/50 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-xs font-semibold text-indigo-400 uppercase tracking-widest">
              Capabilities &amp; Stack
            </span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Skills
            </h2>
            <p className="mt-2 text-sm text-slate-400">
              A curated list of 10 key technical skills, frameworks, and methodologies.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
            <Layers className="w-4 h-4 text-indigo-400" />
            <span>10 Skill Slots</span>
          </div>
        </div>

        {/* 10 Skill Tags Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {skillsList.map((skill) => {
            const isCopied = copiedSkill === skill.label;
            return (
              <div
                key={skill.id}
                onClick={() => handleCopySkill(skill.label)}
                className="group relative bg-[#0f172a] hover:bg-slate-800/70 border border-slate-800 hover:border-indigo-500/50 rounded-xl p-5 transition-all duration-200 cursor-pointer flex flex-col justify-between"
                title="Click to copy skill placeholder"
              >
                <div className="flex items-center justify-between text-xs text-slate-400 font-mono mb-3">
                  <span>{String(skill.id).padStart(2, '0')}</span>
                  {isCopied ? (
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                  ) : (
                    <Copy className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-slate-400" />
                  )}
                </div>

                <div className="text-base font-semibold text-white group-hover:text-indigo-300 transition-colors tracking-tight">
                  {skill.label}
                </div>

                <div className="mt-3 pt-2 border-t border-slate-800/60 text-[10px] text-slate-400 font-mono uppercase">
                  Skill Tag
                </div>
              </div>
            );
          })}
        </div>

        {/* Code Customization Hint */}
        <div className="mt-8 text-center text-xs text-slate-400">
          Replace each <code className="text-indigo-400 font-mono">[Skill N]</code> with your languages (e.g. TypeScript, React, Python, Node.js, SQL, Docker, etc.).
        </div>

      </div>
    </section>
  );
};
