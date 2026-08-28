import { Search, Target, PenTool, Code2, Rocket } from 'lucide-react'

const steps = [
  {
    num: '01',
    icon: Search,
    title: 'Analizar',
    desc: 'Entiendo requisitos, usuarios y el problema a resolver.',
  },
  {
    num: '02',
    icon: Target,
    title: 'Definir',
    desc: 'Convierto la investigación en un plan técnico claro.',
  },
  {
    num: '03',
    icon: PenTool,
    title: 'Diseñar',
    desc: 'Modelo la arquitectura, datos y contratos de API.',
  },
  {
    num: '04',
    icon: Code2,
    title: 'Desarrollar',
    desc: 'Construyo código limpio, probado y escalable.',
  },
  {
    num: '05',
    icon: Rocket,
    title: 'Desplegar',
    desc: 'Automatizo pruebas y lanzo con CI/CD.',
  },
]

export function TechMarquee() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-6xl px-5">
        <h2 className="mb-10 text-[11px] font-medium uppercase tracking-[0.3em] text-muted-foreground">
          Mi proceso de desarrollo
        </h2>

        <div className="grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-5">
          {steps.map((s) => (
            <div key={s.num} className="flex flex-col gap-5 bg-card p-6">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-muted-foreground">
                  {s.num}
                </span>
                <s.icon className="size-4 text-muted-foreground" />
              </div>
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wide">
                  {s.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                  {s.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
