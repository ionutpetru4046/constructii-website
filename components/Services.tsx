import { Hammer, Wrench, Building2, Paintbrush, Factory, Users, ShieldCheck, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export default function Services() {
  return (
    <section className="relative py-24 bg-gradient-to-br from-gray-100 to-white overflow-visible z-10">
      <div className="absolute inset-0 pointer-events-none opacity-10 bg-[url('/pattern-construction.svg')] bg-no-repeat bg-center" aria-hidden="true" />
      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-5 tracking-tight text-gray-900 drop-shadow">
          Expertiză &amp; Servicii Complete în Construcții
        </h2>
        <p className="text-center text-lg text-gray-700 max-w-2xl mx-auto mb-12">
          Serviciile noastre acoperă tot procesul construcției, de la consultanță inițială la execuție finisată și mentenanță, cu garanția profesionalismului și a calității superioare pentru fiecare proiect.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <ServiceCard
            icon={<Building2 size={48} />}
            title="Construcții Generale"
            description="Realizăm case, clădiri și spații comerciale – de la fundație la predare la cheie. Asigurăm management complet de șantier și materiale premium."
            items={[
              "Case la roșu sau la cheie",
              "Structuri beton / zidărie / metal",
              "Birouri & spații comerciale",
              "Construcții industriale"
            ]}
          />
          <ServiceCard
            icon={<Hammer size={48} />}
            title="Renovări & Reabilitări"
            description="Revitalizăm apartamente, case și spații comerciale. Modernizăm, consolidăm și îmbunătățim eficiența energetică a fiecărui spațiu."
            items={[
              "Renovare completă interior/exterior",
              "Refaceri pereți & pardoseli",
              "Termoizolații & hidroizolații",
              "Consolidări structuri vechi"
            ]}
          />
          <ServiceCard
            icon={<Paintbrush size={48} />}
            title="Amenajări Interioare"
            description="Design contemporan, personalizat pe gustul tău. Ne ocupăm de finisaje, compartimentări și decor, până la cel mai mic detaliu."
            items={[
              "Montaj gresie/ faianță/ parchet",
              "Tencuieli, zugrăveli, tapet",
              "Plafonaj & compartimentări gips-carton",
              "Mobilare și decorare interioară"
            ]}
          />
          <ServiceCard
            icon={<Wrench size={48} />}
            title="Instalații & Utilități"
            description="Instalăm sisteme moderne electrice, sanitare și termice. Eficiență, siguranță și soluții complete pentru orice tip de spațiu."
            items={[
              "Instalații electrice & smart",
              "Rețele sanitare și de încălzire",
              "Climatizare, ventilație, HVAC",
              "Automatizări rezidențiale"
            ]}
          />
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <FeatureCard
            icon={<Factory size={36} />}
            title="Proiectare & Consultanță"
            description="Planificare atentă și soluții tehnice inovatoare. Asigurăm consultanță pe tot parcursul proiectului, optimizăm costurile și resursele."
          />
          <FeatureCard
            icon={<Users size={36} />}
            title="Echipă Certificată"
            description="Constructori, tehnicieni și ingineri atestați, cu experiență vastă și profesionalism garantat, dedicați proiectului tău."
          />
          <FeatureCard
            icon={<ShieldCheck size={36} />}
            title="Calitate & Garanție"
            description="Toate lucrările sunt garantate, folosim materiale premium și tehnologii moderne pentru durabilitate și siguranță."
          />
        </div>
        
        <div className="mt-14 max-w-2xl mx-auto flex flex-col items-center text-center">
          <h3 className="text-2xl font-bold mb-3 text-gray-900">Avantajele colaborării cu noi</h3>
          <ul className="space-y-3 inline-block text-gray-700">
            <li className="flex items-center gap-2">
              <Hammer className="h-5 w-5 text-yellow-600" /> Respectăm termenele, planul și bugetul tău
            </li>
            <li className="flex items-center gap-2">
              <ShieldCheck className="h-5 w-5 text-yellow-600" /> Oferim garanție extinsă și suport post-livrare
            </li>
            <li className="flex items-center gap-2">
              <Users className="h-5 w-5 text-yellow-600" /> Consultanță gratuită la fiecare etapă
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-yellow-600" /> Focus pe siguranță, sustenabilitate și inovație
            </li>
          </ul>
          <Link
            href="/contact"
            className="mt-8 px-8 py-3 rounded-full text-white bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-lg font-bold shadow-lg transition duration-200"
          >
            Cere o ofertă personalizată
          </Link>
        </div>
      </div>
    </section>
  );
}

function ServiceCard({
  icon,
  title,
  description,
  items
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  items: string[];
}) {
  return (
    <div className="bg-white/95 backdrop-blur-md border border-gray-100 shadow-lg p-8 rounded-2xl flex flex-col hover:-translate-y-1.5 hover:shadow-xl transition duration-300 group relative">
      <div className="bg-yellow-100 text-yellow-600 rounded-full p-4 mb-4 w-fit mx-auto flex items-center justify-center group-hover:scale-110 transition">
        {icon}
      </div>
      <h3 className="text-lg font-bold mb-2 text-gray-900 text-center">{title}</h3>
      <p className="text-gray-600 mb-3 text-center">{description}</p>
      <ul className="list-disc list-inside text-sm text-gray-500 space-y-1 text-left mt-2">
        {items.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
      <span className="absolute right-4 top-4 text-yellow-400 opacity-0 group-hover:opacity-100 transition font-semibold pointer-events-none select-none text-xs">detalii</span>
    </div>
  );
}

function FeatureCard({
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
      <h4 className="text-xl font-bold mb-2 text-gray-900 text-center">{title}</h4>
      <p className="text-gray-600 text-center">{description}</p>
    </div>
  );
}