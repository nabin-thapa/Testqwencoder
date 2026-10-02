import { Mail, Github } from 'lucide-react';
import { config } from '../data/config';
import { useInView } from '../hooks/useInView';

export default function Contact() {
  const { ref, isInView } = useInView();

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div ref={ref} className={`section-reveal ${isInView ? 'visible' : ''}`}>
          {/* Section label */}
          <div className="flex items-center gap-3 mb-12">
            <span className="font-mono text-xs text-[var(--color-accent)]">06</span>
            <span className="h-px flex-1 max-w-[60px] bg-[var(--color-accent)] opacity-30" />
            <span className="text-sm font-medium text-[var(--text-secondary)] uppercase tracking-wider">Contact</span>
          </div>

          <div className="relative rounded-2xl border p-8 sm:p-12 text-center overflow-hidden" style={{ borderColor: 'var(--border)', backgroundColor: 'var(--bg-card)' }}>
            {/* Background accent */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[var(--color-accent)] opacity-[0.03] rounded-full blur-[100px] pointer-events-none" />

            <div className="relative space-y-6">
              <h2 className="text-3xl sm:text-4xl font-bold text-[var(--text-primary)]">
                Have an idea worth building?
              </h2>
              <p className="text-[var(--text-secondary)] max-w-lg mx-auto leading-relaxed">
                I'm always interested in learning, building, and collaborating on interesting technology projects. Let's connect.
              </p>

              <div className="flex flex-wrap justify-center gap-3 pt-4">
                {config.email ? (
                  <a
                    href={`mailto:${config.email}`}
                    className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium rounded-lg bg-[var(--color-accent)] text-white hover:bg-[var(--color-accent-light)] transition-colors"
                  >
                    <Mail size={16} />
                    Email Me
                  </a>
                ) : (
                  <span className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium rounded-lg text-[var(--text-secondary)]" style={{ backgroundColor: 'var(--bg-elevated)' }}>
                    <Mail size={16} />
                    Email (coming soon)
                  </span>
                )}
                <a
                  href={config.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium rounded-lg border text-[var(--text-primary)] hover:bg-[var(--bg-elevated)] transition-colors"
                  style={{ borderColor: 'var(--border)' }}
                >
                  <Github size={16} />
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
