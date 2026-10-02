import { Code, Layers, Database, Wrench, Brain } from 'lucide-react';
import { skillCategories } from '../data/skills';
import { useInView } from '../hooks/useInView';

const iconMap: Record<string, React.ReactNode> = {
  code: <Code size={20} />,
  layers: <Layers size={20} />,
  database: <Database size={20} />,
  wrench: <Wrench size={20} />,
  brain: <Brain size={20} />,
};

export default function Skills() {
  const { ref, isInView } = useInView();

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div ref={ref} className={`section-reveal ${isInView ? 'visible' : ''}`}>
          {/* Section label */}
          <div className="flex items-center gap-3 mb-12">
            <span className="font-mono text-xs text-[var(--color-accent)]">02</span>
            <span className="h-px flex-1 max-w-[60px] bg-[var(--color-accent)] opacity-30" />
            <span className="text-sm font-medium text-[var(--text-secondary)] uppercase tracking-wider">Skills</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--text-primary)] mb-12">
            Technologies & Tools
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category) => (
              <div
                key={category.name}
                className="p-6 rounded-xl border hover:border-[var(--color-accent)]/30 transition-colors"
                style={{ borderColor: 'var(--border)', backgroundColor: 'var(--bg-card)' }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-[var(--color-accent)]/10 text-[var(--color-accent)]">
                    {iconMap[category.icon]}
                  </div>
                  <h3 className="font-semibold text-[var(--text-primary)]">
                    {category.name}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map(skill => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 text-xs font-medium rounded-md text-[var(--text-secondary)]"
                      style={{ backgroundColor: 'var(--bg-elevated)' }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
