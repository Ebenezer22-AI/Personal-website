import React from 'react';
import { Mail, Github, ArrowUp } from 'lucide-react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#080c14] border-t border-slate-800/80 py-12 text-slate-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Brand & Copyright */}
          <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
            <span className="font-bold text-white tracking-tight text-base">
              [Your Name]
            </span>
            <span className="hidden sm:inline text-slate-400" aria-hidden="true">·</span>
            <span className="text-xs text-slate-400">
              © {currentYear} [Your Name]. All rights reserved.
            </span>
          </div>

          {/* Quick Nav Links */}
          <div className="flex items-center gap-6 text-xs text-slate-400 font-medium">
            <button onClick={() => onNavigate('home')} className="hover:text-white transition-colors">
              Home
            </button>
            <button onClick={() => onNavigate('projects')} className="hover:text-white transition-colors">
              Projects
            </button>
            <button onClick={() => onNavigate('skills')} className="hover:text-white transition-colors">
              Skills
            </button>
            <button onClick={() => onNavigate('fun-facts')} className="hover:text-white transition-colors">
              Fun Facts
            </button>
            <button onClick={() => onNavigate('contact')} className="hover:text-white transition-colors">
              Contact
            </button>
          </div>

          {/* Contact Links (Email, GitHub) & Back to Top */}
          <div className="flex items-center gap-4">
            {/* Email link */}
            <a
              href="mailto:[Your Email]"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs font-mono text-slate-300 hover:text-white hover:border-slate-700 transition-colors"
              title="Send email to [Your Email]"
            >
              <Mail className="w-3.5 h-3.5 text-indigo-400" />
              <span>[Your Email]</span>
            </a>

            {/* GitHub link */}
            <a
              href="[Your GitHub URL]"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs font-mono text-slate-300 hover:text-white hover:border-slate-700 transition-colors"
              title="Visit [Your GitHub URL]"
            >
              <Github className="w-3.5 h-3.5 text-slate-300" />
              <span>[Your GitHub URL]</span>
            </a>

            {/* Back to top */}
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-400 hover:text-white transition-colors"
              title="Back to top"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>
      </div>
    </footer>
  );
};
