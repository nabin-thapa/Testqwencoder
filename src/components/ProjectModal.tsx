import { useEffect, useRef } from 'react';
import { X, Github, ExternalLink } from 'lucide-react';
import { Project } from '../data/projects';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

const statusColors: Record<string, string> = {
  'Active Development': 'bg-green-500/10 text-green-500 border-green-500/20',
  'Completed / Project': 'bg-blue-500/10 text-blue-500 border-blue-500/20',
  'Academic / Learning Project': 'bg-amber-500/10 text-amber-500 border-amber-500/20',
};

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    
    if (project) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-fade-in-up"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal content */}
      <div
        ref={modalRef}
        className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-2xl border animate-fade-in-up"
        style={{ borderColor: 'var(--border)', backgroundColor: 'var(--bg-primary)', animationDuration: '0.2s' }}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-lg text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-elevated)] transition-all z-10"
          aria-label="Close modal"
        >
          <X size={20} />
        </button>

        {/* Header visual */}
        <div className="h-32 sm:h-40 flex items-center justify-center border-b" style={{ backgroundColor: 'var(--bg-elevated)', borderColor: 'var(--border)' }}>
          <div className="text-center">
            <div className="text-[var(--color-accent)] text-3xl mb-2">{'{ }'}</div>
            <span className="font-mono text-sm text-[var(--text-secondary)]">
              {project.name}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 space-y-6">
          {/* Title & Status */}
          <div className="space-y-3">
            <div className="flex flex-wrap items-center gap-3">
              <h2 id="modal-title" className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)]">
                {project.name}
              </h2>
              <span className={`inline-flex px-2.5 py-1 text-xs font-medium rounded-full border ${statusColors[project.status] || ''}`}>
                {project.status}
              </span>
            </div>
            <p className="text-[var(--text-secondary)] leading-relaxed">
              {project.longDescription}
            </p>
          </div>

          {/* Problem & Solution */}
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-lg border" style={{ borderColor: 'var(--border)', backgroundColor: 'var(--bg-card)' }}>
              <h4 className="text-xs font-mono text-[var(--color-accent)] mb-2 uppercase tracking-wider">Problem</h4>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                {project.problem}
              </p>
            </div>
            <div className="p-4 rounded-lg border" style={{ borderColor: 'var(--border)', backgroundColor: 'var(--bg-card)' }}>
              <h4 className="text-xs font-mono text-[var(--color-accent)] mb-2 uppercase tracking-wider">Solution</h4>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Features */}
          <div>
            <h4 className="text-sm font-semibold text-[var(--text-primary)] mb-3">
              Features
            </h4>
            <ul className="grid sm:grid-cols-2 gap-2">
              {project.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)] mt-1.5 flex-shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          {/* Technologies */}
          <div>
            <h4 className="text-sm font-semibold text-[var(--text-primary)] mb-3">
              Technologies
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map(tech => (
                <span key={tech} className="px-2.5 py-1 text-xs font-mono rounded-md text-[var(--text-secondary)]" style={{ backgroundColor: 'var(--bg-elevated)' }}>
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-wrap gap-3 pt-4 border-t" style={{ borderColor: 'var(--border)' }}>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg bg-[var(--color-accent)] text-white hover:bg-[var(--color-accent-light)] transition-colors"
            >
              <Github size={16} />
              View Code
            </a>
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg border text-[var(--text-primary)] hover:bg-[var(--bg-elevated)] transition-colors"
                style={{ borderColor: 'var(--border)' }}
              >
                <ExternalLink size={16} />
                Live Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
