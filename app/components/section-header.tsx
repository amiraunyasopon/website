type SectionHeaderProps = {
  children: string;
  size?: "default" | "large";
  underline?: boolean;
};

export default function SectionHeader({
  children,
  size = "default",
  underline = true,
}: SectionHeaderProps) {
  return (
    <h2
      className={`${underline ? "border-b border-(--page-muted) pb-3" : ""} font-bold text-(--page-foreground) ${
        size === "large" ? "text-6xl" : "text-2xl"
      }`}
    >
      {children}
    </h2>
  );
}
