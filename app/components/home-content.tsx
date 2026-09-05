import SectionHeader from "./section-header";
import Scene from "./scene";
import Introduction from "./introduction"
import { IoLogoGithub, IoLogoLinkedin, IoMailOutline } from "react-icons/io5";
export function HomeHero() {
  return (
    <div className="flex flex-1 flex-col items-center">
      <div id="projects" className="relative h-56 w-full scroll-mt-8 sm:h-60">
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
      </header>
    </div>
  );
}

export function ClubsSection() {
  return (
      <div className="mt-10">
        <SectionHeader size="default">Extracurriculars</SectionHeader>
        <b>Google Developer Group on Campus @ UCI</b>
        <p>2025 — Present</p>
        <p>President — Managing internal operations and events</p>
        <br />
        <b>Cyber @ UCI</b>
        <p>2026 — Present</p>
        <p>Soon™</p>
        <br />
        <b>ICS Student Council</b>
        <p>2025 — Present</p>
        <p>Academic & Alumni Affairs — Mentorship and networking</p>
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
      <div className="mt-5 flex w-fit flex-col gap-3">
        <a
          className="inline-flex items-center gap-2 rounded-md bg-(--page-foreground)/10 px-4 py-2 text-sm text-(--page-foreground) transition-colors hover:bg-[#24292f] hover:text-white"
          href="https://github.com/amiraunyasopon"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IoLogoGithub aria-hidden="true" className="h-4 w-4" />
          <span>GitHub:</span>
          <span className="text-(--contact-accent)">@amiraunyasopon</span>
        </a>
        <a
          className="inline-flex items-center gap-2 rounded-md bg-(--page-foreground)/10 px-4 py-2 text-sm text-(--page-foreground) transition-colors hover:bg-[#0a66c2] hover:text-white"
          href="https://www.linkedin.com/in/amiraunyasopon"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IoLogoLinkedin aria-hidden="true" className="h-4 w-4" />
          <span>LinkedIn:</span>
          <span className="text-(--contact-accent)">/in/amiraunyasopon</span>
        </a>
        <a
          className="inline-flex items-center gap-2 rounded-md bg-(--page-foreground)/10 px-4 py-2 text-sm text-(--page-foreground) transition-colors hover:bg-[#c2410c] hover:text-white"
          href="mailto:amiraunyasopon@gmail.com"
        >
          <IoMailOutline aria-hidden="true" className="h-4 w-4" />
          <span>Email:</span>
          <span className="text-(--contact-accent)">amiraunyasopon@gmail.com</span>
        </a>
      </div>
    </section>
  );
}
