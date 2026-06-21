import { ArrowLeft } from 'lucide-react';
import { projects } from '../data/works';
import { useLenis } from '../hooks/scroll/useLenis';
import projectLogoPlaceholder from '../assets/images/icon.jpg';

export function ProjectsPage() {
  useLenis();

  return (
    <main className="projects-page min-h-screen bg-black px-5 py-10 text-white md:px-12 md:py-14">
      <div className="mx-auto w-full max-w-7xl">
        <a
          href="/"
          onClick={(event) => {
            event.preventDefault();
            window.dispatchEvent(new CustomEvent('portfolio-navigate', { detail: { path: '/' } }));
          }}
          className="tech-font mb-10 inline-flex items-center gap-2 text-[11px] uppercase tracking-widest text-white/60 transition-colors hover:text-[#7c3aed]"
        >
          <ArrowLeft size={15} />
          Back to portfolio
        </a>

        <header className="projects-page-header mb-10">
          <p className="tech-font mb-3 text-[11px] uppercase tracking-[0.22em] text-[#7c3aed]">
            Personal work
          </p>
          <h1 className="heading-font text-4xl font-bold uppercase tracking-tight md:text-6xl">
            All Projects
          </h1>
        </header>

        <section className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {[...projects].reverse().map((project) => (
            <article
              key={project.id}
              role="link"
              tabIndex={0}
              aria-label={`Open ${project.title} project`}
              onClick={() => window.dispatchEvent(new CustomEvent('portfolio-navigate', { detail: { path: `/projects/${project.id}` } }))}
              onKeyDown={(event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                  event.preventDefault();
                  window.dispatchEvent(new CustomEvent('portfolio-navigate', { detail: { path: `/projects/${project.id}` } }));
                }
              }}
              className="projects-page-card relative cursor-pointer overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04]"
            >
              <div className="relative aspect-[16/7] overflow-hidden bg-gradient-to-br from-[#1a1a2e] to-[#080808]">
                {project.img ? (
                  <img
                    src={project.img}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                ) : (
                  <div className="flex h-full items-center justify-center px-6 text-center">
                    <span className="heading-font text-lg uppercase tracking-[0.18em] text-white/15">
                      {project.status ?? project.line2}
                    </span>
                  </div>
                )}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              </div>

              <img
                src={project.icon ?? projectLogoPlaceholder}
                alt=""
                aria-hidden="true"
                className="absolute left-1/2 top-[calc(43.75%_-_120px)] z-10 h-[120px] w-[120px] -translate-x-1/2 rounded-xl border border-white/10 object-cover"
              />

              <div className="p-6 text-center">
                <p className="tech-font mb-2 text-[12px] font-bold text-[#7c3aed]">{project.year}</p>
                <h2 className="heading-font text-2xl font-bold md:text-3xl">{project.title}</h2>
                <p className="heading-font mt-1 text-[11px] uppercase tracking-wider text-white/45">
                  {project.line2}
                </p>
                <p className="mt-8 text-[13px] leading-relaxed text-white/65">{project.des}</p>

                <div className="mt-5 flex flex-wrap justify-center gap-x-4 gap-y-2">
                  {project.stack.map((technology) => (
                    <span
                      key={technology}
                      className="tech-font text-[9px] uppercase tracking-widest text-white/50"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

              </div>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
}
