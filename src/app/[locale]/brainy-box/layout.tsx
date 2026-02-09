import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Brainy Box | Presenta la tua Idea",
  description: "Il canale protetto per le tue idee di business. Invia i tuoi progetti in modo sicuro e trova i partner giusti per realizzarli.",
};

export default function BrainyBoxLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
