import { Hero } from "../components/organisms/Hero/Hero";
import { FeaturedProjects } from "../components/organisms/FeaturedProjects/FeaturedProjects";
import { About } from "../components/organisms/About/About";
import { Experience } from "../components/organisms/Experience/Experience";

export function Home() {
  return (
    <>
      <Hero firstName="Henrique" lastName="Oliveira" />
      <FeaturedProjects />
      <About />
      <Experience />
      <section id="stack" style={{ minHeight: '100vh' }}>Stack</section>
      <section id="contato" style={{ minHeight: '100vh' }}>Contato</section>
    </>
  )
}