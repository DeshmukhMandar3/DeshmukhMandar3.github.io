import { Hero } from "@/components/hero/hero";
import { About } from "@/components/about/about";
import { Experience } from "@/components/experience/experience";
import { Skills } from "@/components/skills/skills";
import { BackendArchitecture } from "@/components/architecture/backend-architecture";
import { Projects } from "@/components/projects/projects";
import { Timeline } from "@/components/timeline/timeline";
import { Contact } from "@/components/contact/contact";

export default function Home() {
  return (
    <div className="space-y-12 sm:space-y-20 pb-16">
      <Hero />
      <About />
      <Experience />
      <Skills />
      <BackendArchitecture />
      <Projects />
      <Timeline />
      <Contact />
    </div>
  );
}
