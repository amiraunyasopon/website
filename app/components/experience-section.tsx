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
            "Added filtering capability to a Java Spring Boot API, enabling profit and loss viewing across 5 regional segments.",
            "Engineered a React.js and TypeScript dashboard giving analysts and PMs a web UI for Power Automate flows.",
            "Built a management dashboard integrating Claude-based scoring to reduce duplicate work across 10,000+ projects.",
            "Created a RAG chatbot with Azure OpenAI that unifies documentation across 3 teams, saving document searching time.",
          ]}
        />
        <ExperienceCard
          image="/opal-logo.png"
          imageAlt="Opal logo"
          role="Software Engineer Intern"
          organization="Opal"
          dates="December 2025 — May 2026"
          bullets={[
            "Architected AWS Lambda pipelines that store 300+ profiles in DynamoDB, replacing manual data entry.",
            "Streamlined Python REST API endpoints handling Slack webhooks, processing 150+ daily requests.",
            "Delivered a React.js mentorship matching dashboard serving 30+ SWE++ students at Santa Clara University.",
          ]}
        />
      </div>
    </PortfolioSection>
  );
}
