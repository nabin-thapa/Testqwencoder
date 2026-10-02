import { Code, Layers, Brain, Rocket, Sprout } from 'lucide-react';
import { journeyStages } from '../data/skills';
import { useInView } from '../hooks/useInView';

const iconMap: Record<string, React.ReactNode> = {
  seedling: <Sprout size={18} />,
  code: <Code size={18} />,
  layers: <Layers size={18} />,
  brain: <Brain size={18} />,
  rocket: <Rocket size={18} />,
};

export default function Journey() {
  const { ref, isInView } = useInView();

  return (
    <section id="journey" className="py-24 px-4 sm:px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div ref={ref} className={`section-reveal ${isInView ? 'visible' : ''}`}>
          {/* Section label */}
          <div className="flex items-center gap-3 mb-12">
            <span className="font-mono text-xs text-[var(--color-accent)]">04</span>
            <span className="h-px flex-1 max-w-[60px] bg-[var(--color-accent)] opacity-30" />
            <span className="text-sm font-medium text-[var(--text-secondary)] uppercase tracking-wider">Journey</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--text-primary)] mb-12">
            My Development Journey
          </h2>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-4 sm:left-6 top-0 bottom-0 w-px" style={{ backgroundColor: 'var(--border)' }} />

            <div className="space-y-8">
              {journeyStages.map((stage, index) => (
                <div key={stage.title} className="relative pl-12 sm:pl-16">
                  {/* Dot */}
                  <div className="absolute left-[10px] sm:left-[18px] top-3 w-3 h-3 rounded-full border-2 border-[var(--color-accent)]" style={{ backgroundColor: 'var(--bg-primary)' }} />
                  
                  {/* Content */}
                  <div className="p-5 rounded-xl border hover:border-[var(--color-accent)]/30 transition-colors" style={{ borderColor: 'var(--border)', backgroundColor: 'var(--bg-card)' }}>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-[var(--color-accent)]">
                        {iconMap[stage.icon]}
                      </span>
                      <h3 className="font-semibold text-[var(--text-primary)]">
                        {stage.title}
                      </h3>
                      {index === journeyStages.length - 1 && (
                        <span className="ml-auto px-2 py-0.5 text-[10px] font-medium rounded-full bg-green-500/10 text-green-500 border border-green-500/20">
                          Current
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                      {stage.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
