import Image from "next/image";

type ExperienceCardProps = {
  image: string;
  imageAlt: string;
  role: string;
  organization: string;
  dates: string;
  bullets: string[];
};

export default function ExperienceCard({
  image,
  imageAlt,
  role,
  organization,
  dates,
  bullets,
}: ExperienceCardProps) {
  return (
    <article className="experience-card">
      <div className="experience-card__content">
        <h3 className="page-foreground text-2xl font-black">{role}</h3>
        <p className="page-foreground text-xl font-semibold">{organization}</p>
        <p className="page-muted mt-1">{dates}</p>
        <ul className="page-foreground mt-4 list-disc space-y-3 pl-5 leading-7">
          {bullets.map((bullet) => (
            <li key={bullet}>{bullet}</li>
          ))}
        </ul>
      </div>
      <div className="experience-card__image-frame">
        <Image
          className="experience-card__image"
          src={image}
          alt={imageAlt}
          width={1200}
          height={900}
          sizes="(max-width: 768px) 100vw, 28vw"
        />
      </div>
    </article>
  );
}
