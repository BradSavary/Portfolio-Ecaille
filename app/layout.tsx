import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Eloise Marien - Portfolio",
  description: "Bienvenue sur le portfolio d'Eloise Marien, une designer passionnée spécialisée en UX/UI, design graphique et web design. Découvrez mes projets créatifs et innovants qui allient esthétique et fonctionnalité pour offrir des expériences utilisateur exceptionnelles.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
          {children}
      </body>
    </html>
  );
}