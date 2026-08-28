import Image from 'next/image'
import { buttonVariants } from '@/components/ui/button'
import { cn, getAssetPath } from '@/lib/utils'
import { ArrowUpRight } from 'lucide-react'

const links = [
  { label: 'Sobre mí', href: '#sobre-mi' },
  { label: 'Proyectos', href: '#proyectos' },
  { label: 'Contacto', href: '#contacto' },
]

export function Navbar() {
  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-6">
        <a href="#" className="flex items-center gap-3 transition-opacity hover:opacity-90" aria-label="Inicio">
          <Image
            src={getAssetPath('/logo.png')}
            alt="EJuRz"
            width={85}
            height={55}
            priority
            className="h-10 w-auto object-contain"
          />
          <span className="hidden text-[11px] font-medium uppercase leading-tight tracking-[0.2em] text-muted-foreground sm:block">
            Emanuel Ramirez
            <br />
            <span className="text-[9px] text-muted-foreground/70">Full-Stack Dev</span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs font-medium uppercase tracking-[0.15em] text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#contacto"
          className={cn(
            buttonVariants(),
            'rounded-full text-xs font-medium uppercase tracking-[0.12em]',
          )}
        >
          Hablemos
          <ArrowUpRight className="size-4" />
        </a>
      </div>
    </header>
  )
}
