import ContactSection from "./components/contact-section";
import ExperienceSection from "./components/experience-section";
import HomeHero from "./components/home-hero";
import ProjectsSection from "./components/projects-section";
import { PageShell } from "./components/page-shell";

export default function Home() {
  return (
    <PageShell>
      <HomeHero />
      <div>
        <ExperienceSection />
        <ProjectsSection />
      </div>
      <ContactSection />
    </PageShell>
  );
}
