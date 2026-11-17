import PortfolioSection from "./portfolio-section";
import ProjectCard from "./project-card";

export default function ProjectsSection() {
  return (
    <PortfolioSection id="projects" title="Projects" backgroundColor="#edf2f4">
      <div className="space-y-8">
        <ProjectCard
          image="/project-chat.png"
          imageAlt="Concurrent chat server architecture illustration"
          role="Concurrent Chat Server"
          technologies="Go"
          bullets={[
            "Built a concurrent multi-room chat server in Go supporting TCP and browser-based WebSocket clients",
            "Designed an custom application layer protocol with TLS encryption, idle timeouts, and graceful shutdown",
          ]}
        />
        <ProjectCard
          image="/project-3d.png"
          imageAlt="Three-dimensional real estate design illustration"
          role="AI Virtual Home Staging Platform"
          technologies="Python · C# · TypeScript · React.js"
          bullets={[
            "Developed a full stack web application to tour and furnish virtual homes in a first-person 3D environment",
            "Architected a multi-stage Gemini 2.5 pipeline turning images into search queries, sourcing listings via SERP API",
            "Integrated Tencent’s Hunyuan 3D-2 generative AI model to transform 2D images into textured 3D assets",
          ]}
        />
        <ProjectCard
          image="/project-api.png"
          imageAlt="Sports analytics dashboard illustration"
          role="RESTful Sports Analytics API"
          technologies="Java · Spring Boot"
          bullets={[
            "Created a Spring Boot JPA module for player statistics with CRUD operations and dynamic filtering",
            "Structured backend services with dependency injection and transactional logic, ensuring relational data integrity",
          ]}
        />
        <ProjectCard
          image="/golden-hour-finder.png"
          imageAlt="Golden Hour Finder showing golden and blue hour times"
          role="Golden Hour Chrome Extension"
          technologies="JavaScript"
          bullets={[
            "Launched a Chrome browser extension that parses Google Maps URLs to display golden and blue hour times",
            "Integrated Chrome Tabs, Storage, and Geolocation APIs to support Google Maps and device-based locations",
          ]}
        />
      </div>
    </PortfolioSection>
  );
}
