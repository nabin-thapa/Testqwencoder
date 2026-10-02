import { Globe, Smartphone, Brain, Server, Zap } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const thingsIBuild = [
  {
    icon: <Globe size={20} />,
    title: 'Web Applications',
    description: 'Responsive interfaces and practical web applications using modern frameworks and tools.'
  },
  {
    icon: <Smartphone size={20} />,
    title: 'Mobile Applications',
    description: 'Native Android applications and local data-driven tools with clean architecture.'
  },
  {
    icon: <Brain size={20} />,
    title: 'AI Applications',
    description: 'AI-powered experiments, automation tools, and intelligent interfaces using modern AI.'
  },
  {
    icon: <Server size={20} />,
    title: 'Backend Systems',
    description: 'REST APIs, databases, and backend services with clean, maintainable architecture.'
  },
  {
    icon: <Zap size={20} />,
    title: 'Automation',
    description: 'Tools that reduce repetitive work through scripts, APIs, and AI-powered workflows.'
  }
];

export default function ThingsIBuild() {
  const { ref, isInView } = useInView();

  return (
    <section className="py-24 px-4 sm:px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div ref={ref} className={`section-reveal ${isInView ? 'visible' : ''}`}>
          <div className="flex items-center gap-3 mb-12">
            <span className="font-mono text-xs text-[var(--color-accent)]">05</span>
            <span className="h-px flex-1 max-w-[60px] bg-[var(--color-accent)] opacity-30" />
            <span className="text-sm font-medium text-[var(--text-secondary)] uppercase tracking-wider">Interests</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--text-primary)] mb-12">
            Things I Like Building
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {thingsIBuild.map((item) => (
              <div
                key={item.title}
                className="group p-6 rounded-xl border hover:border-[var(--color-accent)]/30 transition-all"
                style={{ borderColor: 'var(--border)', backgroundColor: 'var(--bg-card)' }}
              >
                <div className="p-2.5 rounded-lg bg-[var(--color-accent)]/10 text-[var(--color-accent)] mb-4 w-fit group-hover:bg-[var(--color-accent)]/20 transition-colors">
                  {item.icon}
                </div>
                <h3 className="font-semibold text-[var(--text-primary)] mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
