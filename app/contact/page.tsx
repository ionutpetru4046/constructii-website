export default function ContactPage() {
    return (
      <main className="min-h-screen bg-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-6">
  
          <h1 className="text-4xl font-bold mb-12 text-center">
            Contactează-ne
          </h1>
  
          <div className="grid md:grid-cols-2 gap-12">
  
            {/* Contact Info */}
            <div className="bg-white p-8 rounded-xl shadow-md">
              <h2 className="text-2xl font-semibold mb-6">
                Informații de contact
              </h2>
  
              <div className="space-y-4 text-gray-700">
                <p><strong>Telefon:</strong> +40 712 345 678</p>
                <p><strong>Email:</strong> contact@constructiipro.ro</p>
                <p><strong>Adresă:</strong> București, România</p>
                <p><strong>Program:</strong> Luni - Vineri 08:00 - 18:00</p>
              </div>
            </div>
  
            {/* Google Map */}
            <div className="rounded-xl overflow-hidden shadow-md">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18..."
                width="100%"
                height="100%"
                className="min-h-[400px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
  
          </div>
  
        </div>
      </main>
    );
  }
  