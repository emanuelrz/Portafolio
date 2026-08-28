import { ArrowUpRight } from 'lucide-react'
import { getAssetPath } from '@/lib/utils'

const projects = [
  {
    title: 'KANSO Platform',
    category: 'Full-Stack · SaaS',
    tags: 'React.js · Node.js · APIs',
    image: '/project_kanso.jpg',
    href: 'https://github.com/emanuelrz',
  },
  {
    title: 'Mueblería Hermanos Jota',
    category: 'Frontend · Showroom',
    tags: 'React · Vite · Tailwind CSS',
    image: '/project_muebleria.png',
    href: 'https://emanuelrz.github.io/muebleria-hnosj/',
  },
  {
    title: 'Bolsa de Empleo Municipal',
    category: 'Full-Stack · Gestión IT',
    tags: 'React.js · Node.js · SQL',
    image: '/project1.png',
    href: 'https://github.com/emanuelrz',
  },
]

export function Projects() {
  return (
    <section id="proyectos" className="scroll-mt-24 py-20">
      <div className="mx-auto max-w-6xl px-5">
        <div className="mb-8 flex items-end justify-between">
          <h2 className="text-[11px] font-medium uppercase tracking-[0.3em] text-muted-foreground">
            Proyectos destacados
          </h2>
          <a
            href="https://github.com/emanuelrz"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-[11px] font-medium uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-foreground"
          >
            Ver todos <ArrowUpRight className="size-3.5" />
          </a>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {projects.map((p) => (
            <a
              key={p.title}
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex flex-col overflow-hidden rounded-xl border border-border bg-card transition-all duration-300 hover:border-foreground/40 hover:shadow-lg"
            >
              <div className="aspect-[4/3] overflow-hidden bg-secondary">
                <img
                  src={getAssetPath(p.image) || '/placeholder.svg'}
                  alt={`Vista previa del proyecto ${p.title}`}
                  className="h-full w-full object-cover grayscale transition-all duration-500 group-hover:scale-105 group-hover:grayscale-0"
                />
              </div>
              <div className="flex items-end justify-between gap-3 p-5">
                <div>
                  <h3 className="text-lg font-semibold leading-tight text-foreground">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-[11px] uppercase tracking-[0.15em] text-muted-foreground">
                    {p.category}
                  </p>
                  <p className="mt-0.5 text-[11px] text-muted-foreground/70">
                    {p.tags}
                  </p>
                </div>
                <span className="flex size-9 shrink-0 items-center justify-center rounded-full border border-border transition-colors group-hover:bg-foreground group-hover:text-background">
                  <ArrowUpRight className="size-4" />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
