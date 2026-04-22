export default function PoliticaConfidentialitate() {
  return (
    <main className="relative min-h-screen bg-linear-to-tr from-slate-50 to-cyan-200 dark:from-slate-900 dark:to-teal-700 flex flex-col items-center py-16 px-4">
      {/* Decorative SVG background */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <svg className="w-full h-full" viewBox="0 0 1440 320" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="confidentialitate-gradient" gradientTransform="rotate(15)">
              <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0.09" />
              <stop offset="100%" stopColor="#37d399" stopOpacity="0.07" />
            </linearGradient>
          </defs>
          <path
            fill="url(#confidentialitate-gradient)"
            d="M0,160L48,165.3C96,171,192,181,288,197.3C384,213,480,235,576,218.7C672,203,768,149,864,149.3C960,149,1056,203,1152,218.7C1248,235,1344,213,1392,202.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
      <div className="relative z-10 w-full max-w-3xl bg-white/80 dark:bg-slate-900/80 shadow-xl rounded-2xl border border-slate-200 dark:border-slate-800 backdrop-blur-[2px] px-8 py-12">
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-8 bg-gradient-to-r from-cyan-700 via-sky-500 to-teal-400 bg-clip-text text-transparent tracking-tight text-center">
          Politica de Confidențialitate
        </h1>

        <p className="mb-6 text-lg text-slate-600 dark:text-slate-300 text-center">
          Respectăm intimitatea ta. Această politică explică modul în care colectăm, folosim și protejăm datele tale personale atunci când utilizezi site-ul nostru.
        </p>

        <ol className="space-y-7">
          <li>
            <h2 className="text-2xl font-semibold mb-2 flex items-center gap-2">
              <span className="inline-flex justify-center items-center w-8 h-8 bg-cyan-100 dark:bg-cyan-900 rounded-full text-cyan-600 dark:text-cyan-300 font-bold">
                1
              </span>
              Ce date colectăm
            </h2>
            <p className="ml-10 text-slate-700 dark:text-slate-300">
              Colectăm informații precum nume, adresă de e-mail, date de contact sau alte date necesare pentru a îți putea oferi serviciile noastre. Datele sunt colectate doar cu acordul tău explicit.
            </p>
          </li>
          <li>
            <h2 className="text-2xl font-semibold mb-2 flex items-center gap-2">
              <span className="inline-flex justify-center items-center w-8 h-8 bg-cyan-100 dark:bg-cyan-900 rounded-full text-cyan-600 dark:text-cyan-300 font-bold">
                2
              </span>
              Cum utilizăm datele
            </h2>
            <p className="ml-10 text-slate-700 dark:text-slate-300">
              Folosim datele tale pentru a-ți oferi acces la servicii, a îmbunătăți experiența pe site și pentru a comunica cu tine. Nu vindem și nu transferăm datele tale către terțe părți fără acordul tău.
            </p>
          </li>
          <li>
            <h2 className="text-2xl font-semibold mb-2 flex items-center gap-2">
              <span className="inline-flex justify-center items-center w-8 h-8 bg-cyan-100 dark:bg-cyan-900 rounded-full text-cyan-600 dark:text-cyan-300 font-bold">
                3
              </span>
              Protecția datelor
            </h2>
            <p className="ml-10 text-slate-700 dark:text-slate-300">
              Implementăm măsuri tehnice și organizatorice pentru a proteja datele tale împotriva accesului neautorizat sau a pierderii. Accesul la date este restricționat doar la personalul autorizat.
            </p>
          </li>
          <li>
            <h2 className="text-2xl font-semibold mb-2 flex items-center gap-2">
              <span className="inline-flex justify-center items-center w-8 h-8 bg-cyan-100 dark:bg-cyan-900 rounded-full text-cyan-600 dark:text-cyan-300 font-bold">
                4
              </span>
              Drepturile tale
            </h2>
            <p className="ml-10 text-slate-700 dark:text-slate-300">
              Poți solicita accesul, rectificarea sau ștergerea datelor tale personale oricând. Pentru orice solicitare, te rugăm să ne contactezi folosind datele de contact de pe site.
            </p>
          </li>
          <li>
            <h2 className="text-2xl font-semibold mb-2 flex items-center gap-2">
              <span className="inline-flex justify-center items-center w-8 h-8 bg-cyan-100 dark:bg-cyan-900 rounded-full text-cyan-600 dark:text-cyan-300 font-bold">
                5
              </span>
              Cookie-uri
            </h2>
            <p className="ml-10 text-slate-700 dark:text-slate-300">
              Site-ul utilizează cookie-uri pentru a analiza traficul și a personaliza conținutul. Poți alege să dezactivezi cookie-urile din setările browser-ului tău.
            </p>
          </li>
          <li>
            <h2 className="text-2xl font-semibold mb-2 flex items-center gap-2">
              <span className="inline-flex justify-center items-center w-8 h-8 bg-cyan-100 dark:bg-cyan-900 rounded-full text-cyan-600 dark:text-cyan-300 font-bold">
                6
              </span>
              Modificări ale politicii
            </h2>
            <p className="ml-10 text-slate-700 dark:text-slate-300">
              Ne rezervăm dreptul de a modifica această politică de confidențialitate. Orice modificare va fi publicată pe această pagină.
            </p>
          </li>
        </ol>

        <div className="mt-12 flex justify-center">
          <span className="text-sm text-slate-500 dark:text-slate-400">
            Ultima actualizare: Iunie 2024
          </span>
        </div>
      </div>
    </main>
  );
}