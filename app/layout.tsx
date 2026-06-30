import type { Metadata } from "next";
import { Jost, Nunito } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "./components/SmoothScroll";

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
  display: "swap",
});

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title:
    "Drive With Nayyer — Women-Only Driving Lessons in Ontario, Canada",
  description:
    "Learn to drive in Ontario, Canada with Nayyer Sultana, MTO Certified Instructor. Women-only G2 and G training in Mississauga, Oakville, Burlington, and Milton. Lessons in English, Urdu, and Hindi.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jost.variable} ${nunito.variable}`}>
      <body>
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
