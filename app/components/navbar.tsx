import Link from "next/link";
import { IoLogoGithub } from "react-icons/io5";
import ColorModeToggle from "./color-mode-toggle";

export default function Navbar() {
  return (
    <nav
      aria-label="Main navigation"
      className="mx-auto grid w-full max-w-2xl grid-cols-[max-content_max-content_max-content_max-content] items-center justify-between gap-2 px-4 py-6"
    >
      <Link
        className="whitespace-nowrap text-center text-m text-(--page-foreground) underline-offset-4 transition-opacity hover:opacity-70 hover:underline"
        href="/"
      >
        Amir Aunyasopon
      </Link>
      <Link className="text-center text-m text-(--page-foreground) underline-offset-4 transition-opacity hover:opacity-70 hover:underline" href="/work">
        Work
      </Link>
      <Link
        className="inline-flex items-center justify-center text-center text-m text-(--page-foreground) underline-offset-4 transition-opacity hover:opacity-70 hover:underline"
        href="https://github.com/amiraunyasopon/website"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className="inline-flex items-center gap-1">
          <IoLogoGithub aria-hidden="true" className="h-3.5 w-3.5" />
          Source
        </span>
      </Link>
      <span className="flex justify-center">
        <ColorModeToggle />
      </span>
    </nav>
  );
}
