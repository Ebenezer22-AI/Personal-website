import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Code2 } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  onOpenGuide?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection, onNavigate, onOpenGuide }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'fun-facts', label: 'Fun Facts' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleLinkClick = (id: string) => {
    setMobileMenuOpen(false);
    onNavigate(id);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled
          ? 'bg-[#0b0f17]/90 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/20'
          : 'bg-transparent border-b border-slate-800/30'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Zone 1: Brand Wordmark */}
        <button
          onClick={() => handleLinkClick('home')}
          className="text-lg font-bold tracking-tight text-white hover:text-indigo-400 transition-colors text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded"
        >
          [Your Name]
        </button>

        {/* Zone 2: Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleLinkClick(item.id)}
                className={`relative py-1 transition-colors hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded ${
                  isActive ? 'text-white font-semibold' : 'text-slate-400'
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-indigo-500 rounded-full" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Zone 3: Actions */}
        <div className="hidden md:flex items-center gap-3">
          {onOpenGuide && (
            <button
              onClick={onOpenGuide}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-300 bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700/60 rounded-md transition-colors"
              title="View template guide and HTML comments"
            >
              <Code2 className="w-3.5 h-3.5 text-indigo-400" />
              <span>HTML Guide</span>
            </button>
          )}
          <button
            onClick={() => handleLinkClick('contact')}
            className="inline-flex items-center gap-1 px-4 py-2 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 rounded-lg transition-colors shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
          >
            <span>Contact Me</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="flex md:hidden items-center gap-2">
          {onOpenGuide && (
            <button
              onClick={onOpenGuide}
              className="p-2 text-slate-300 hover:text-white bg-slate-800/60 rounded-md"
              title="HTML Guide"
            >
              <Code2 className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-400 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded-lg"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0e1422] border-b border-slate-800 px-4 pt-3 pb-6 space-y-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleLinkClick(item.id)}
              className={`block w-full text-left px-3 py-2 rounded-lg text-base font-medium transition-colors ${
                activeSection === item.id
                  ? 'bg-indigo-600/20 text-indigo-300 font-semibold'
                  : 'text-slate-300 hover:bg-slate-800 hover:text-white'
              }`}
            >
              {item.label}
            </button>
          ))}
          <div className="pt-3 border-t border-slate-800">
            <button
              onClick={() => handleLinkClick('contact')}
              className="w-full flex items-center justify-center gap-1.5 px-4 py-2.5 text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg transition-colors"
            >
              <span>Contact Me</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
