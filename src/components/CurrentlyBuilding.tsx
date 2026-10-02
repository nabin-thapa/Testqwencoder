import { useInView } from '../hooks/useInView';
import { projects } from '../data/projects';

export default function CurrentlyBuilding() {
  const { ref, isInView } = useInView();
  const activeProject = projects.find(p => p.status === 'Active Development');

  if (!activeProject) return null;

  return (
    <section className="py-20 px-4 sm:px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div ref={ref} className={`section-reveal ${isInView ? 'visible' : ''}`}>
          <div className="rounded-2xl border p-6 sm:p-8 relative overflow-hidden" style={{ borderColor: 'var(--border)', backgroundColor: 'var(--bg-card)' }}>
            {/* Background accent */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-[var(--color-accent)] opacity-[0.03] rounded-full blur-[60px] pointer-events-none" />
            
            <div className="relative">
              {/* Header */}
              <div className="flex items-center gap-3 mb-6">
                <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" />
                <span className="text-sm font-mono text-[var(--color-accent)] uppercase tracking-wider">Currently Building</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)] mb-3">
                {activeProject.name}
              </h3>

              <p className="text-[var(--text-secondary)] mb-6 max-w-2xl leading-relaxed">
                {activeProject.description}
              </p>

              {/* Tech stack */}
              <div className="mb-6">
                <div className="text-xs font-mono text-[var(--text-secondary)] mb-2 uppercase tracking-wider">Tech Stack</div>
                <div className="flex flex-wrap gap-2">
                  {activeProject.technologies.map(tech => (
                    <span key={tech} className="px-2.5 py-1 text-xs font-mono rounded-md text-[var(--text-secondary)]" style={{ backgroundColor: 'var(--bg-elevated)' }}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Progress indicator */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono text-[var(--text-secondary)]">Development Progress</span>
                  <span className="text-xs font-mono text-[var(--color-accent)]">In Progress</span>
                </div>
                <div className="w-full h-1.5 rounded-full overflow-hidden" style={{ backgroundColor: 'var(--bg-elevated)' }}>
                  <div className="h-full w-2/3 rounded-full bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-accent-light)]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
