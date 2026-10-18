import ContactLinks from "./contact-links";
import ProfilePhoto from "./profile-photo";

export default function HomeHero() {
  return (
    <header id="home" className="home-hero scroll-mt-28">
      <div className="home-hero__grid grid items-center gap-10 md:grid-cols-[minmax(0,1.1fr)_minmax(20rem,0.9fr)] md:gap-16">
        <div className="home-hero__intro">
          <h1 className="page-foreground max-w-3xl text-5xl font-black leading-[0.95] tracking-[-0.06em] sm:text-7xl">
            Amir Aunyasopon
          </h1>
          <p className="page-foreground mt-7 max-w-2xl text-xl leading-8">
            Computer Science @ UC Irvine
          </p>
          <div className="mt-8">
            <ContactLinks />
          </div>
          <a className="page-foreground mt-6 inline-flex text-sm font-bold underline underline-offset-4 transition-opacity hover:opacity-70" href="#experience">
            View my experience
          </a>
        </div>
        <div className="home-hero__photo">
          <ProfilePhoto />
        </div>
      </div>
    </header>
  );
}
