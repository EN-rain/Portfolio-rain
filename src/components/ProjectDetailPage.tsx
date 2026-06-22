import { ArrowDown, ArrowLeft, ArrowRight, ExternalLink, Github } from 'lucide-react';
import { projects } from '../data/works';
import { projectDetails } from '../data/projectDetails';
import { useLenis } from '../hooks/scroll/useLenis';
import projectLogoPlaceholder from '../assets/images/icon.jpg';

type ProjectDetailPageProps = {
  projectId: string;
};

export function ProjectDetailPage({ projectId }: ProjectDetailPageProps) {
  useLenis();

  const project = projects.find((item) => item.id === projectId);
  const detail = projectDetails[projectId];

  if (!project || !detail) return null;

  return (
    <main className="projects-page project-detail-page min-h-dvh bg-black text-left text-white">
      <article className="w-full">
        <a
          href="/projects"
          onClick={(event) => {
            event.preventDefault();
            window.dispatchEvent(new CustomEvent('portfolio-navigate', { detail: { path: '/projects' } }));
          }}
          className="tech-font absolute left-5 top-6 z-20 inline-flex items-center gap-2 text-[11px] uppercase tracking-widest text-white/75 transition-colors hover:text-[#7c3aed] md:left-12 md:top-10"
        >
          <ArrowLeft size={15} />
          Back to all projects
        </a>

        <div className="relative min-h-[72dvh] overflow-hidden bg-gradient-to-br from-[#1a1a2e] to-[#080808] md:min-h-dvh">
          {project.img ? (
            <img src={project.img} alt={project.title} className="absolute inset-0 h-full w-full object-cover" />
          ) : (
            <div className="flex h-full items-end px-5 pb-10 text-left md:px-12 md:pb-16">
              <span className="heading-font text-lg uppercase tracking-[0.18em] text-white/15">
                {project.status ?? project.line2}
              </span>
            </div>
          )}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-black/45 to-black/20" />

          <div className="absolute inset-x-5 bottom-10 z-10 text-left md:inset-x-12 md:bottom-16">
            <img
              src={project.icon ?? projectLogoPlaceholder}
              alt=""
              aria-hidden="true"
              className="mb-5 h-[120px] w-[120px] rounded-xl border border-white/10 object-cover"
            />
            <p className="tech-font mb-2 text-[12px] font-bold text-[#7c3aed]">{project.year}</p>
            <h1 className="heading-font text-4xl font-bold uppercase tracking-tight md:text-7xl">{project.title}</h1>
            <p className="heading-font mt-2 text-[11px] uppercase tracking-wider text-white/60">{project.line2}</p>
          </div>
        </div>

        <section className="px-5 py-10 md:px-12 md:py-12">
          <div className="mx-auto max-w-4xl text-left">
            {project.links && project.links.length > 0 && (
              <div className="mb-10 flex flex-wrap justify-start gap-3">
                {project.links.map((link) => (
                  <a
                    key={link.url}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="tech-font inline-flex min-h-11 items-center gap-2 border border-white/15 px-4 py-2 text-[10px] uppercase tracking-widest text-white/75 transition-colors hover:border-[#7c3aed] hover:text-white"
                  >
                    {link.type === 'github' ? <Github size={14} /> : <ExternalLink size={14} />}
                    {link.label}
                  </a>
                ))}
              </div>
            )}
            <h2 className="heading-font text-2xl font-bold uppercase md:text-4xl">About the project</h2>
            <div className="mt-8 space-y-5 text-[15px] leading-relaxed text-white/70 md:text-base">
              {detail.overview.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
          </div>

          <div className="mx-auto mt-20 max-w-6xl border-t border-white/10 pt-12 md:grid md:grid-cols-[1.35fr_0.65fr] md:gap-16">
            <section>
              <p className="tech-font text-[10px] uppercase tracking-[0.2em] text-[#7c3aed]">Capabilities</p>
              <h2 className="heading-font mt-3 text-2xl font-bold uppercase md:text-3xl">Key features</h2>
              <ul className="mt-8 grid gap-x-8 gap-y-5 sm:grid-cols-2">
                {detail.features.map((feature, index) => (
                  <li key={feature} className="flex gap-4 text-sm leading-relaxed text-white/70">
                    <span className="tech-font text-xs text-[#7c3aed]">0{index + 1}</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="mt-14 border-t border-white/10 pt-10 md:mt-0 md:border-l md:border-t-0 md:pl-12 md:pt-0">
              <p className="tech-font text-[10px] uppercase tracking-[0.2em] text-[#7c3aed]">Toolkit</p>
              <h2 className="heading-font mt-3 text-2xl font-bold uppercase md:text-3xl">Technology</h2>
              <div className="mt-8 flex flex-wrap gap-3">
                {project.stack.map((technology) => (
                  <span key={technology} className="tech-font border border-white/10 px-3 py-2 text-[10px] uppercase tracking-widest text-white/60">{technology}</span>
                ))}
              </div>
            </section>
          </div>

          <section className="mx-auto mt-24 max-w-6xl border-t border-white/10 pt-12">
            <p className="tech-font text-[10px] uppercase tracking-[0.2em] text-[#7c3aed]">System map</p>
            <h2 className="heading-font mt-3 text-2xl font-bold uppercase md:text-4xl">Architecture flow</h2>

            <ol className="mt-10 flex flex-col md:flex-row md:items-stretch">
              {detail.architecture.map((step, index) => (
                <li key={step.label} className="flex flex-col md:min-w-0 md:flex-1 md:flex-row">
                  <div className="relative flex-1 border border-white/10 bg-white/[0.025] p-5 text-left transition-colors hover:border-[#7c3aed]/60 md:min-h-[230px] md:p-6">
                    <span className="tech-font inline-flex h-8 w-8 items-center justify-center border border-[#7c3aed]/50 text-[10px] font-bold text-[#7c3aed]">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <h3 className="heading-font mt-5 text-base font-bold uppercase leading-snug">{step.label}</h3>
                    <p className="mt-4 text-xs leading-relaxed text-white/60">{step.detail}</p>
                  </div>

                  {index < detail.architecture.length - 1 && (
                    <div className="flex h-12 shrink-0 items-center justify-center text-[#7c3aed] md:h-auto md:w-12">
                      <ArrowDown className="md:hidden" size={22} strokeWidth={1.8} aria-hidden="true" />
                      <ArrowRight className="hidden md:block" size={22} strokeWidth={1.8} aria-hidden="true" />
                    </div>
                  )}
                </li>
              ))}
            </ol>
          </section>
        </section>
      </article>
    </main>
  );
}
