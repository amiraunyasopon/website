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
            "Added filtering to a Java Spring Boot API, supporting profit analytics across 5 regions and 40,000+ records",
            "Shipped a React and TypeScript dashboard providing 10+ analysts with user interface for Power Automate flows",
            "Built a management dashboard integrating Claude API to analyze 500+ projects and flag overlap across teams",
            "Created a RAG chatbot with Azure OpenAI, adopted by 3 teams and handling 2,000+ queries to date",
          ]}
        />
        <ExperienceCard
          image="/opal-logo.png"
          imageAlt="Opal logo"
          role="Software Engineer Intern"
          organization="Opal"
          dates="December 2025 — May 2026"
          bullets={[
            "Architected AWS Lambda pipelines storing 300+ profiles in DynamoDB, eliminating manual data entry",
            "Streamlined Python REST API endpoints handling Slack webhooks, processing 150+ daily requests",
            "Delivered a React and TypeScript mentorship app serving 30+ SWE++ students at Santa Clara University",
          ]}
        />
      </div>
    </PortfolioSection>
  );
}
