import React, { useState } from 'react';
import { ArrowRight, Image as ImageIcon, Copy, Check, Upload, Sparkles } from 'lucide-react';

interface HeroProps {
  onViewProjects: () => void;
  onOpenGuide?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onViewProjects, onOpenGuide }) => {
  const [copiedCode, setCopiedCode] = useState(false);
  const [customImage, setCustomImage] = useState<string | null>(null);

  const replacementCodeSnippet = `<!-- REPLACE WITH YOUR PROFILE IMAGE: -->
<img 
  src="/your-profile-image.jpg" 
  alt="[Your Name]" 
  className="w-full h-full object-cover rounded-2xl" 
/>`;

  const handleCopyCode = () => {
    navigator.clipboard.writeText(replacementCodeSnippet);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  const handleSimulateUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setCustomImage(url);
    }
  };

  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Subtle radial ambient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-medium">
              <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
              <span>Personal Portfolio &amp; Developer Showcase</span>
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
                [Your Name]
              </h1>
              <p className="text-lg sm:text-xl text-slate-300 font-normal leading-relaxed max-w-2xl">
                [Your Short Introduction]
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onViewProjects}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 rounded-xl transition-all shadow-md shadow-indigo-600/25 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
              >
                <span>View My Projects</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={handleCopyCode}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-medium text-slate-300 bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 rounded-xl transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-400"
                title="Copy HTML replacement snippet for profile image"
              >
                {copiedCode ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-slate-400" />}
                <span>{copiedCode ? 'Image HTML Copied!' : 'Copy Image HTML'}</span>
              </button>
            </div>

            {/* Quick Helper Note */}
            <p className="text-xs text-slate-400 pt-1">
              Tip: Edit the source code or use the HTML Guide button in the top right to customize all placeholders.
            </p>
          </div>

          {/* Right Column: Profile Image Placeholder */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="w-full max-w-md">
              {/* Profile Image Container */}
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-3xl blur-md opacity-75 group-hover:opacity-100 transition duration-300" />
                
                <div className="relative aspect-square w-full rounded-2xl bg-[#0f172a] border-2 border-dashed border-indigo-500/40 p-4 flex flex-col items-center justify-center text-center overflow-hidden">
                  
                  {/* HTML Comment explicitly rendered for developers viewing page source or inspecting */}
                  {/* <!-- REPLACE WITH YOUR PROFILE IMAGE: <img src="your-image.jpg" alt="[Your Name]" class="w-full h-full object-cover rounded-2xl" /> --> */}

                  {customImage ? (
                    <div className="relative w-full h-full">
                      <img
                        src={customImage}
                        alt="[Your Name] Profile Preview"
                        className="w-full h-full object-cover rounded-xl"
                      />
                      <button
                        onClick={() => setCustomImage(null)}
                        className="absolute bottom-3 right-3 px-3 py-1 text-xs bg-slate-950/80 text-white rounded-md hover:bg-slate-900 backdrop-blur"
                      >
                        Reset Placeholder
                      </button>
                    </div>
                  ) : (
                    <div className="flex flex-col items-center justify-center p-6 space-y-4">
                      <div className="w-20 h-20 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 shadow-inner">
                        <ImageIcon className="w-10 h-10" />
                      </div>

                      <div className="space-y-1.5">
                        <span className="inline-block text-xs font-mono uppercase tracking-wider text-indigo-400 font-semibold px-2.5 py-1 bg-indigo-950/60 border border-indigo-800/60 rounded">
                          [INSERT PROFILE IMAGE HERE]
                        </span>
                        <p className="text-xs text-slate-400 max-w-xs pt-1">
                          HTML comment inside markup indicates where to place your actual photo file.
                        </p>
                      </div>

                      {/* Interactive Test Uploader for User Preview */}
                      <div className="pt-2 flex flex-col items-center gap-2">
                        <label className="cursor-pointer inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-300 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg transition-colors">
                          <Upload className="w-3.5 h-3.5 text-indigo-400" />
                          <span>Test Image Preview</span>
                          <input
                            type="file"
                            accept="image/*"
                            className="hidden"
                            onChange={handleSimulateUpload}
                          />
                        </label>
                        <span className="text-[11px] text-slate-400 font-mono">
                          Dimensions: 600×600px Recommended
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Developer Comment Callout Badge */}
              <div className="mt-3 p-2.5 rounded-lg bg-slate-900/60 border border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
                <span className="truncate">&lt;!-- REPLACE WITH YOUR PROFILE IMAGE: &lt;img ... /&gt; --&gt;</span>
                <button
                  onClick={handleCopyCode}
                  className="ml-2 text-indigo-400 hover:text-indigo-300 shrink-0 underline"
                >
                  copy
                </button>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
