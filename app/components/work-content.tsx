import SectionHeader from "./section-header";
import Scene from "./scene";

export default function WorkContent() {
  return (
    <div className="flex flex-1 flex-col">
      <div id="projects" className="relative h-56 w-full scroll-mt-8 sm:h-60">
        <Scene />
      </div>
      <header className="w-full pt-8 sm:pt-10">
        <SectionHeader size="default">Experience</SectionHeader>
        <b>World Wide Technology</b>
        <p>Software Engineer Intern</p>
        <p>June 2026 — Present</p>
        <p>App development, automation, and data models</p>
        <br />
        <b>Opal</b>
        <p>Software Engineer Intern</p>
        <p>December 2025 — May 2026</p>
        <p>Cloud pipelines and web development</p>
        <br />
        <b>City of Burbank</b>
        <p>Data Intern</p>
        <p>June 2025 — August 2025</p>
        <p>Database management and spreadsheets</p>
        <br />
      </header>
    </div>
  );
}
