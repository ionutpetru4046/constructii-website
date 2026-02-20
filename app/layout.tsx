import Navbar from "@/components/Navbar";
import "./globals.css";
import Footer from "@/components/Footer";

export const metadata = {
  title: "kadarHouse.ro",
  description: "Servicii profesionale de construcții și renovări.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ro">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
