import PortfolioSection from "./portfolio-section";
import ContactLinks from "./contact-links";

export default function ContactSection() {
  return (
    <PortfolioSection id="contact" title="Contact" backgroundColor="#8d99ae">
      <ContactLinks large showResume={false} />
      <div className="contact-email-card">
        <span>amiraunyasopon@gmail.com</span>
        <span>asopon@uci.edu</span>
      </div>
    </PortfolioSection>
  );
}
