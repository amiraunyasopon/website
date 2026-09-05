import SectionHeader from "./section-header";
import Scene from "./scene";

export default function WorkContent() {
  return (
    <div className="flex flex-1 flex-col">
      <div id="projects" className="relative h-78 w-full scroll-mt-8 sm:h-102">
        <Scene />
      </div>
      <header className="w-full pt-8 sm:pt-10">
        <SectionHeader>Work</SectionHeader>
        <p className="mt-6 max-w-sm text-lg leading-7 text-(--page-foreground)">
          A collection of projects, experiments, and things I have built.
        </p>
      </header>
    </div>
  );
}
