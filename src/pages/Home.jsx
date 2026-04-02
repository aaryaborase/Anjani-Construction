import Hero from "../components/Hero";
import Services from "../components/Services";
import Stats from "../components/Stats";
import Projects from "../components/Projects";
import Testimonials from "../components/Testimonials";
import Clients from "../components/Clients";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Stats />
      <Projects />
      <Testimonials />
      <Clients />
    </>
  );
}
