import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { ArrowUpRight, Mail, Phone, MapPin } from 'lucide-react'

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.2.09 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.5.99.11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.34-5.47-5.95 0-1.32.47-2.39 1.24-3.23-.12-.3-.54-1.53.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.23 0 4.62-2.81 5.64-5.49 5.94.43.37.82 1.1.82 2.22v3.29c0 .32.21.7.82.58A12 12 0 0 0 24 12.5C24 5.87 18.63.5 12 .5Z" />
    </svg>
  )
}

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13ZM7.12 20.45H3.55V9h3.57v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" />
    </svg>
  )
}

const contactInfo = [
  { icon: Mail, text: 'emanuelrzj@gmail.com', href: 'mailto:emanuelrzj@gmail.com' },
  { icon: MapPin, text: 'Entre Ríos, Argentina · Disponible remoto', href: undefined },
]

export function Contact() {
  return (
    <footer id="contacto" className="scroll-mt-24 pb-10 pt-10">
      <div className="mx-auto max-w-6xl px-5">
        <div className="relative overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-secondary via-card to-background p-8 lg:p-12">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-center">
            <div>
              <h2 className="text-balance font-sans text-4xl font-extrabold uppercase leading-[0.9] tracking-tight sm:text-5xl">
                Construyamos algo
                <br />
                extraordinario
              </h2>
              <p className="mt-5 max-w-md text-pretty leading-relaxed text-muted-foreground">
                Disponible para oportunidades laborales, proyectos de software y colaboraciones. Conversemos y creemos soluciones de alto impacto.
              </p>
              <a
                href="mailto:emanuelrzj@gmail.com"
                className={cn(
                  buttonVariants({ size: 'lg' }),
                  'mt-8 rounded-none text-xs font-semibold uppercase tracking-[0.12em]',
                )}
              >
                Enviar Mensaje
                <ArrowUpRight className="size-4" />
              </a>
            </div>

            <div className="flex flex-col gap-4">
              {contactInfo.map((c) => {
                const content = (
                  <>
                    <span className="flex size-9 shrink-0 items-center justify-center rounded-md border border-border">
                      <c.icon className="size-4" />
                    </span>
                    <span className="text-sm text-muted-foreground">
                      {c.text}
                    </span>
                  </>
                )
                return c.href ? (
                  <a
                    key={c.text}
                    href={c.href}
                    className="flex items-center gap-3 transition-colors hover:text-foreground [&>span:last-child]:hover:text-foreground"
                  >
                    {content}
                  </a>
                ) : (
                  <div key={c.text} className="flex items-center gap-3">
                    {content}
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row">
          <span className="uppercase tracking-[0.15em]">
            © {new Date().getFullYear()} Emanuel Julian Ramirez · Todos los derechos reservados
          </span>
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/emanuelrz"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="flex size-9 items-center justify-center rounded-md border border-border transition-colors hover:bg-foreground hover:text-background"
            >
              <GithubIcon className="size-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/emanuelramirezdev"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex size-9 items-center justify-center rounded-md border border-border transition-colors hover:bg-foreground hover:text-background"
            >
              <LinkedinIcon className="size-4" />
            </a>
            <a
              href="mailto:emanuelrzj@gmail.com"
              aria-label="Email"
              className="flex size-9 items-center justify-center rounded-md border border-border transition-colors hover:bg-foreground hover:text-background"
            >
              <Mail className="size-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
