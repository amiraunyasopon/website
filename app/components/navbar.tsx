import { IoLogoGithub } from "react-icons/io5";

export default function Navbar() {
  return (
    <nav
      aria-label="Main navigation"
      className="site-nav sticky top-0 z-20 mx-auto flex w-full flex-wrap items-center justify-between gap-x-4 gap-y-3 px-4 py-4 sm:py-6"
    >
      <a
        className="page-foreground whitespace-nowrap text-xl font-bold underline-offset-4 transition-opacity hover:opacity-70 hover:underline"
        href="#home"
      >
        Amir
      </a>
      <div className="page-foreground flex flex-wrap items-center justify-end gap-x-3 gap-y-2 text-lg sm:gap-x-4">
        <a className="underline-offset-4 transition-opacity hover:opacity-70 hover:underline" href="#experience">
          Experience
        </a>
        <a className="underline-offset-4 transition-opacity hover:opacity-70 hover:underline" href="#projects">
          Projects
        </a>
        <a className="underline-offset-4 transition-opacity hover:opacity-70 hover:underline" href="#contact">
          Contact
        </a>
        <a
          className="inline-flex items-center gap-1 underline-offset-4 transition-opacity hover:opacity-70 hover:underline"
          href="https://github.com/amiraunyasopon/website"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IoLogoGithub aria-hidden="true" className="h-3.5 w-3.5" />
          Source
        </a>
      </div>
    </nav>
  );
}
