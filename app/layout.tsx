import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cherukuri Yogini | Software Product Engineering",
  description:
    "Portfolio of Cherukuri Yogini — second-year B.Tech Software Product Engineering student at Kalvium building full-stack, real-time and AI-assisted products.",
  keywords: [
    "Cherukuri Yogini",
    "Software Product Engineering",
    "Kalvium",
    "Full Stack Developer",
    "React",
    "Next.js",
    "Node.js",
    "SkillXchange",
    "Portfolio"
  ]
};

export default function RootLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
