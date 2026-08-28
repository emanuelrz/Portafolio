'use client'

import { useState, useEffect } from 'react'
import { ArrowUpRight, X, CheckCircle2, Globe, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react'
import { getAssetPath } from '@/lib/utils'

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.2.09 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.5.99.11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.34-5.47-5.95 0-1.32.47-2.39 1.24-3.23-.12-.3-.54-1.53.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.23 0 4.62-2.81 5.64-5.49 5.94.43.37.82 1.1.82 2.22v3.29c0 .32.21.7.82.58A12 12 0 0 0 24 12.5C24 5.87 18.63.5 12 .5Z" />
    </svg>
  )
}

interface Project {
  title: string
  category: string
  tags: string
  stackList: string[]
  image: string
  images: string[]
  overview: string
  highlights: string[]
  github: string | null
  demo: string | null
}

const projects: Project[] = [
  {
    title: 'KANSO Platform',
    category: 'Full-Stack · SaaS & Gym Management',
    tags: 'React.js · Node.js · APIs',
    stackList: ['React.js', 'Node.js', 'Web APIs', 'Tailwind CSS', 'Chart.js', 'TypeScript'],
    image: '/project_kanso.jpg',
    images: [
      '/project_kanso.jpg',
      '/kanso_login.png',
      '/kanso_profiles.png',
      '/kanso_dashboard.png',
    ],
    overview:
      'Plataforma SaaS integral orientada a la gestión ágil de gimnasios y centros de entrenamiento. Diseñada con un enfoque centrado en la velocidad operativa, resuelve la administración de membresías, control de asistencias, punto de venta (POS) para kiosco y generación de métricas financieras.',
    highlights: [
      'Panel general con métricas de facturación y evolución financiera por períodos.',
      'Administración de socios con control de asistencias y alertas de vencimiento.',
      'Punto de venta (POS) integrado para kiosco y suplementos deportivos.',
      'Autenticación multiperfil (Administración, Recepción, Coach) con control por PIN.',
      'Diseño responsivo optimizado para alta velocidad y uso táctil en mostrador.',
    ],
    github: 'https://github.com/emanuelrz',
    demo: null,
  },
  {
    title: 'Mueblería Hermanos Jota',
    category: 'Frontend & UI · Showroom Digital',
    tags: 'React · Vite · Tailwind CSS',
    stackList: ['React 18', 'Vite', 'Tailwind CSS', 'Lucide Icons', 'Responsive Design'],
    image: '/project_muebleria.png',
    images: ['/project_muebleria.png'],
    overview:
      'Showroom digital interactivo y catálogo de mobiliario artesanal. Cuenta con curaduría de colecciones, cálculo de presupuestos en tiempo real, agendador de visitas a taller y cotizador directo con integración a WhatsApp.',
    highlights: [
      'Catálogo interactivo con filtrado dinámico de mobiliario.',
      'Cotizador de presupuestos en tiempo real según personalización.',
      'Integración directa a WhatsApp para agendar visitas a taller.',
      'Diseño editorial moderno de alta estética y navegación fluida.',
    ],
    github: 'https://github.com/emanuelrz/muebleria-hnosj',
    demo: 'https://emanuelrz.github.io/muebleria-hnosj/',
  },
  {
    title: 'Bolsa de Empleo Municipal',
    category: 'Full-Stack · Gestión IT',
    tags: 'React.js · Node.js · SQL',
    stackList: ['React.js', 'Node.js', 'Express.js', 'SQL / Bases de Datos', 'POO'],
    image: '/project1.png',
    images: ['/project1.png'],
    overview:
      'Plataforma web integral desarrollada para la Municipalidad de San José para centralizar y digitalizar la postulación laboral en la ciudad. Construida bajo arquitectura Cliente/Servidor, programación orientada a objetos (POO) y base de datos relacional.',
    highlights: [
      'Digitalización y centralización del padrón de postulantes laborales.',
      'Módulos CRUD completos para la administración municipal.',
      'Arquitectura Cliente/Servidor con Web APIs RESTful y validaciones de seguridad.',
      'Modelado relacional SQL con consultas estructuradas.',
    ],
    github: 'https://github.com/emanuelrz',
    demo: null,
  },
]

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [activeImageIndex, setActiveImageIndex] = useState(0)

  const handleOpenProject = (project: Project) => {
    setSelectedProject(project)
    setActiveImageIndex(0)
  }

  // Cerrar con tecla Escape y bloquear scroll de fondo
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedProject(null)
    }
    if (selectedProject) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', handleKeyDown)
    } else {
      document.body.style.overflow = 'auto'
    }
    return () => {
      document.body.style.overflow = 'auto'
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [selectedProject])

  return (
    <section id="proyectos" className="scroll-mt-24 py-20">
      <div className="mx-auto max-w-6xl px-5">
        {/* Encabezado */}
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

        {/* Cuadrícula de Proyectos (Tarjetas Minimalistas) */}
        <div className="grid gap-4 md:grid-cols-3">
          {projects.map((p) => (
            <button
              key={p.title}
              type="button"
              onClick={() => handleOpenProject(p)}
              className="group relative flex flex-col overflow-hidden rounded-xl border border-border bg-card text-left transition-all duration-300 hover:border-foreground/40 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-foreground/20"
            >
              <div className="aspect-[4/3] w-full overflow-hidden bg-secondary">
                <img
                  src={getAssetPath(p.image) || '/placeholder.svg'}
                  alt={`Vista previa del proyecto ${p.title}`}
                  className="h-full w-full object-cover grayscale transition-all duration-500 group-hover:scale-105 group-hover:grayscale-0"
                />
              </div>
              <div className="flex w-full items-end justify-between gap-3 p-5">
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
            </button>
          ))}
        </div>
      </div>

      {/* Modal de Detalle de Proyecto */}
      {selectedProject && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-md transition-all duration-300 sm:p-6"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="relative max-h-[92vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-border bg-card p-6 shadow-2xl transition-all sm:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Botón Cerrar */}
            <button
              type="button"
              onClick={() => setSelectedProject(null)}
              aria-label="Cerrar ventana"
              className="absolute right-5 top-5 flex size-9 items-center justify-center rounded-full border border-border bg-secondary text-muted-foreground transition-colors hover:bg-foreground hover:text-background"
            >
              <X className="size-4" />
            </button>

            {/* Cabecera del Modal */}
            <div className="pr-10">
              <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-muted-foreground">
                {selectedProject.category}
              </span>
              <h3 className="mt-1 text-2xl font-bold uppercase tracking-tight sm:text-3xl">
                {selectedProject.title}
              </h3>
            </div>

            {/* Galería de Imágenes del Proyecto */}
            <div className="mt-5 space-y-3">
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl border border-border bg-black/40 flex items-center justify-center shadow-md">
                <img
                  src={
                    getAssetPath(selectedProject.images[activeImageIndex] || selectedProject.image) ||
                    '/placeholder.svg'
                  }
                  alt={`${selectedProject.title} imagen ${activeImageIndex + 1}`}
                  className="h-full w-full object-contain transition-all duration-300"
                />

                {/* Flechas de Navegación si hay más de 1 foto */}
                {selectedProject.images.length > 1 && (
                  <>
                    <button
                      type="button"
                      aria-label="Imagen anterior"
                      onClick={(e) => {
                        e.stopPropagation()
                        setActiveImageIndex((prev) =>
                          prev === 0 ? selectedProject.images.length - 1 : prev - 1,
                        )
                      }}
                      className="absolute left-3 top-1/2 flex size-8 -translate-y-1/2 items-center justify-center rounded-full bg-black/70 text-white shadow-lg backdrop-blur-sm transition-transform hover:scale-110"
                    >
                      <ChevronLeft className="size-4" />
                    </button>
                    <button
                      type="button"
                      aria-label="Siguiente imagen"
                      onClick={(e) => {
                        e.stopPropagation()
                        setActiveImageIndex((prev) =>
                          prev === selectedProject.images.length - 1 ? 0 : prev + 1,
                        )
                      }}
                      className="absolute right-3 top-1/2 flex size-8 -translate-y-1/2 items-center justify-center rounded-full bg-black/70 text-white shadow-lg backdrop-blur-sm transition-transform hover:scale-110"
                    >
                      <ChevronRight className="size-4" />
                    </button>
                  </>
                )}
              </div>

              {/* Miniaturas */}
              {selectedProject.images.length > 1 && (
                <div className="flex gap-2 overflow-x-auto pb-1">
                  {selectedProject.images.map((img, idx) => (
                    <button
                      key={img}
                      type="button"
                      onClick={() => setActiveImageIndex(idx)}
                      className={`relative aspect-[16/10] h-14 shrink-0 overflow-hidden rounded-lg border transition-all ${
                        activeImageIndex === idx
                          ? 'border-foreground ring-2 ring-foreground/20'
                          : 'border-border/60 opacity-60 hover:opacity-100'
                      }`}
                    >
                      <img
                        src={getAssetPath(img) || '/placeholder.svg'}
                        alt={`Miniatura ${idx + 1}`}
                        className="h-full w-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Descripción */}
            <div className="mt-6">
              <h4 className="text-xs font-semibold uppercase tracking-[0.15em] text-foreground">
                Descripción del Proyecto
              </h4>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {selectedProject.overview}
              </p>
            </div>

            {/* Características Clave */}
            <div className="mt-6">
              <h4 className="text-xs font-semibold uppercase tracking-[0.15em] text-foreground">
                Aspectos Destacados
              </h4>
              <ul className="mt-3 space-y-2">
                {selectedProject.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs text-muted-foreground sm:text-sm">
                    <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-foreground" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Stack de Tecnologías */}
            <div className="mt-6">
              <h4 className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground">
                Tecnologías utilizadas
              </h4>
              <div className="mt-2.5 flex flex-wrap gap-2">
                {selectedProject.stackList.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md border border-border bg-secondary px-2.5 py-1 text-xs font-medium text-secondary-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Botones de Acción (Demo y GitHub) */}
            <div className="mt-8 flex flex-wrap items-center gap-3 border-t border-border pt-6">
              {selectedProject.demo && (
                <a
                  href={selectedProject.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-md bg-foreground px-4 py-2.5 text-xs font-semibold uppercase tracking-[0.12em] text-background transition-opacity hover:opacity-90"
                >
                  <Globe className="size-4" />
                  Ver Demo en Vivo
                  <ArrowUpRight className="size-4" />
                </a>
              )}
              {selectedProject.github && (
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-md border border-border bg-secondary px-4 py-2.5 text-xs font-medium uppercase tracking-[0.12em] text-foreground transition-colors hover:bg-card hover:border-foreground/40"
                >
                  <GithubIcon className="size-4" />
                  Código en GitHub
                  <ExternalLink className="size-3.5 text-muted-foreground" />
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
