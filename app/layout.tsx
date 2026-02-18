import Navbar from "@/components/Navbar";
import "./globals.css";

export const metadata = {
  title: "Constructii Pro",
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
      </body>
    </html>
  );
}
