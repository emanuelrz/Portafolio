import { ArrowUpRight } from 'lucide-react'
import { getAssetPath } from '@/lib/utils'

const projects = [
  {
    title: 'KANSO — Gym Management Platform',
    category: 'Full-Stack · SaaS & Dashboard',
    tags: 'React.js · Node.js · Web APIs · Tailwind CSS',
    desc: 'Plataforma SaaS integral orientada a la gestión ágil de gimnasios y centros de entrenamiento: administración de membresías, control de asistencias, punto de venta (POS) y métricas financieras.',
    image: '/project_kanso.png',
    github: 'https://github.com/emanuelrz',
    demo: null,
  },
  {
    title: 'Mueblería Hermanos Jota',
    category: 'Frontend & UI · Showroom Digital',
    tags: 'React 18 · Vite · Tailwind CSS',
    desc: 'Showroom interactivo y catálogo digital con cálculo de presupuestos en tiempo real y cotización directa a WhatsApp.',
    image: '/project_muebleria.png',
    github: 'https://github.com/emanuelrz/muebleria-hnosj',
    demo: 'https://emanuelrz.github.io/muebleria-hnosj/',
  },
  {
    title: 'Bolsa de Empleo Municipal',
    category: 'Full-Stack · Gestión IT',
    tags: 'React.js · Node.js · Web APIs · SQL',
    desc: 'Plataforma web para centralizar y digitalizar la postulación laboral municipal, con arquitectura Cliente/Servidor y base de datos relacional.',
    image: '/project1.png',
    github: 'https://github.com/emanuelrz',
    demo: null,
  },
]

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.2.09 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.5.99.11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.34-5.47-5.95 0-1.32.47-2.39 1.24-3.23-.12-.3-.54-1.53.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.23 0 4.62-2.81 5.64-5.49 5.94.43.37.82 1.1.82 2.22v3.29c0 .32.21.7.82.58A12 12 0 0 0 24 12.5C24 5.87 18.63.5 12 .5Z" />
    </svg>
  )
}

export function Projects() {
  return (
    <section id="proyectos" className="scroll-mt-24 py-20">
      <div className="mx-auto max-w-6xl px-5">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <h2 className="text-[11px] font-medium uppercase tracking-[0.3em] text-muted-foreground">
              Proyectos destacados
            </h2>
            <p className="mt-2 text-2xl font-bold uppercase tracking-tight sm:text-3xl">
              Trabajo Reciente
            </p>
          </div>
          <a
            href="https://github.com/emanuelrz"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-[11px] font-medium uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-foreground"
          >
            GitHub <ArrowUpRight className="size-3.5" />
          </a>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <article
              key={p.title}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:border-foreground/40 hover:shadow-xl"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-secondary">
                <img
                  src={getAssetPath(p.image) || '/placeholder.svg'}
                  alt={`Vista previa del proyecto ${p.title}`}
                  className="h-full w-full object-cover grayscale transition-all duration-500 group-hover:scale-105 group-hover:grayscale-0"
                />
              </div>
              
              <div className="flex flex-1 flex-col justify-between p-6">
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                      {p.category}
                    </span>
                    <span className="text-[10px] text-muted-foreground/80">
                      {p.tags}
                    </span>
                  </div>
                  
                  <h3 className="mt-2 text-xl font-bold tracking-tight">
                    {p.title}
                  </h3>
                  
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                    {p.desc}
                  </p>
                </div>

                <div className="mt-6 flex items-center gap-3 border-t border-border/60 pt-4">
                  {p.demo && (
                    <a
                      href={p.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-md bg-foreground px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.1em] text-background transition-opacity hover:opacity-90"
                    >
                      Demo en Vivo <ArrowUpRight className="size-3.5" />
                    </a>
                  )}
                  {p.github && (
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-md border border-border bg-card px-3 py-1.5 text-xs font-medium uppercase tracking-[0.1em] text-foreground transition-colors hover:bg-secondary"
                    >
                      <GithubIcon className="size-3.5" />
                      Código
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
