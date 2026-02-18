import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="font-bold text-xl">ConstructiiPro</h1>
        <div className="space-x-6">
          <Link href="/">Acasă</Link>
          <Link href="/servicii">Servicii</Link>
          <Link href="/proiecte">Proiecte</Link>
          <Link href="/despre">Despre</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </div>
    </nav>
  );
}
