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
  title: "Driving With Nayyer — Women-Only Driving Lessons in Mississauga",
  description:
    "Learn to drive with Nayyer Sultana, MTO Certified Instructor. Women-only G2 and G training in Mississauga. Lessons in English, Urdu, and Hindi. Pickup and drop-off available.",
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
