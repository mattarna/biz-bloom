import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "B2B Room | Missioni Commerciali Biz Bloom",
  description: "Organizza le tue missioni B2B digitali o in presenza. Incontra partner e distributori qualificati nei mercati di Singapore e del Golfo.",
};

export default function B2BRoomLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
