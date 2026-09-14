import { StatsGrid } from "@/components/sections/StatsGrid";
import { Container } from "@/components/ui/Container";

export function ClientStats() {
  return (
    <section className="bg-surface py-16 lg:py-24">
      <Container>
        <StatsGrid gapClass="gap-12" />
      </Container>
    </section>
  );
}
