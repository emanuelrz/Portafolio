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

function WhatsappIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.23 8.23 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.19 8.19 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24m4.52 11.66c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.02-1.24-.75-.67-1.25-1.49-1.4-1.74-.14-.25-.02-.39.11-.51.11-.11.25-.29.37-.44.13-.14.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.35-.77-1.85-.2-.49-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1s.9 2.44 1.03 2.61c.13.17 1.77 2.7 4.29 3.79.6.26 1.07.41 1.44.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.06-.1-.23-.17-.48-.29" />
    </svg>
  )
}

const contactInfo = [
  { icon: Mail, text: 'emanuelrzj@gmail.com', href: 'mailto:emanuelrzj@gmail.com' },
  { icon: WhatsappIcon, text: 'WhatsApp · Mensaje directo', href: 'https://wa.me/543447402877?text=Hola%20Emanuel,%20vi%20tu%20portafolio%20y%20me%20gustar%C3%ADa%20contactarte' },
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
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href="mailto:emanuelrzj@gmail.com"
                  className={cn(
                    buttonVariants({ size: 'lg' }),
                    'rounded-none text-xs font-semibold uppercase tracking-[0.12em]',
                  )}
                >
                  Enviar Email
                  <ArrowUpRight className="size-4" />
                </a>
                <a
                  href="https://wa.me/543447402877?text=Hola%20Emanuel,%20vi%20tu%20portafolio%20y%20me%20gustar%C3%ADa%20contactarte"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    buttonVariants({ variant: 'outline', size: 'lg' }),
                    'rounded-none border-border bg-transparent text-xs font-semibold uppercase tracking-[0.12em] text-foreground hover:bg-secondary',
                  )}
                >
                  <WhatsappIcon className="size-4 text-emerald-400" />
                  WhatsApp
                </a>
              </div>
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
                    target={c.href.startsWith('http') ? '_blank' : undefined}
                    rel={c.href.startsWith('http') ? 'noopener noreferrer' : undefined}
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
              href="https://wa.me/543447402877?text=Hola%20Emanuel,%20vi%20tu%20portafolio%20y%20me%20gustar%C3%ADa%20contactarte"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="flex size-9 items-center justify-center rounded-md border border-border transition-colors hover:bg-foreground hover:text-background"
            >
              <WhatsappIcon className="size-4" />
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
