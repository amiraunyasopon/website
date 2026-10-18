import PortfolioSection from "./portfolio-section";
import ProjectCard from "./project-card";

export default function ProjectsSection() {
  return (
    <PortfolioSection id="projects" title="Projects" backgroundColor="#edf2f4">
      <div className="space-y-8">
        <ProjectCard
          image="/project-api.png"
          imageAlt="Sports analytics dashboard illustration"
          role="RESTful Sports Analytics API"
          technologies="Java · Spring Boot · AWS (EC2, S3, RDS)"
          bullets={[
            "Developed a Spring Boot JPA module to manage player statistics, implementing CRUD operations, dynamic search, and team or positional-based filtering.",
            "Created and configured service and initialization components using dependency injection and transactional logic.",
          ]}
        />
        <ProjectCard
          image="/project-3d.png"
          imageAlt="Three-dimensional real estate design illustration"
          role="AI-Powered 3D Real Estate Design Platform"
          technologies="TypeScript · Python · C# · React.js · Next.js"
          bullets={[
            "Developed a web-based 3D interior design tool using Unity WebGL and React.js, allowing users to navigate and furnish virtual estates in a first-person environment.",
            "Architected a search pipeline using Gemini 2.5 to convert user images into semantic search queries, scraping 1000+ retail listings via SERP API to source 2D reference assets for 3D model generation.",
            "Integrated Tencent's Hunyuan 3D-2 generative AI model to transform 2D images into 3D assets (500k+ faces).",
          ]}
        />
        <ProjectCard
          image="/project-study-room.png"
          imageAlt="Study room booking interface illustration"
          role="Study Room Booking Application"
          technologies="JavaScript · React.js · Next.js · Tailwind CSS · Material UI"
          bullets={[
            "Built a study room reservation web app using React.js, featuring real-time search and custom filtering.",
            "Integrated Anteater API with debounce search optimization and error-handled data fetching of 100+ study rooms.",
          ]}
        />
      </div>
    </PortfolioSection>
  );
}
