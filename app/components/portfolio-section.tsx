import type { ReactNode } from "react";

type PortfolioSectionProps = {
  id: string;
  title: string;
  children: ReactNode;
  backgroundColor?: string;
};

export default function PortfolioSection({
  id,
  title,
  children,
  backgroundColor = "transparent",
}: PortfolioSectionProps) {
  return (
    <section
      id={id}
      className="portfolio-section scroll-mt-28 px-5 py-10 sm:px-10 sm:py-14"
      style={{ backgroundColor, color: "#202023" }}
    >
      <h2 className="page-foreground mb-8 text-center text-4xl font-black tracking-[-0.04em] sm:text-6xl">
        {title}
      </h2>
      {children}
    </section>
  );
}
