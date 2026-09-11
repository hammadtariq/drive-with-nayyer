import { Footer } from "../components/Footer";
import { Nav } from "../components/Nav";

export default function BlogLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Nav solid />
      <main>{children}</main>
      <Footer />
    </>
  );
}
