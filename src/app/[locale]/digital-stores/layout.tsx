import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Digital Stores | Biz Bloom",
  description: "La tua vetrina premium per i mercati esteri. Landing page professionali per presentare la tua azienda a partner e investitori internazionali.",
};

export default function DigitalStoresLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
