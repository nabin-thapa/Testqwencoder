import { Github } from 'lucide-react';
import { config } from '../data/config';
import { useInView } from '../hooks/useInView';

export default function GitHubSection() {
  const { ref, isInView } = useInView();

  return (
    <section className="py-20 px-4 sm:px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div ref={ref} className={`section-reveal ${isInView ? 'visible' : ''}`}>
          <div className="grid sm:grid-cols-2 gap-6">
            {/* GitHub card */}
            <div className="p-6 sm:p-8 rounded-2xl border" style={{ borderColor: 'var(--border)', backgroundColor: 'var(--bg-card)' }}>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-xl bg-[var(--color-accent)]/10">
                  <Github size={24} className="text-[var(--color-accent)]" />
                </div>
                <div>
                  <h3 className="font-semibold text-[var(--text-primary)]">GitHub</h3>
                  <p className="text-sm text-[var(--text-secondary)]">@{config.githubUsername}</p>
                </div>
              </div>
              <p className="text-sm text-[var(--text-secondary)] mb-6 leading-relaxed">
                Check out my repositories, projects, and contributions. I share my learning journey through code.
              </p>
              <a
                href={config.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg bg-[var(--color-accent)] text-white hover:bg-[var(--color-accent-light)] transition-colors"
              >
                <Github size={16} />
                View GitHub
              </a>
            </div>

            {/* Open Source card */}
            <div className="p-6 sm:p-8 rounded-2xl border" style={{ borderColor: 'var(--border)', backgroundColor: 'var(--bg-card)' }}>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-xl bg-[var(--color-accent)]/10">
                  <svg className="w-6 h-6 text-[var(--color-accent)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-[var(--text-primary)]">Open Source</h3>
                  <p className="text-sm text-[var(--text-secondary)]">Learning & Contributing</p>
                </div>
              </div>
              <p className="text-sm text-[var(--text-secondary)] mb-6 leading-relaxed">
                Exploring open-source development and learning through real projects. I believe in building in the open and sharing knowledge.
              </p>
              <a
                href={config.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg border text-[var(--text-primary)] hover:bg-[var(--bg-elevated)] transition-colors"
                style={{ borderColor: 'var(--border)' }}
              >
                Explore Repos
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
