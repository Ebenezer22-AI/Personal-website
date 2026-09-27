import React, { useState } from 'react';
import { Mail, Github, Copy, Check, Send, ExternalLink, MessageSquare } from 'lucide-react';

export const Contact: React.FC = () => {
  const [copiedItem, setCopiedItem] = useState<'email' | 'github' | null>(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const emailPlaceholder = '[Your Email]';
  const githubPlaceholder = '[Your GitHub URL]';

  const handleCopy = (text: string, type: 'email' | 'github') => {
    navigator.clipboard.writeText(text);
    setCopiedItem(type);
    setTimeout(() => setCopiedItem(null), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="py-24 bg-[#0d121f]/70 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-14">
          <span className="text-xs font-semibold text-indigo-400 uppercase tracking-widest">
            Get In Touch
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Contact
          </h2>
          <p className="mt-2 text-sm text-slate-400">
            Reach out for collaborations, project inquiries, or simply to connect.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Direct Contact Information */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Email Contact Card */}
            <div className="bg-[#0f172a] rounded-2xl border border-slate-800 p-6 shadow-sm hover:border-slate-700 transition-colors">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white">
                      Email
                    </h3>
                    <p className="text-xs text-slate-400">Direct electronic mail</p>
                  </div>
                </div>

                <button
                  onClick={() => handleCopy(emailPlaceholder, 'email')}
                  className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
                  title="Copy email address"
                >
                  {copiedItem === 'email' ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              <div className="mt-4 p-3.5 rounded-xl bg-slate-900/90 border border-dashed border-slate-700/80 flex items-center justify-between">
                <span className="font-mono text-sm text-indigo-300 font-semibold truncate">
                  {emailPlaceholder}
                </span>
                <a
                  href={`mailto:${emailPlaceholder}`}
                  className="text-xs text-slate-400 hover:text-indigo-300 flex items-center gap-1 shrink-0 ml-2"
                >
                  <span>Open</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* GitHub Contact Card */}
            <div className="bg-[#0f172a] rounded-2xl border border-slate-800 p-6 shadow-sm hover:border-slate-700 transition-colors">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-white">
                    <Github className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white">
                      GitHub
                    </h3>
                    <p className="text-xs text-slate-400">Code repositories &amp; activity</p>
                  </div>
                </div>

                <button
                  onClick={() => handleCopy(githubPlaceholder, 'github')}
                  className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
                  title="Copy GitHub URL"
                >
                  {copiedItem === 'github' ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              <div className="mt-4 p-3.5 rounded-xl bg-slate-900/90 border border-dashed border-slate-700/80 flex items-center justify-between">
                <span className="font-mono text-sm text-slate-300 font-semibold truncate">
                  {githubPlaceholder}
                </span>
                <a
                  href={githubPlaceholder}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-slate-400 hover:text-indigo-300 flex items-center gap-1 shrink-0 ml-2"
                >
                  <span>Visit</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Quick customization note */}
            <div className="p-4 rounded-xl bg-indigo-950/20 border border-indigo-900/40 text-xs text-slate-400 leading-relaxed">
              <span className="font-semibold text-indigo-300 block mb-1">Customization Tip:</span>
              Replace <code className="text-indigo-200">[Your Email]</code> and <code className="text-indigo-200">[Your GitHub URL]</code> in <code className="text-indigo-200">Contact.tsx</code> and <code className="text-indigo-200">Footer.tsx</code> with your true contact credentials.
            </div>

          </div>

          {/* Right Column: Interactive Send Message Form */}
          <div className="lg:col-span-7 bg-[#0f172a] rounded-2xl border border-slate-800 p-8 shadow-sm">
            <div className="flex items-center gap-2 mb-6">
              <MessageSquare className="w-5 h-5 text-indigo-400" />
              <h3 className="text-lg font-bold text-white tracking-tight">
                Send a Direct Message
              </h3>
            </div>

            {formSubmitted ? (
              <div className="p-6 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-2">
                <Check className="w-8 h-8 text-emerald-400 mx-auto" />
                <h4 className="text-base font-bold text-emerald-200">Message Delivered</h4>
                <p className="text-xs text-slate-300">
                  Thank you! In a production deployment, this form will connect to your email service or backend endpoint.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Jane Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-700/80 rounded-xl text-sm text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">
                      Your Email Address
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="jane@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-700/80 rounded-xl text-sm text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">
                    Subject (Optional)
                  </label>
                  <input
                    type="text"
                    placeholder="Project Inquiry / Collaboration"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-700/80 rounded-xl text-sm text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">
                    Your Message
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Hello, I would love to discuss a potential project or opportunity..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-700/80 rounded-xl text-sm text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition resize-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 rounded-xl transition-colors shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 w-full sm:w-auto"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </button>
                </div>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
