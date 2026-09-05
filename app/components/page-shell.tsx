import type { ReactNode } from "react";
import Footer from "./footer";
import Navbar from "./navbar";

type PageShellProps = {
  children: ReactNode;
  withFooter?: boolean;
  overflowHidden?: boolean;
};

export function PageShell({
  children,
  withFooter = false,
  overflowHidden = false,
}: PageShellProps) {
  return (
    <main
      className={`mx-auto min-h-screen w-full max-w-lg self-center bg-(--page-background) text-(--page-foreground)${
        overflowHidden ? " overflow-hidden" : ""
      }`}
    >
      <Navbar />
      <PageContent>
        {children}
        {withFooter && <Footer />}
      </PageContent>
    </main>
  );
}

export function PageContent({ children }: { children: ReactNode }) {
  return (
    <section className="mx-auto flex min-h-[calc(100vh-88px)] w-full max-w-md flex-col px-4 pb-12">
      {children}
    </section>
  );
}
