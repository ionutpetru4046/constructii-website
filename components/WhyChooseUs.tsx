import { ShieldCheck, Users, Hammer, CheckCircle2, Wrench, Paintbrush, ThumbsUp } from "lucide-react";
import Link from "next/link";

export default function WhyChooseUs() {
  return (
    <section className="relative py-28 min-h-[75vh] bg-linear-to-br from-blue-50 via-white to-yellow-50 overflow-visible z-10">
      <div
        className="absolute inset-0 z-0 pointer-events-none opacity-10 bg-[url('/pattern-construction.svg')] bg-no-repeat bg-center"
        aria-hidden="true"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        <h2 className="text-5xl md:text-6xl font-black text-center mb-7 tracking-tight text-blue-900 drop-shadow-2xl">
          De ce să ne alegi pe noi?
        </h2>
        <p className="text-center text-xl md:text-2xl text-blue-900/80 max-w-3xl mx-auto mb-16 font-medium">
          Transformăm ideile tale în spații moderne, sigure și durabile – cu echipă certificată, calitate garantată și consultanță la fiecare pas.
        </p>

        {/* Modern Glassmorphism Card Grid */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 mb-10">
          <WhyCard
            icon={<Hammer className="h-9 w-9 text-yellow-400 drop-shadow-xl" />}
            title="Experiență Verificată"
            description={
              <>
                <span className="font-semibold text-blue-900">10+ ani</span> în proiecte premium, finalizate la cele mai exigente standarde.
              </>
            }
          />
          <WhyCard
            icon={<ShieldCheck className="h-9 w-9 text-yellow-400 drop-shadow-xl" />}
            title="Calitate &amp; Garanție"
            description={
              <>
                Materiale <span className="font-semibold text-yellow-700">premium</span>, tehnologii moderne, <span className="font-semibold">garanții extinse</span>.
              </>
            }
          />
          <WhyCard
            icon={<Users className="h-9 w-9 text-yellow-400 drop-shadow-xl" />}
            title="Echipă Certificată"
            description={
              <>
                Constructori, tehnicieni și ingineri <span className="font-semibold">atestați</span> pentru fiecare detaliu.
              </>
            }
          />
          <WhyCard
            icon={<ThumbsUp className="h-9 w-9 text-yellow-400 drop-shadow-xl" />}
            title="Respect &amp; Siguranță"
            description={
              <>
                Siguranța ta contează: comunicare <span className="font-semibold text-blue-800">transparentă</span> &amp; termene respectate.
              </>
            }
          />
        </div>

        <ul className="mt-18 mx-auto max-w-2xl flex flex-col md:flex-row items-center justify-center gap-6 text-blue-900 font-medium text-base md:text-lg">
          <li className="flex items-center gap-2 bg-white/70 backdrop-blur rounded-2xl shadow border border-yellow-100 px-4 py-3 transition hover:shadow-md">
            <Wrench className="h-6 w-6 text-yellow-500" />
            <span className="whitespace-pre-line">
              Gestionăm proiectul de la început până la sfârșit – tu alegi, noi ne ocupăm de tot!
            </span>
          </li>
          <li className="flex items-center gap-2 bg-white/70 backdrop-blur rounded-2xl shadow border border-yellow-100 px-4 py-3 transition hover:shadow-md">
            <Paintbrush className="h-6 w-6 text-yellow-500" />
            <span>
              Design modern &amp; execuție atentă la detalii pentru fiecare spațiu.
            </span>
          </li>
          <li className="flex items-center gap-2 bg-white/70 backdrop-blur rounded-2xl shadow border border-yellow-100 px-4 py-3 transition hover:shadow-md">
            <CheckCircle2 className="h-6 w-6 text-yellow-500" />
            <span>
              Consultanță gratuită: planificăm împreună cea mai bună soluție.
            </span>
          </li>
        </ul>

        <div className="flex justify-center mt-14">
          <Link
            href="/contact"
            className="inline-block px-10 py-5 rounded-full text-white bg-linear-to-r from-yellow-500 via-yellow-400 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 focus-visible:ring-4 focus-visible:ring-yellow-400/60 text-xl font-extrabold shadow-2xl tracking-tight shadow-yellow-200 transition-all duration-250 outline-none"
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
  description: React.ReactNode;
}) {
  return (
    <div className="relative bg-white/80 border border-yellow-100 backdrop-blur-xl p-8 rounded-3xl shadow-2xl flex flex-col items-center hover:-translate-y-2 hover:shadow-yellow-200 hover:shadow-[0_10px_32px_0_rgba(255,221,36,0.07)] transition-all duration-300 group">
      <div className="bg-linear-to-br from-yellow-300 via-yellow-400 to-yellow-500 rounded-full p-4 mb-4 flex items-center justify-center shadow-md border-2 border-yellow-100 group-hover:ring-4 group-hover:ring-yellow-100/80 transition">
        {icon}
      </div>
      <h3 className="text-2xl font-bold mb-2 text-blue-900 text-center drop-shadow">{title}</h3>
      <p className="text-blue-900/70 text-center leading-relaxed">{description}</p>
    </div>
  );
}