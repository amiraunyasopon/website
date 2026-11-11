import ExperienceCard from "./experience-card";
import PortfolioSection from "./portfolio-section";

export default function ExperienceSection() {
  return (
    <PortfolioSection id="experience" title="Experience" backgroundColor="#8d99ae">
      <div className="space-y-10">
        <ExperienceCard
          image="/world-wide-technology-logo.png"
          imageAlt="World Wide Technology logo"
          role="Software Engineer Intern"
          organization="World Wide Technology"
          dates="June 2026 — Present"
          bullets={[
            "Added filtering capability to a Java Spring Boot API, supporting profit KPIs across 5 regions.",
            "Built a management dashboard integrating Claude API, reducing duplicate work between departments.",
            "Shipped a TypeScript dashboard giving 10+ analysts a web UI for Power Automate flows.",
            "Created a RAG chatbot with Azure OpenAI that unifies documentation across 3 teams.",
          ]}
        />
        <ExperienceCard
          image="/opal-logo.png"
          imageAlt="Opal logo"
          role="Software Engineer Intern"
          organization="Opal"
          dates="December 2025 — May 2026"
          bullets={[
            "Architected AWS Lambda pipelines storing 300+ profiles in DynamoDB, eliminating manual data entry.",
            "Streamlined Python REST API endpoints handling Slack webhooks, processing 150+ daily requests.",
            "Delivered a TypeScript mentorship app serving 30+ SWE++ students at Santa Clara University.",
          ]}
        />
      </div>
    </PortfolioSection>
  );
}
