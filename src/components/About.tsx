import { useInView } from '../hooks/useInView';

export default function About() {
  const { ref, isInView } = useInView();

  return (
    <section id="about" className="py-24 px-4 sm:px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div ref={ref} className={`section-reveal ${isInView ? 'visible' : ''}`}>
          {/* Section label */}
          <div className="flex items-center gap-3 mb-12">
            <span className="font-mono text-xs text-[var(--color-accent)]">01</span>
            <span className="h-px flex-1 max-w-[60px] bg-[var(--color-accent)] opacity-30" />
            <span className="text-sm font-medium text-[var(--text-secondary)] uppercase tracking-wider">About</span>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left - Who I Am */}
            <div className="space-y-6">
              <h2 className="text-3xl sm:text-4xl font-bold text-[var(--text-primary)]">
                Who I Am
              </h2>
              <div className="space-y-4 text-[var(--text-secondary)] leading-relaxed">
                <p>
                  I'm a BCA student from Nepal who enjoys building software and experimenting with modern technologies. I learn primarily by creating projects rather than only studying theory.
                </p>
                <p>
                  My approach to development is hands-on — I prefer to build something, see how it works, understand what breaks, and iterate from there. This practical approach has led me through web development, mobile apps, AI experiments, and backend systems.
                </p>
              </div>

              {/* Quick info */}
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="p-4 rounded-lg border" style={{ borderColor: 'var(--border)', backgroundColor: 'var(--bg-card)' }}>
                  <div className="text-xs font-mono text-[var(--color-accent)] mb-1">Location</div>
                  <div className="text-sm font-medium text-[var(--text-primary)]">Jhapa, Nepal</div>
                </div>
                <div className="p-4 rounded-lg border" style={{ borderColor: 'var(--border)', backgroundColor: 'var(--bg-card)' }}>
                  <div className="text-xs font-mono text-[var(--color-accent)] mb-1">Education</div>
                  <div className="text-sm font-medium text-[var(--text-primary)]">BCA - 7th Sem</div>
                </div>
              </div>
            </div>

            {/* Right - What I Like Building + Current Focus */}
            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-4">
                  What I Like Building
                </h3>
                <div className="flex flex-wrap gap-2">
                  {['Web Applications', 'Mobile Apps', 'AI-Powered Tools', 'Automation Systems', 'Developer Tools', 'Backend Systems', 'Experimental Projects'].map(item => (
                    <span key={item} className="px-3 py-1.5 text-xs font-medium rounded-md border text-[var(--text-secondary)]" style={{ borderColor: 'var(--border)', backgroundColor: 'var(--bg-card)' }}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-4">
                  Current Focus
                </h3>
                <ul className="space-y-2.5">
                  {['AI-assisted development', 'AI/ML experimentation', 'Full-stack development', 'Developer tooling', 'System design', 'Building practical products'].map(item => (
                    <li key={item} className="flex items-center gap-3 text-sm text-[var(--text-secondary)]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)] flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
