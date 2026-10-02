import { useInView } from '../hooks/useInView';

export default function Philosophy() {
  const { ref, isInView } = useInView();
  const steps = ['Build it.', 'Break it.', 'Understand it.', 'Improve it.'];

  return (
    <section className="py-20 px-4 sm:px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div ref={ref} className={`section-reveal ${isInView ? 'visible' : ''}`}>
          <div className="relative rounded-2xl border p-8 sm:p-12 overflow-hidden" style={{ borderColor: 'var(--border)', backgroundColor: 'var(--bg-card)' }}>
            {/* Background accent */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--color-accent)] opacity-[0.03] rounded-full blur-[80px] pointer-events-none" />
            
            <div className="relative">
              <div className="flex flex-wrap gap-3 sm:gap-4 mb-8">
                {steps.map((step, i) => (
                  <div key={step} className="flex items-center gap-3 sm:gap-4">
                    <span className="text-xl sm:text-2xl font-bold text-[var(--text-primary)]">
                      {step}
                    </span>
                    {i < steps.length - 1 && (
                      <span className="text-[var(--color-accent)] text-lg">→</span>
                    )}
                  </div>
                ))}
              </div>
              <p className="text-[var(--text-secondary)] max-w-2xl leading-relaxed">
                My learning approach is rooted in experimentation. I build real projects, encounter real problems, debug through them, and continuously improve. Every project teaches something new — whether it's a new framework, a design pattern, or simply a better way to structure code.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
