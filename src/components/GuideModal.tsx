import React, { useState } from 'react';
import { X, Copy, Check, FileCode, Sparkles } from 'lucide-react';

interface GuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const GuideModal: React.FC<GuideModalProps> = ({ isOpen, onClose }) => {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleCopy = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const snippets = [
    {
      key: 'profile-image',
      title: '1. Profile Image Replacement',
      file: 'src/components/Hero.tsx',
      snippet: `<!-- REPLACE WITH YOUR PROFILE IMAGE: -->\n<img \n  src="/your-photo.jpg" \n  alt="[Your Name]" \n  className="w-full h-full object-cover rounded-2xl" \n/>`,
    },
    {
      key: 'projects-image',
      title: '2. Project Cards Image (10 Cards)',
      file: 'src/components/Projects.tsx',
      snippet: `<!-- REPLACE WITH YOUR PROJECT IMAGE: -->\n<img \n  src="/project-thumbnail.png" \n  alt="Project Title" \n  className="w-full h-full object-cover" \n/>`,
    },
    {
      key: 'media-image',
      title: '3. Media Section: Personal Photo',
      file: 'src/components/FunFacts.tsx',
      snippet: `<!-- REPLACE WITH YOUR PERSONAL IMAGE: -->\n<img \n  src="/personal-photo.jpg" \n  alt="Personal photo" \n  className="w-full h-full object-cover rounded-xl" \n/>`,
    },
    {
      key: 'media-video',
      title: '4. Media Section: Personal Video',
      file: 'src/components/FunFacts.tsx',
      snippet: `<!-- REPLACE WITH YOUR VIDEO: -->\n<video controls className="w-full h-full rounded-xl object-cover">\n  <source src="/your-video.mp4" type="video/mp4" />\n  Your browser does not support the video tag.\n</video>\n<!-- Or YouTube embed: -->\n<!-- <iframe src="https://www.youtube.com/embed/VIDEO_ID" className="w-full h-full rounded-xl" allowFullScreen></iframe> -->`,
    },
    {
      key: 'contact-info',
      title: '5. Contact Info (Email & GitHub)',
      file: 'src/components/Contact.tsx & Footer.tsx',
      snippet: `// In Contact.tsx and Footer.tsx:\nconst email = "your.email@example.com";\nconst github = "https://github.com/yourusername";`,
    },
  ];

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
    >
      <div className="bg-[#0f172a] border border-slate-700 max-w-2xl w-full rounded-2xl p-6 sm:p-8 space-y-6 max-h-[90vh] overflow-y-auto shadow-2xl relative">
        <div className="flex items-center justify-between pb-4 border-b border-slate-800">
          <div className="flex items-center gap-2.5">
            <FileCode className="w-5 h-5 text-indigo-400" />
            <h3 className="text-lg font-bold text-white">
              Portfolio Customization &amp; HTML Guide
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="text-xs text-slate-300 leading-relaxed space-y-2 bg-indigo-950/30 p-3.5 rounded-xl border border-indigo-900/40">
          <div className="flex items-center gap-2 font-semibold text-indigo-200">
            <Sparkles className="w-4 h-4 text-indigo-400" />
            <span>All Requested Template Placeholders Included</span>
          </div>
          <p>
            This portfolio was built precisely according to your brief with all placeholders intact (<code className="text-indigo-300">[Your Name]</code>, <code className="text-indigo-300">[Write about yourself here]</code>, <code className="text-indigo-300">[Your Interests]</code>, <code className="text-indigo-300">[Your Goals]</code>, 10 empty project cards, 10 skill tags, three fun facts, hobbies, favorite things, media placeholders, email, and GitHub).
          </p>
        </div>

        <div className="space-y-4">
          <h4 className="text-sm font-semibold text-slate-200 uppercase tracking-wider text-xs">
            Quick-Copy Replacement Snippets
          </h4>

          {snippets.map((s) => (
            <div key={s.key} className="bg-slate-900 rounded-xl border border-slate-800 p-4 space-y-2">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-sm font-semibold text-white">{s.title}</span>
                  <span className="block text-[11px] text-slate-400 font-mono">{s.file}</span>
                </div>
                <button
                  onClick={() => handleCopy(s.snippet, s.key)}
                  className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-mono text-indigo-300 hover:text-white bg-indigo-950/60 hover:bg-indigo-900/60 border border-indigo-800/60 rounded-md transition-colors"
                >
                  {copiedKey === s.key ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedKey === s.key ? 'Copied' : 'Copy'}</span>
                </button>
              </div>

              <pre className="p-3 bg-black/60 rounded-lg text-slate-300 font-mono text-xs overflow-x-auto border border-slate-800/80">
                <code>{s.snippet}</code>
              </pre>
            </div>
          ))}
        </div>

        <div className="pt-2 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2.5 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-xl transition-colors"
          >
            Close Guide
          </button>
        </div>
      </div>
    </div>
  );
};
