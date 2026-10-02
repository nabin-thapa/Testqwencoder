import { useInView } from '../hooks/useInView';

export default function QuickIntro() {
  const { ref, isInView } = useInView();

  return (
    <section className="py-16 px-4 sm:px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div ref={ref} className={`section-reveal ${isInView ? 'visible' : ''}`}>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)] mb-4">
              Building. Learning. Experimenting.
            </h2>
            <p className="text-[var(--text-secondary)] leading-relaxed">
              BCA student passionate about software development, AI, automation, web technologies, and building practical tools that solve real problems.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
