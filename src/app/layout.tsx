import type { Metadata } from "next";
import { inter } from "./fonts";
import "./globals.css";


export const metadata: Metadata = {
  title: "Guilherme Oliveira - Web & Motion Design",
  description: "UI/UX Designer e Web Designer focado em criar interfaces intuitivas, experiências digitais envolventes e sites funcionais. Explore projetos que unem estética, usabilidade e estratégia.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={"font-sans antialiased"}>
        {children}
      </body>
    </html>
  );
}
