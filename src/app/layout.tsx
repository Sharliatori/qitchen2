import type { Metadata } from "next";
import { Forum } from "next/font/google";
import "./globals.css";
import ClientBody from "./ClientBody";

const forum = Forum({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-forum",
});

export const metadata: Metadata = {
  title: "Qitchen - Sushi Restaurant",
  description: "Sushi artistry redefined. Indulge in the finest sushi, expertly curated to elevate your dining experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${forum.variable}`}>
      <ClientBody>
        {children}
      </ClientBody>
    </html>
  );
}
