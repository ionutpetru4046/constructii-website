export default function TermsPage() {
  return (
    <main className="relative min-h-screen bg-linear-to-tr from-slate-50 to-blue-100 dark:from-slate-900 dark:to-slate-700 flex flex-col items-center py-16 px-4">
      <div className="absolute inset-0 pointer-events-none z-0">
        <svg className="w-full h-full" viewBox="0 0 1440 320" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="wave-gradient" gradientTransform="rotate(20)">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.09" />
              <stop offset="100%" stopColor="#fbbf24" stopOpacity="0.05" />
            </linearGradient>
          </defs>
          <path
            fill="url(#wave-gradient)"
            d="M0,128L60,122.7C120,117,240,107,360,106.7C480,107,600,117,720,117.3C840,117,960,107,1080,106.7C1200,107,1320,117,1380,122.7L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></path>
        </svg>
      </div>
      <div className="relative z-10 w-full max-w-3xl bg-white/70 dark:bg-slate-900/70 shadow-lg rounded-xl backdrop-blur-[2px] border border-slate-200 dark:border-slate-700 px-8 py-12">
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-8        from-blue-600 via-blue-400 to-cyan-400 bg-clip-text text-transparent tracking-tight text-center">
          Termeni și Condiții
        </h1>

        <p className="mb-8 text-lg text-slate-600 dark:text-slate-300 text-center">
          Bine ai venit pe site-ul nostru! <br />
          <span className="font-medium">Te rugăm să citești cu atenție acești Termeni și Condiții înainte de a utiliza site-ul.</span>
        </p>

        <ol className="space-y-7">
          <li>
            <h2 className="text-2xl font-semibold mb-2 flex items-center gap-2">
              <span className="inline-flex justify-center items-center w-8 h-8 bg-blue-100 dark:bg-slate-800 rounded-full text-blue-600 dark:text-blue-400 font-bold">
                1
              </span>
              Acceptarea termenilor
            </h2>
            <p className="ml-10 text-slate-700 dark:text-slate-300">
              Prin accesarea și utilizarea acestui site, ești de acord cu acești termeni și condiții. Dacă nu ești de acord, te rugăm să nu utilizezi site-ul.
            </p>
          </li>
          <li>
            <h2 className="text-2xl font-semibold mb-2 flex items-center gap-2">
              <span className="inline-flex justify-center items-center w-8 h-8 bg-blue-100 dark:bg-slate-800 rounded-full text-blue-600 dark:text-blue-400 font-bold">
                2
              </span>
              Utilizarea site-ului
            </h2>
            <p className="ml-10 text-slate-700 dark:text-slate-300">
              Te angajezi să folosești acest site doar în scopuri legale și într-un mod care nu afectează drepturile altor utilizatori.
            </p>
          </li>
          <li>
            <h2 className="text-2xl font-semibold mb-2 flex items-center gap-2">
              <span className="inline-flex justify-center items-center w-8 h-8 bg-blue-100 dark:bg-slate-800 rounded-full text-blue-600 dark:text-blue-400 font-bold">
                3
              </span>
              Proprietate intelectuală
            </h2>
            <p className="ml-10 text-slate-700 dark:text-slate-300">
              Conținutul site-ului (texte, imagini, logo-uri) este protejat prin drepturi de autor și nu poate fi utilizat fără acord.
            </p>
          </li>
          <li>
            <h2 className="text-2xl font-semibold mb-2 flex items-center gap-2">
              <span className="inline-flex justify-center items-center w-8 h-8 bg-blue-100 dark:bg-slate-800 rounded-full text-blue-600 dark:text-blue-400 font-bold">
                4
              </span>
              Limitarea răspunderii
            </h2>
            <p className="ml-10 text-slate-700 dark:text-slate-300">
              Nu garantăm că informațiile sunt complete sau fără erori. Nu suntem responsabili pentru eventuale daune rezultate din utilizarea site-ului.
            </p>
          </li>
          <li>
            <h2 className="text-2xl font-semibold mb-2 flex items-center gap-2">
              <span className="inline-flex justify-center items-center w-8 h-8 bg-blue-100 dark:bg-slate-800 rounded-full text-blue-600 dark:text-blue-400 font-bold">
                5
              </span>
              Confidențialitate
            </h2>
            <p className="ml-10 text-slate-700 dark:text-slate-300">
              Datele personale sunt gestionate conform politicii de confidențialitate.
            </p>
          </li>
          <li>
            <h2 className="text-2xl font-semibold mb-2 flex items-center gap-2">
              <span className="inline-flex justify-center items-center w-8 h-8 bg-blue-100 dark:bg-slate-800 rounded-full text-blue-600 dark:text-blue-400 font-bold">
                6
              </span>
              Modificări
            </h2>
            <p className="ml-10 text-slate-700 dark:text-slate-300">
              Ne rezervăm dreptul de a modifica acești termeni în orice moment.
            </p>
          </li>
          <li>
            <h2 className="text-2xl font-semibold mb-2 flex items-center gap-2">
              <span className="inline-flex justify-center items-center w-8 h-8 bg-blue-100 dark:bg-slate-800 rounded-full text-blue-600 dark:text-blue-400 font-bold">
                7
              </span>
              Contact
            </h2>
            <p className="ml-10 text-slate-700 dark:text-slate-300">
              Pentru întrebări, ne poți contacta la adresa de email afișată pe website.
            </p>
          </li>
        </ol>
        <p className="mt-12 text-center text-sm italic text-gray-500 dark:text-gray-400">
          Ultima actualizare:{" "}
          <span className="font-semibold">{new Date().toLocaleDateString("ro-RO")}</span>
        </p>
      </div>
    </main>
  );
}