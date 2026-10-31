import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";

interface PageIntroProps {
  title: string;
  intro?: string;
  children?: React.ReactNode;
}

/** Standard subpage opening: H1 + intro on the 720px text measure. */
export function PageIntro({ title, intro, children }: PageIntroProps) {
  return (
    <Section>
      <Container width="content">
        <h1 className="text-h1 text-ink">{title}</h1>
        {intro ? (
          <p className="mt-4 text-body-lg text-text-secondary">{intro}</p>
        ) : null}
        {children ? <div className="mt-8">{children}</div> : null}
      </Container>
    </Section>
  );
}
