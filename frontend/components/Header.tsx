import { useState } from "react";
import { Mail, Menu, MessageCircle, X } from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/233544539852?text=Hello%20ANA%20Power%20Cleaners%2C%20I%20would%20like%20a%20quote.";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  const navItems = [
    ["Home", "home"],
    ["Services", "services"],
    ["Results", "gallery"],
    ["About", "about"],
    ["Service Areas", "areas"],
    ["Contact", "contact"]
  ];

  return (
    <header className="bg-white border-b sticky top-0 z-50 shadow-sm">
      <div className="bg-red-600 text-white py-2">
        <div className="container mx-auto px-4 flex justify-between items-center gap-3 text-sm">
          <div className="flex items-center gap-2 sm:gap-4">
            <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:underline">
              <MessageCircle size={14} />
              <span>WhatsApp +233 54 453 9852</span>
            </a>
            <a href="mailto:ANAPowerCleaners@gmail.com" className="hidden sm:flex items-center gap-1 hover:underline">
              <Mail size={14} />
              <span>ANAPowerCleaners@gmail.com</span>
            </a>
          </div>
          <div className="hidden md:block">Serving Greater Accra • Free quote requests</div>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <button onClick={() => scrollToSection("home")} aria-label="Go to homepage">
            <img src="/images/ana-logo.png" alt="ANA Power Cleaners" className="h-14 w-auto" />
          </button>

          <nav className="hidden lg:flex items-center space-x-6">
            {navItems.map(([label, id]) => (
              <button key={id} onClick={() => scrollToSection(id)} className="text-gray-700 hover:text-red-600 transition-colors">
                {label}
              </button>
            ))}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-10 items-center justify-center rounded-md bg-green-600 px-5 text-sm font-medium text-white transition-colors hover:bg-green-700"
            >
              <MessageCircle className="mr-2" size={18} />
              Get Quote
            </a>
          </nav>

          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden p-2" aria-label="Toggle menu">
            {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden border-t bg-white pb-5">
            <nav className="flex flex-col py-3">
              {navItems.map(([label, id]) => (
                <button key={id} onClick={() => scrollToSection(id)} className="text-left px-2 py-3 text-gray-700 hover:text-red-600">
                  {label}
                </button>
              ))}
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                className="mt-2 inline-flex h-11 items-center justify-center rounded-md bg-green-600 px-5 text-sm font-medium text-white hover:bg-green-700"
              >
                <MessageCircle className="mr-2" size={18} />
                WhatsApp for a Quote
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
