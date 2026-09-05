import WorkContent from "../components/work-content";
import { PageShell } from "../components/page-shell";

export default function WorkPage() {
  return (
    <PageShell withFooter>
      <WorkContent />
    </PageShell>
  );
}
