import type { Metadata } from "next";
import "./globals.css";
import { Preloader } from "./components/Preloader";

export const metadata: Metadata = {
  title: "UniBox Studio",
  description: "Unibox Studio is a production house that creates visual stories that captivate and inspire.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Preloader />
        {children}
      </body>
    </html>
  );
}
