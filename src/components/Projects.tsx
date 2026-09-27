import React, { useState } from 'react';
import { ExternalLink, Github, Image as ImageIcon, Copy, Check, Eye } from 'lucide-react';
import { ProjectCardData } from '../types.ts';

interface ProjectsProps {
  onSelectProject?: (project: ProjectCardData) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onSelectProject }) => {
  const [activeModalProject, setActiveModalProject] = useState<ProjectCardData | null>(null);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  // Exactly 10 empty project cards as specified in the prompt
  const initialProjects: ProjectCardData[] = Array.from({ length: 10 }, (_, i) => ({
    id: i + 1,
    title: `[Project Title ${i + 1}]`,
    description: `[Write a short description of the project here]`,
    technologies: [`[Tech 1]`, `[Tech 2]`, `[Tech 3]`],
    imagePlaceholder: `[INSERT PROJECT IMAGE HERE]`,
    liveUrlPlaceholder: `https://example.com/project-${i + 1}`,
    codeUrlPlaceholder: `https://github.com/username/project-${i + 1}`,
  }));

  const handleCopySnippet = (index: number, title: string) => {
    const snippet = `<!-- REPLACE WITH YOUR PROJECT IMAGE: -->\n<img src="/project-${index + 1}.jpg" alt="${title}" className="w-full h-full object-cover rounded-t-xl" />`;
    navigator.clipboard.writeText(snippet);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const handleViewLiveApp = (proj: ProjectCardData) => {
    setActiveModalProject(proj);
    if (onSelectProject) onSelectProject(proj);
  };

  const handleViewCode = (proj: ProjectCardData) => {
    setActiveModalProject(proj);
    if (onSelectProject) onSelectProject(proj);
  };

  return (
    <section id="projects" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
        <div>
          <span className="text-xs font-semibold text-indigo-400 uppercase tracking-widest">
            Portfolio Showcase
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Projects
          </h2>
          <p className="mt-2 text-sm text-slate-400 max-w-2xl">
            10 project cards ready for your applications, client work, open-source utilities, and case studies.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-xs font-mono text-slate-400 bg-slate-900 border border-slate-800 px-3 py-1.5 rounded-lg">
            10 Total Cards
          </span>
        </div>
      </div>

      {/* Grid of 10 Empty Project Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {initialProjects.map((project, idx) => (
          <div
            key={project.id}
            className="group bg-[#0f172a] rounded-2xl border border-slate-800 hover:border-slate-700/80 transition-all duration-200 flex flex-col overflow-hidden shadow-sm hover:shadow-lg hover:shadow-indigo-950/20"
          >
            {/* 1. Project Image Placeholder with HTML Comment */}
            {/* <!-- REPLACE WITH YOUR PROJECT IMAGE: <img src="project-image-url.jpg" alt="${project.title}" class="w-full h-full object-cover" /> --> */}
            <div className="relative aspect-video w-full bg-slate-900/90 border-b border-dashed border-slate-800 flex flex-col items-center justify-center p-4 text-center overflow-hidden">
              <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 mb-2 group-hover:scale-105 transition-transform">
                <ImageIcon className="w-6 h-6" />
              </div>
              
              <span className="text-[11px] font-mono uppercase tracking-wider text-indigo-300 font-semibold px-2 py-0.5 bg-indigo-950/70 border border-indigo-800/60 rounded">
                {project.imagePlaceholder}
              </span>

              {/* Developer Comment Tooltip / Quick Copy */}
              <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <button
                  onClick={() => handleCopySnippet(idx, project.title)}
                  className="px-2 py-1 text-[10px] font-mono text-slate-300 bg-slate-950/90 hover:bg-slate-900 border border-slate-700 rounded flex items-center gap-1 backdrop-blur"
                  title="Copy replacement HTML comment & snippet"
                >
                  {copiedIndex === idx ? (
                    <>
                      <Check className="w-3 h-3 text-emerald-400" />
                      <span>Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3 text-slate-400" />
                      <span>HTML</span>
                    </>
                  )}
                </button>
              </div>

              <div className="absolute bottom-1.5 left-2 text-[10px] font-mono text-slate-400 hidden sm:block">
                &lt;!-- INSERT PROJECT IMAGE HERE --&gt;
              </div>
            </div>

            {/* Card Content */}
            <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                {/* 2. Project Title */}
                <h3 className="text-lg font-bold text-white tracking-tight group-hover:text-indigo-300 transition-colors">
                  {project.title}
                </h3>

                {/* 3. Short Description */}
                <p className="text-sm text-slate-400 leading-relaxed font-normal">
                  {project.description}
                </p>

                {/* 4. Technologies Used (Clean unboxed text metadata with typographic separators per zero-pill discipline) */}
                <div className="pt-2 flex items-center flex-wrap gap-2 text-xs font-mono text-indigo-300/80">
                  <span className="text-slate-400 font-sans text-xs">Tech:</span>
                  {project.technologies.map((tech, tIdx) => (
                    <React.Fragment key={tIdx}>
                      <span>{tech}</span>
                      {tIdx < project.technologies.length - 1 && (
                        <span className="text-slate-400" aria-hidden="true">·</span>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>

              {/* Card Actions: View Live App & View Code */}
              <div className="pt-4 border-t border-slate-800/80 grid grid-cols-2 gap-3">
                {/* 5. View Live App Button */}
                <button
                  onClick={() => handleViewLiveApp(project)}
                  className="inline-flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-medium text-white bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 rounded-lg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>View Live App</span>
                </button>

                {/* 6. View Code Button */}
                <button
                  onClick={() => handleViewCode(project)}
                  className="inline-flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-medium text-slate-300 bg-slate-800/90 hover:bg-slate-700/90 hover:text-white border border-slate-700/70 rounded-lg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-400"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>View Code</span>
                </button>
              </div>

            </div>
          </div>
        ))}
      </div>

      {/* Interactive Modal for project actions */}
      {activeModalProject && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm"
        >
          <div className="bg-[#0f172a] border border-slate-700 max-w-lg w-full rounded-2xl p-6 space-y-5 shadow-2xl relative">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <Eye className="w-5 h-5 text-indigo-400" />
                <h4 className="text-base font-bold text-white">
                  {activeModalProject.title} Details
                </h4>
              </div>
              <button
                onClick={() => setActiveModalProject(null)}
                className="text-slate-400 hover:text-white text-sm px-2 py-1 rounded"
              >
                ✕ Close
              </button>
            </div>

            <div className="space-y-3 text-sm text-slate-300">
              <p>
                <strong className="text-white">Description:</strong> {activeModalProject.description}
              </p>
              <div>
                <strong className="text-white">Technologies:</strong>{' '}
                <span className="text-indigo-300 font-mono text-xs">
                  {activeModalProject.technologies.join(' · ')}
                </span>
              </div>
              <div className="p-3 bg-slate-900 rounded-lg border border-slate-800 space-y-1 text-xs font-mono">
                <div className="text-slate-400">Live URL Placeholder:</div>
                <div className="text-indigo-400 break-all">{activeModalProject.liveUrlPlaceholder}</div>
                <div className="text-slate-400 pt-1">Code URL Placeholder:</div>
                <div className="text-emerald-400 break-all">{activeModalProject.codeUrlPlaceholder}</div>
              </div>
              <div className="text-xs text-slate-400 bg-indigo-950/30 p-2.5 rounded border border-indigo-900/40">
                You can replace the button URLs in <code className="text-indigo-300">src/components/Projects.tsx</code> with your real deployment and GitHub repository links.
              </div>
            </div>

            <div className="flex items-center justify-end gap-3 pt-2">
              <button
                onClick={() => {
                  window.open(activeModalProject.liveUrlPlaceholder, '_blank', 'noopener,noreferrer');
                }}
                className="px-4 py-2 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg transition-colors flex items-center gap-1.5"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>Simulate Open Live App</span>
              </button>
              <button
                onClick={() => setActiveModalProject(null)}
                className="px-4 py-2 text-xs font-medium text-slate-300 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors"
              >
                Dismiss
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
