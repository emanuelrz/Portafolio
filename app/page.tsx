import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { Projects } from '@/components/projects'
import { About } from '@/components/about'
import { TechMarquee } from '@/components/tech-marquee'
import { Contact } from '@/components/contact'

export default function Page() {
  return (
    <main className="relative bg-background text-foreground">
      <Navbar />
      <Hero />
      <Projects />
      <About />
      <TechMarquee />
      <Contact />
    </main>
  )
}
