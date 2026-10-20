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
            "Developed a Spring Boot JPA module for player stats with CRUD operations, dynamic search, and filtering.",
            "Created and configured service and initialization components using dependency injection and transactional logic.",
          ]}
        />
        <ProjectCard
          image="/project-3d.png"
          imageAlt="Three-dimensional real estate design illustration"
          role="AI-Powered 3D Real Estate Design Platform"
          technologies="TypeScript · Python · C# · React.js · Next.js"
          bullets={[
            "Developed a Unity WebGL and React.js tool to tour and furnish virtual homes in a first-person 3D environment.",
            "Architected a Gemini 2.5 pipeline turning images into search queries, sourcing 1000+ listings via SERP API.",
            "Integrated Tencent's Hunyuan 3D-2 generative AI model to transform 2D images into 3D assets (500k+ faces).",
          ]}
        />
        <ProjectCard
          image="/golden-hour-finder.png"
          imageAlt="Golden Hour Finder showing golden and blue hour times"
          role="Golden Hour Finder"
          technologies="JavaScript · Chrome Extension (Manifest V3) · esbuild"
          bullets={[
            "Launched a Manifest V3 Chrome extension that parses Google Maps URLs to show golden and blue hour times.",
            "Integrated Chrome Tabs, Storage, and Geolocation APIs to support both Google Maps and device-based locations.",
          ]}
        />
        <ProjectCard
          image="/project-study-room.png"
          imageAlt="Study room booking interface illustration"
          role="Study Room Booking Application"
          technologies="JavaScript · React.js · Next.js · Tailwind CSS · Material UI"
          bullets={[
            "Created a study room reservation web app using React.js, featuring real-time search and custom filtering.",
            "Optimized Anteater API integration with debounced search and error-handled data fetching of 100+ study rooms.",
          ]}
        />
      </div>
    </PortfolioSection>
  );
}
