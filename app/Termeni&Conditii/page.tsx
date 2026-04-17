export default function TermsPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-12 text-gray-800">
      <h1 className="text-3xl font-bold mb-6">Termeni și Condiții</h1>

      <p className="mb-4">
        Bine ai venit pe site-ul nostru! Te rugăm să citești cu atenție acești Termeni și Condiții înainte de a utiliza site-ul.
      </p>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">1. Acceptarea termenilor</h2>
        <p>
          Prin accesarea și utilizarea acestui site, ești de acord cu acești termeni și condiții. Dacă nu ești de acord, te rugăm să nu utilizezi site-ul.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">2. Utilizarea site-ului</h2>
        <p>
          Te angajezi să folosești acest site doar în scopuri legale și într-un mod care nu afectează drepturile altor utilizatori.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">3. Proprietate intelectuală</h2>
        <p>
          Conținutul site-ului (texte, imagini, logo-uri) este protejat prin drepturi de autor și nu poate fi utilizat fără acord.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">4. Limitarea răspunderii</h2>
        <p>
          Nu garantăm că informațiile sunt complete sau fără erori. Nu suntem responsabili pentru eventuale daune rezultate din utilizarea site-ului.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">5. Confidențialitate</h2>
        <p>
          Datele personale sunt gestionate conform politicii de confidențialitate.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">6. Modificări</h2>
        <p>
          Ne rezervăm dreptul de a modifica acești termeni în orice moment.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">7. Contact</h2>
        <p>
          Pentru întrebări, ne poți contacta la adresa de email afișată pe site.
        </p>
      </section>

      <p className="mt-10 text-sm text-gray-500">
        Ultima actualizare: {new Date().toLocaleDateString("ro-RO")}
      </p>
    </main>
  );
}