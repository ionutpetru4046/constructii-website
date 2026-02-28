import { ShieldCheck, Users, Hammer, CheckCircle2, Wrench, Paintbrush, ThumbsUp } from "lucide-react";
import Link from "next/link";

export default function WhyChooseUs() {
  return (
    <section className="relative py-24 bg-linear-to-br from-gray-100 to-white overflow-visible z-10">
      <div className="absolute inset-0 z-0 pointer-events-none opacity-10 bg-[url('/pattern-construction.svg')] bg-no-repeat bg-center" />
      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-6 tracking-tight text-gray-900 drop-shadow">
          De ce să ne alegi pe noi pentru construcții și renovări?
        </h2>
        <p className="text-center text-lg text-gray-700 max-w-2xl mx-auto mb-12">
          Transformăm ideile tale în spații moderne, sigure și durabile – cu echipă certificată, calitate garantată și consultanță la fiecare pas.
        </p>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <WhyCard
            icon={<Hammer className="h-8 w-8 text-yellow-500" />}
            title="Experiență Verificată"
            description="Peste 10 ani în proiecte de construcții, renovări, amenajări și instalații, finalizate la cele mai exigente standarde."
          />
          <WhyCard
            icon={<ShieldCheck className="h-8 w-8 text-yellow-500" />}
            title="Calitate & Garanție"
            description="Materiale premium, tehnologii moderne și garanții extinse la toate lucrările executate. Ne asumăm fiecare proiect."
          />
          <WhyCard
            icon={<Users className="h-8 w-8 text-yellow-500" />}
            title="Echipă Certificată"
            description="Constructori, tehnicieni și ingineri atestați care lucrează eficient, oferind consultanță gratuită și soluții personalizate din prima zi."
          />
          <WhyCard
            icon={<ThumbsUp className="h-8 w-8 text-yellow-500" />}
            title="Respect & Siguranță"
            description="Respectăm termenele, bugetul, și comunicăm transparent. Siguranța și mulțumirea ta sunt prioritare, mereu."
          />
        </div>
        <ul className="mt-16 mx-auto max-w-xl flex flex-col md:flex-row items-center justify-center gap-6 text-gray-700 text-base">
          <li className="flex items-center gap-2">
            <Wrench className="h-6 w-6 text-yellow-600" />
            Gestionăm proiectul de la A la Z – tu alegi, noi ne ocupăm de tot!
          </li>
          <li className="flex items-center gap-2">
            <Paintbrush className="h-6 w-6 text-yellow-600" />
            Design modern & execuție atentă la detalii, pentru fiecare spațiu.
          </li>
          <li className="flex items-center gap-2">
            <CheckCircle2 className="h-6 w-6 text-yellow-600" />
            Consultanță gratuită: planificăm împreună cea mai bună soluție.
          </li>
        </ul>
        <div className="flex justify-center mt-10">
          <Link
            href="/contact"
            className="px-8 py-4 rounded-full text-white bg-linear-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-lg font-bold shadow-xl transition duration-200"
          >
            Cere o ofertă personalizată
          </Link>
        </div>
      </div>
    </section>
  );
}

function WhyCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="bg-white border border-gray-100 p-8 rounded-2xl shadow-lg flex flex-col items-center hover:-translate-y-1.5 hover:shadow-xl transition duration-300">
      <div className="bg-yellow-100 rounded-full p-4 mb-4 flex items-center justify-center">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3 text-gray-900 text-center">{title}</h3>
      <p className="text-gray-600 text-center">{description}</p>
    </div>
  );
}