import Image from "next/image";

type ProjectCardProps = {
  image: string;
  imageAlt: string;
  role: string;
  technologies: string;
  bullets: string[];
};

export default function ProjectCard({
  image,
  imageAlt,
  role,
  technologies,
  bullets,
}: ProjectCardProps) {
  return (
    <article className="project-card">
      <div className="project-card__image-frame">
        <Image
          src={image}
          alt={imageAlt}
          width={1600}
          height={800}
          className="project-card__image"
          sizes="(max-width: 768px) 100vw, 768px"
        />
      </div>
      <div className="project-card__content">
        <div>
          <h3 className="page-foreground text-2xl font-black leading-tight">{role}</h3>
          <p className="page-muted mt-2 text-sm italic">{technologies}</p>
        </div>
        <ul className="page-foreground list-disc space-y-3 pl-5 text-base leading-7">
          {bullets.map((bullet) => (
            <li key={bullet}>{bullet}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}
