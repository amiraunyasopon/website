import type { ReactNode } from "react";
import Navbar from "./navbar";

type PageShellProps = {
  children: ReactNode;
};

export function PageShell({ children }: PageShellProps) {
  return (
    <main
      className="page-background page-foreground mx-auto min-h-screen w-full max-w-none self-center overflow-x-hidden"
      style={{ backgroundColor: "#edf2f4", color: "#202023" }}
    >
      <Navbar />
      <PageContent>
        {children}
      </PageContent>
    </main>
  );
}

export function PageContent({ children }: { children: ReactNode }) {
  return <section className="mx-auto flex min-h-[calc(100vh-88px)] w-full flex-col">{children}</section>;
}
