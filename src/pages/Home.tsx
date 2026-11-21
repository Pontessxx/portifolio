import { Reveal } from "../components/atoms/Reveal/Reveal";
import { Hero } from "../components/organisms/Hero/Hero";
import { FeaturedProjects } from "../components/organisms/FeaturedProjects/FeaturedProjects";
import { About } from "../components/organisms/About/About";
import { Contact } from "../components/organisms/Contact/Contact";
import { Experience } from "../components/organisms/Experience/Experience";

export function Home() {
  return (
    <>
      <Hero firstName="Henrique" lastName="Oliveira" />
      <Reveal>
        <FeaturedProjects />
      </Reveal>
      <About />
      <Experience />
      <Contact />
    </>
  )
}