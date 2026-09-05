import SectionHeader from "./section-header";
import Scene from "./scene";

export function HomeHero() {
  return (
    <div className="flex flex-1 flex-col items-center">
      <div id="projects" className="relative h-[19.5rem] w-full scroll-mt-8 sm:h-[25.5rem]">
        <Scene />
      </div>
      <header id="about" className="relative z-10 w-full scroll-mt-8 pt-8 sm:pt-10">
        <h1 className="max-w-md text-5xl font-black leading-[0.9] tracking-[-0.06em] text-[var(--page-foreground)] sm:text-7xl">
          Amir <span className="text-[var(--page-foreground)]">Aunyasopon</span>
        </h1>
        <p className="mt-6 max-w-sm text-lg leading-7 text-[var(--page-foreground)]">
          Full Stack, Business Intelligence, Infrastructure Engineer
        </p>
        <div className="mt-10">
          <SectionHeader size="large">About</SectionHeader>
        </div>
      </header>
    </div>
  );
}

export function ContactSection() {
  return (
    <section id="contact" className="scroll-mt-8 py-10">
      <SectionHeader>Contact</SectionHeader>
    </section>
  );
}
