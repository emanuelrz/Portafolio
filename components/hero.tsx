import Image from 'next/image'
import { buttonVariants } from '@/components/ui/button'
import { cn, getAssetPath } from '@/lib/utils'
import { ArrowUpRight, Download } from 'lucide-react'

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden pb-16 pt-28">
      <div className="mx-auto max-w-6xl px-5">
        <div className="grid items-center gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Left */}
          <div>
            <p className="mb-6 text-[11px] font-medium uppercase tracking-[0.3em] text-muted-foreground">
              Soluciones que impulsan tu producto
            </p>
            <h1 className="text-balance font-sans text-6xl font-extrabold uppercase leading-[0.85] tracking-tight sm:text-7xl lg:text-8xl">
              Full-Stack
              <br />
              Developer
            </h1>
            <p className="mt-8 max-w-md text-pretty leading-relaxed text-muted-foreground">
              Técnico Universitario en Programación (UTN FRCU) y Especialista en Desarrollo Web Full-Stack (ITBA & Santander). Construyo sistemas robustos, Web APIs y experiencias digitales escalables.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#proyectos"
                className={cn(
                  buttonVariants({ size: 'lg' }),
                  'rounded-none text-xs font-semibold uppercase tracking-[0.12em]',
                )}
              >
                Ver mi trabajo
                <ArrowUpRight className="size-4" />
              </a>
              <a
                href={getAssetPath('/cv_emanuel_ramirez.pdf')}
                download="CV_Emanuel_Julian_Ramirez.pdf"
                className={cn(
                  buttonVariants({ variant: 'outline', size: 'lg' }),
                  'rounded-none border-border bg-transparent text-xs font-semibold uppercase tracking-[0.12em]',
                )}
              >
                Descargar CV
                <Download className="size-4" />
              </a>
            </div>
          </div>

          {/* Right — portrait */}
          <div className="relative">
            <div className="pointer-events-none absolute right-0 top-1/2 aspect-square w-[110%] -translate-y-1/2 rounded-full border border-border/60" />
            <div className="relative mx-auto aspect-[3/4] w-full max-w-sm overflow-hidden rounded-2xl border border-border/80 shadow-2xl">
              <Image
                src={getAssetPath('/profile.jpg')}
                alt="Emanuel Julian Ramirez, Desarrollador Full-Stack"
                fill
                priority
                className="object-cover object-[center_15%] transition-all duration-300"
                sizes="(max-width: 1024px) 100vw, 400px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/15 to-transparent" />
            </div>
            <div className="absolute bottom-4 right-0 text-right">
              <p className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                Disponible para
              </p>
              <p className="font-sans text-2xl font-bold uppercase tracking-tight">
                Nuevos Proyectos
              </p>
              <p className="flex items-center justify-end gap-1 text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                Contacto <ArrowUpRight className="size-3" />
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
