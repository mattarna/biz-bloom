import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "The Blue Room | Exclusive Business Club",
  description: "Entra nel cuore dell'ecosistema Biz Bloom. Un club esclusivo per networking di alto livello tra imprenditori e investitori internazionali.",
};

export default function BlueRoomLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
