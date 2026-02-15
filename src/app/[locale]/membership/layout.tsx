import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Membership | Biz Bloom",
  description: "Entra nella nostra community internazionale. Scegli tra i piani Silver, Gold e Platinum per accelerare la tua espansione globale.",
};

export default function MembershipLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
