import { ContactSection, HomeHero } from "./components/home-content";
import { PageShell } from "./components/page-shell";

export default function Home() {
  return (
    <PageShell withFooter overflowHidden>
      <HomeHero />
      <ContactSection />
    </PageShell>
  );
}
