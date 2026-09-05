import SectionHeader from "./section-header";
import Scene from "./scene";
import Introduction from "./introduction"
export function HomeHero() {
  return (
    <div className="flex flex-1 flex-col items-center">
      <div id="projects" className="relative h-78 w-full scroll-mt-8 sm:h-102">
        <Scene />
      </div>
      <Introduction />
      <header id="about" className="relative z-10 w-full scroll-mt-8 pt-8 sm:pt-10">
        <h1 className="max-w-md text-5xl font-black leading-[0.9] tracking-[-0.06em] text-(--page-foreground) sm:text-5xl">
          Amir <span className="text-(--page-foreground)">Aunyasopon</span>
        </h1>
        <p className="mt-6 max-w-sm text-m leading-7 text-(--page-foreground)">
          Full Stack, Business Intelligence, Infrastructure
        </p>
        <div className="mt-10">
          <SectionHeader size="default">About</SectionHeader>
          <p>test</p>
        </div>
      </header>
    </div>
  );
}

export function HobbiesSection() {
  return (
    <section id="hobbies" className="scroll-mt-8 pt-10">
      <SectionHeader>I Love</SectionHeader>
      <p>Photography, Music, Food, Biking, Weightlifting</p>
    </section>
  );
}

export function ContactSection() {
  return (
    <section id="contact" className="scroll-mt-8 pt-10">
      <SectionHeader>Contact</SectionHeader>
      <p>test</p>
    </section>
  );
}
