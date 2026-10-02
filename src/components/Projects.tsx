import { useState } from 'react';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';
import { projects, Project, ProjectCategory } from '../data/projects';
import { useInView } from '../hooks/useInView';

interface ProjectsProps {
  onProjectClick: (project: Project) => void;
}

const filters: { label: string; value: ProjectCategory | 'All' }[] = [
  { label: 'All', value: 'All' },
  { label: 'Web', value: 'Web' },
  { label: 'Mobile', value: 'Mobile' },
  { label: 'AI', value: 'AI' },
  { label: 'Backend', value: 'Backend' },
];

const statusColors: Record<string, string> = {
  'Active Development': 'bg-green-500/10 text-green-500 border-green-500/20',
  'Completed / Project': 'bg-blue-500/10 text-blue-500 border-blue-500/20',
  'Academic / Learning Project': 'bg-amber-500/10 text-amber-500 border-amber-500/20',
};

export default function Projects({ onProjectClick }: ProjectsProps) {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory | 'All'>('All');
  const { ref, isInView } = useInView();

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(p => p.categories.includes(activeFilter));

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div ref={ref} className={`section-reveal ${isInView ? 'visible' : ''}`}>
          {/* Section label */}
          <div className="flex items-center gap-3 mb-12">
            <span className="font-mono text-xs text-[var(--color-accent)]">03</span>
            <span className="h-px flex-1 max-w-[60px] bg-[var(--color-accent)] opacity-30" />
            <span className="text-sm font-medium text-[var(--text-secondary)] uppercase tracking-wider">Projects</span>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold text-[var(--text-primary)]">
              Featured Projects
            </h2>
            
            {/* Filter tabs */}
            <div className="flex flex-wrap gap-2">
              {filters.map(filter => (
                <button
                  key={filter.value}
                  onClick={() => setActiveFilter(filter.value)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all ${
                    activeFilter === filter.value
                      ? 'bg-[var(--color-accent)] text-white'
                      : 'border text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                  }`}
                  style={activeFilter !== filter.value ? { borderColor: 'var(--border)' } : {}}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </div>

          {/* Project grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <article
                key={project.id}
                onClick={() => onProjectClick(project)}
                className="group relative rounded-xl border overflow-hidden cursor-pointer hover:border-[var(--color-accent)]/40 hover:-translate-y-1 transition-all duration-300"
                style={{ borderColor: 'var(--border)', backgroundColor: 'var(--bg-card)' }}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && onProjectClick(project)}
                aria-label={`View details for ${project.name}`}
              >
                {/* Project visual */}
                <div className="relative h-44 overflow-hidden" style={{ backgroundColor: 'var(--bg-elevated)' }}>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="font-mono text-xs text-[var(--text-secondary)] opacity-50 text-center px-4">
                      <div className="text-[var(--color-accent)] text-lg mb-2">{'{ }'}</div>
                      {project.name}
                    </div>
                  </div>
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-[var(--color-accent)] opacity-0 group-hover:opacity-5 transition-opacity" />
                  {/* Arrow */}
                  <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-all transform translate-x-2 group-hover:translate-x-0">
                    <ArrowUpRight size={18} className="text-[var(--color-accent)]" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 space-y-3">
                  {/* Status */}
                  <span className={`inline-flex px-2 py-0.5 text-[10px] font-medium rounded-full border ${statusColors[project.status] || ''}`}>
                    {project.status}
                  </span>

                  <h3 className="text-lg font-semibold text-[var(--text-primary)] group-hover:text-[var(--color-accent)] transition-colors">
                    {project.name}
                  </h3>

                  <p className="text-sm text-[var(--text-secondary)] line-clamp-2 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.technologies.slice(0, 4).map(tech => (
                      <span key={tech} className="px-2 py-0.5 text-[10px] font-mono rounded text-[var(--text-secondary)]" style={{ backgroundColor: 'var(--bg-elevated)' }}>
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-2 py-0.5 text-[10px] font-mono rounded text-[var(--text-secondary)]" style={{ backgroundColor: 'var(--bg-elevated)' }}>
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>

                  {/* Links */}
                  <div className="flex gap-3 pt-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center gap-1 text-xs text-[var(--text-secondary)] hover:text-[var(--color-accent)] transition-colors"
                    >
                      <Github size={13} />
                      Code
                    </a>
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="flex items-center gap-1 text-xs text-[var(--text-secondary)] hover:text-[var(--color-accent)] transition-colors"
                      >
                        <ExternalLink size={13} />
                        Demo
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-16 text-[var(--text-secondary)]">
              No projects found in this category.
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
