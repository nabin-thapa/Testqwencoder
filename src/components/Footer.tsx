import { Github } from 'lucide-react';
import { config } from '../data/config';

const footerLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  return (
    <footer className="py-12 px-4 sm:px-6 border-t" style={{ borderColor: 'var(--border)' }}>
      <div className="max-w-6xl mx-auto">
        <div className="grid sm:grid-cols-3 gap-8 mb-10">
          {/* Brand */}
          <div className="space-y-3">
            <a href="#home" className="font-mono text-sm font-semibold text-[var(--color-accent)]">
              {config.githubUsername}
            </a>
            <p className="text-sm text-[var(--text-secondary)]">
              Building software and learning continuously.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-[var(--text-secondary)] mb-3">
              Navigation
            </h4>
            <nav className="space-y-2">
              {footerLinks.map(link => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-[var(--text-secondary)] mb-3">
              Connect
            </h4>
            <div className="space-y-2">
              <a
                href={config.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
              >
                <Github size={14} />
                GitHub
              </a>
              {config.linkedin && (
                <a
                  href={config.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
                >
                  LinkedIn
                </a>
              )}
              {config.email && (
                <a
                  href={`mailto:${config.email}`}
                  className="flex items-center gap-2 text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
                >
                  Email
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t" style={{ borderColor: 'var(--border)' }}>
          <p className="text-xs text-[var(--text-secondary)] text-center sm:text-left">
            © 2026 {config.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
