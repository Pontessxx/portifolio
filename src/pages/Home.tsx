import { Hero } from "../components/organisms/Hero/Hero";
import { FeaturedProjects } from "../components/organisms/FeaturedProjects/FeaturedProjects";

export function Home() {
  return (
    <>
      <Hero firstName="Henrique" lastName="Oliveira" />
      <FeaturedProjects />
      <section id="sobre" style={{ minHeight: '100vh' }}>Sobre</section>
      <section id="experiencia" style={{ minHeight: '100vh' }}>Experiência</section>
      <section id="stack" style={{ minHeight: '100vh' }}>Stack</section>
      <section id="contato" style={{ minHeight: '100vh' }}>Contato</section>
    </>
  )
}