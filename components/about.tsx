import {
  Server,
  Database,
  Code2,
  GitBranch,
  ShieldCheck,
  GraduationCap,
  Sparkles,
  MapPin,
} from 'lucide-react'

const capabilities = [
  {
    icon: Server,
    title: 'Backend & Web APIs',
    desc: 'Desarrollo de APIs RESTful modulares, lógica de negocio y arquitectura Cliente/Servidor con Node.js, Express.js y Java (POO).',
  },
  {
    icon: Code2,
    title: 'Frontend Reactivo',
    desc: 'Construcción de interfaces dinámicas, responsivas y de alto rendimiento utilizando React 18, TypeScript y Tailwind CSS.',
  },
  {
    icon: Database,
    title: 'Bases de Datos SQL & NoSQL',
    desc: 'Modelado, consultas y persistencia relacional con PostgreSQL y MySQL, además de bases de datos documentales con MongoDB.',
  },
  {
    icon: ShieldCheck,
    title: 'Arquitectura & Buenas Prácticas',
    desc: 'Aplicación de principios SOLID, código mantenible, control de versiones con Git/GitHub y metodologías ágiles (Scrum).',
  },
]

const tools = [
  'React.js',
  'Node.js',
  'Express.js',
  'MongoDB',
  'TypeScript',
  'JavaScript (ES6+)',
  'Java (POO)',
  'PostgreSQL',
  'MySQL',
  'Tailwind CSS',
  'Docker',
  'Git & GitHub',
  'REST APIs',
]

const credentials = [
  {
    icon: GraduationCap,
    title: 'Técnico Universitario en Programación',
    meta: 'Universidad Tecnológica Nacional (UTN FRCU) · 2024 – 2026',
  },
  {
    icon: GraduationCap,
    title: 'Especialización Web Full-Stack (Stack MERN)',
    meta: 'Santander & Instituto Tecnológico de Buenos Aires (ITBA) · 2026',
  },
]

export function About() {
  return (
    <section id="sobre-mi" className="scroll-mt-24 py-20">
      <div className="mx-auto max-w-6xl px-5">
        
        {/* Encabezado Sobre Mí */}
        <div className="mb-12 max-w-3xl">
          <div className="flex flex-wrap items-center gap-2 text-[11px] font-medium uppercase tracking-[0.3em] text-muted-foreground">
            <span>Sobre Mí</span>
            <span>·</span>
            <span>23 Años</span>
            <span>·</span>
            <span className="flex items-center gap-1"><MapPin className="size-3 text-muted-foreground" /> Entre Ríos, Argentina</span>
          </div>
          <h2 className="mt-3 font-sans text-3xl font-bold uppercase tracking-tight sm:text-4xl">
            Desarrollo con enfoque en código limpio y soluciones reales
          </h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Tengo 23 años y soy <strong>Emanuel Julian Ramirez</strong>, Técnico Universitario en Programación egresado de la <strong>UTN FRCU</strong> y actualmente especializándome en desarrollo Web Full-Stack con el <strong>Stack MERN</strong> en el <strong>ITBA & Santander</strong>. Me apasiona diseñar sistemas eficientes, estructurados bajo buenas prácticas de ingeniería de software y orientados a crear productos digitales confiables y escalables.
          </p>
        </div>

        <div className="grid gap-4 lg:grid-cols-[1.3fr_1fr]">
          {/* Capabilities grid */}
          <div className="grid gap-x-10 gap-y-8 rounded-xl border border-border bg-card p-8 sm:grid-cols-2">
            {capabilities.map((c) => (
              <div key={c.title} className="flex gap-4">
                <c.icon className="mt-0.5 size-5 shrink-0 text-foreground" />
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wide">
                    {c.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                    {c.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Tools + credentials */}
          <div className="flex flex-col gap-4">
            <div className="rounded-xl border border-border bg-card p-6">
              <h3 className="mb-4 text-[11px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
                Stack & Tecnologías
              </h3>
              <div className="flex flex-wrap gap-2">
                {tools.map((t) => (
                  <span
                    key={t}
                    className="rounded-md border border-border bg-secondary px-3 py-1.5 text-xs font-medium text-secondary-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-xl border border-border bg-card p-6">
              <h3 className="mb-4 text-[11px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
                Formación & Certificaciones
              </h3>
              <div className="flex flex-col gap-3">
                {credentials.map((c) => (
                  <div key={c.title} className="flex items-start gap-3">
                    <span className="flex size-9 shrink-0 items-center justify-center rounded-md border border-border">
                      <c.icon className="size-4" />
                    </span>
                    <div>
                      <p className="text-sm font-medium leading-tight">{c.title}</p>
                      <p className="mt-1 text-xs text-muted-foreground">{c.meta}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
