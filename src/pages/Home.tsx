import { Hero } from "../components/organisms/Hero/Hero";
import { FeaturedProjects } from "../components/organisms/FeaturedProjects/FeaturedProjects";
import { About } from "../components/organisms/About/About";

export function Home() {
  return (
    <>
      <Hero firstName="Henrique" lastName="Oliveira" />
      <FeaturedProjects />
      <About />
      <section id="experiencia" style={{ minHeight: '100vh' }}>Experiência</section>
      <section id="stack" style={{ minHeight: '100vh' }}>Stack</section>
      <section id="contato" style={{ minHeight: '100vh' }}>Contato</section>
    </>
  )
}