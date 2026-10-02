import { useState, useEffect } from 'react';
import { ArrowRight, Github } from 'lucide-react';
import { config } from '../data/config';

const terminalLines = [
  { prompt: '$ ', text: 'whoami', delay: 0 },
  { prompt: '', text: 'nabin-thapa', delay: 800 },
  { prompt: '', text: '', delay: 1200 },
  { prompt: '> ', text: 'building software', delay: 1600 },
  { prompt: '> ', text: 'exploring AI', delay: 2200 },
  { prompt: '> ', text: 'learning continuously', delay: 2800 },
  { prompt: '> ', text: 'shipping projects', delay: 3400 },
];

export default function Hero() {
  const [visibleLines, setVisibleLines] = useState(0);

  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = [];
    terminalLines.forEach((_, index) => {
      timers.push(
        setTimeout(() => setVisibleLines(index + 1), terminalLines[index].delay)
      );
    });
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 pb-16 px-4 sm:px-6 overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 grid-bg opacity-50" />
      
      {/* Gradient orb */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-[var(--color-accent)] opacity-[0.03] blur-[120px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto w-full grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left content */}
        <div className="space-y-6">
          {/* Status badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border" style={{ borderColor: 'var(--border)', backgroundColor: 'var(--bg-card)' }}>
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-xs font-medium text-[var(--text-secondary)]">
              Currently building & learning
            </span>
          </div>

          {/* Headline */}
          <div className="space-y-3">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[var(--text-primary)]">
              Hi, I'm{' '}
              <span className="text-[var(--color-accent)]">
                {config.name}
              </span>
              .
            </h1>
            <p className="text-lg sm:text-xl text-[var(--text-secondary)] max-w-lg leading-relaxed">
              {config.tagline}
            </p>
          </div>

          {/* Description */}
          <p className="text-base text-[var(--text-secondary)] max-w-md leading-relaxed">
            {config.description}
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-3 pt-2">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium rounded-lg bg-[var(--color-accent)] text-white hover:bg-[var(--color-accent-light)] transition-all hover:shadow-lg hover:shadow-[var(--color-accent)]/20"
            >
              View My Projects
              <ArrowRight size={16} />
            </a>
            <a
              href={config.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium rounded-lg border text-[var(--text-primary)] hover:bg-[var(--bg-elevated)] transition-all"
              style={{ borderColor: 'var(--border)' }}
            >
              <Github size={16} />
              GitHub
            </a>
          </div>
        </div>

        {/* Right - Terminal */}
        <div className="hidden lg:block">
          <div className="relative rounded-xl border overflow-hidden shadow-2xl" style={{ borderColor: 'var(--border)', backgroundColor: 'var(--bg-card)' }}>
            {/* Terminal header */}
            <div className="flex items-center gap-2 px-4 py-3 border-b" style={{ borderColor: 'var(--border)' }}>
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
              <span className="ml-2 text-xs font-mono text-[var(--text-secondary)]">
                terminal
              </span>
            </div>
            
            {/* Terminal content */}
            <div className="p-5 font-mono text-sm space-y-1.5 min-h-[240px]">
              {terminalLines.slice(0, visibleLines).map((line, i) => (
                <div key={i} className="flex">
                  {line.prompt && (
                    <span className={line.prompt === '$ ' ? 'text-[var(--color-accent)]' : 'text-[var(--text-secondary)]'}>
                      {line.prompt}
                    </span>
                  )}
                  <span className={line.prompt === '$ ' ? 'text-[var(--text-primary)]' : 'text-[var(--text-secondary)]'}>
                    {line.text}
                  </span>
                  {i === visibleLines - 1 && visibleLines < terminalLines.length && (
                    <span className="typing-cursor" />
                  )}
                </div>
              ))}
              {visibleLines >= terminalLines.length && (
                <div className="flex">
                  <span className="text-[var(--color-accent)]">$ </span>
                  <span className="typing-cursor" />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-2 opacity-50">
        <span className="text-xs text-[var(--text-secondary)]">Scroll</span>
        <div className="w-5 h-8 rounded-full border flex items-start justify-center p-1" style={{ borderColor: 'var(--border)' }}>
          <div className="w-1 h-2 rounded-full bg-[var(--color-accent)] animate-bounce" />
        </div>
      </div>
    </section>
  );
}
