import type { Metadata } from "next";
import "./globals.css";

export function generateMetadata(): Metadata {
  return {
    title: "Amir Aunyasopon",
    description: "Amir's personal website",
    icons: "/mob.png",
  };
}

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className="h-full antialiased"
      style={{ backgroundColor: "#edf2f4", color: "#202023", colorScheme: "light" }}
    >
      <body
        className="flex min-h-full flex-col items-center"
        style={{ backgroundColor: "#edf2f4", color: "#202023" }}
      >
        {children}
      </body>
    </html>
  );
}
