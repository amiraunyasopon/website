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
            "Enhanced an internal Java Spring Boot financial reporting API by adding a new filtering parameter, enabling VPs to drill into regional profit & loss reports to individual business units for more granular performance visibility.",
            "Built a Project Management Hub integrating Smartsheet with Power Automate via webhooks, reducing duplicated work through Claude-driven similarity scoring across a supported scale of 10,000+ organizational projects.",
            "Created a RAG-based chatbot using Azure OpenAI to unify documentation and project context across 3 teams, improving the understanding of cross-team dependencies and reducing time spent manually locating information.",
          ]}
        />
        <ExperienceCard
          image="/opal-logo.png"
          imageAlt="Opal logo"
          role="Software Engineer Intern"
          organization="Opal"
          dates="December 2025 — May 2026"
          bullets={[
            "Built data pipelines using AWS Lambda to process and store 300+ candidate profiles in DynamoDB, reducing mentorship matching cycle time from 7+ days to minutes.",
            "Streamlined RESTful API endpoints using Python to handle Slack webhook events and real-time user interactions, processing 150+ requests daily with 99.9% uptime.",
            "Designed and implemented a mentorship matching dashboard using React.js and Tailwind CSS, improving the experience for 30+ SWE++ students at Santa Clara University.",
          ]}
        />
      </div>
    </PortfolioSection>
  );
}
