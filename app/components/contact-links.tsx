import { IoLogoGithub, IoLogoLinkedin, IoMailOutline } from "react-icons/io5";

type ContactLinksProps = {
  large?: boolean;
  showResume?: boolean;
};

export default function ContactLinks({ large = false, showResume = true }: ContactLinksProps) {
  const sizeClass = large ? "px-6 py-4 text-base" : "px-4 py-2 text-sm";
  const iconClass = large ? "h-5 w-5" : "h-4 w-4";
  const colorClass = large ? "contact-button--light" : "";

  return (
    <div className={`flex flex-wrap gap-3 ${large ? "mt-8 justify-center" : ""}`}>
      <a className={`contact-button ${colorClass} inline-flex items-center gap-2 rounded-md ${sizeClass} transition-colors hover:bg-[#24292f] hover:text-white`} href="https://github.com/amiraunyasopon" target="_blank" rel="noopener noreferrer">
        <IoLogoGithub aria-hidden="true" className={iconClass} /> GitHub
      </a>
      <a className={`contact-button ${colorClass} inline-flex items-center gap-2 rounded-md ${sizeClass} transition-colors hover:bg-[#0a66c2] hover:text-white`} href="https://www.linkedin.com/in/amiraunyasopon" target="_blank" rel="noopener noreferrer">
        <IoLogoLinkedin aria-hidden="true" className={iconClass} /> LinkedIn
      </a>
      <a className={`contact-button ${colorClass} inline-flex items-center gap-2 rounded-md ${sizeClass} transition-colors hover:bg-[#c2410c] hover:text-white`} href="mailto:amiraunyasopon@gmail.com">
        <IoMailOutline aria-hidden="true" className={iconClass} /> Email
      </a>
      {showResume && (
        <a className={`contact-button ${colorClass} inline-flex items-center rounded-md ${sizeClass} transition-colors`} href="/Amir_Aunyasopon_Resume.pdf" target="_blank" rel="noopener noreferrer">
          Resume PDF
        </a>
      )}
    </div>
  );
}
