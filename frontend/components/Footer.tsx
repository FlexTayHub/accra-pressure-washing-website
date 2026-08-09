import { Mail, MapPin, MessageCircle } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-gray-950 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <img src="/images/ana-logo.png" alt="ANA Power Cleaners" className="h-16 w-auto mb-4" />
            <p className="text-gray-300 max-w-xl leading-relaxed">
              Professional exterior pressure washing for homes, compounds, businesses, storefronts, fleets, and commercial properties throughout Greater Accra.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <a
                href="https://wa.me/233544539852"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center rounded-md bg-green-600 px-4 py-2 text-sm font-medium hover:bg-green-700"
              >
                <MessageCircle className="mr-2" size={17} /> WhatsApp
              </a>
              <a
                href="mailto:ANAPowerCleaners@gmail.com"
                className="inline-flex items-center rounded-md border border-gray-700 px-4 py-2 text-sm font-medium hover:bg-gray-900"
              >
                <Mail className="mr-2" size={17} /> Email Us
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Explore</h4>
            <div className="flex flex-col items-start gap-2 text-gray-300">
              <button onClick={() => scrollTo("services")} className="hover:text-red-400">Services</button>
              <button onClick={() => scrollTo("gallery")} className="hover:text-red-400">Cleaning Examples</button>
              <button onClick={() => scrollTo("about")} className="hover:text-red-400">About ANA</button>
              <button onClick={() => scrollTo("areas")} className="hover:text-red-400">Service Areas</button>
              <button onClick={() => scrollTo("contact")} className="hover:text-red-400">Request a Quote</button>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-4 text-gray-300">
              <a href="https://wa.me/233544539852" target="_blank" rel="noreferrer" className="flex items-start gap-3 hover:text-green-300">
                <MessageCircle size={17} className="mt-1 text-green-400 flex-shrink-0" />
                <span>+233 54 453 9852</span>
              </a>
              <a href="mailto:ANAPowerCleaners@gmail.com" className="flex items-start gap-3 hover:text-red-300">
                <Mail size={17} className="mt-1 text-red-400 flex-shrink-0" />
                <span className="break-all">ANAPowerCleaners@gmail.com</span>
              </a>
              <div className="flex items-start gap-3">
                <MapPin size={17} className="mt-1 text-red-400 flex-shrink-0" />
                <span>Greater Accra Region, Ghana</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 text-sm text-gray-500 flex flex-col sm:flex-row gap-2 justify-between">
          <span>© {currentYear} ANA Power Cleaners. All rights reserved.</span>
          <span>Exterior pressure washing • Greater Accra</span>
        </div>
      </div>
    </footer>
  );
}
