import { ArrowRight, CheckCircle, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const WHATSAPP_URL =
  "https://wa.me/233544539852?text=Hello%20ANA%20Power%20Cleaners%2C%20I%20would%20like%20a%20free%20pressure%20washing%20quote.";

export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-br from-red-50 via-white to-green-50 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="font-semibold uppercase tracking-[0.2em] text-red-600">
                Greater Accra • Residential & Commercial
              </p>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                Bring Dirty Outdoor Surfaces{" "}
                <span className="text-green-600">Back to Life</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                ANA Power Cleaners provides professional pressure washing for compounds,
                storefronts, walkways, walls, driveways, fleets, and commercial properties
                across Greater Accra.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-3">
              {["Commercial-grade equipment", "On-site demos available", "Maintenance cleaning plans", "Flexible scheduling"].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle className="text-green-600 flex-shrink-0" size={20} />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-11 items-center justify-center rounded-md bg-green-600 px-8 text-sm font-medium text-white transition-colors hover:bg-green-700"
              >
                <MessageCircle className="mr-2" size={20} />
                WhatsApp for a Quote
              </a>
              <Button
                onClick={scrollToContact}
                size="lg"
                className="bg-red-600 hover:bg-red-700 text-white px-8"
              >
                Request a Site Visit
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </div>

            <p className="text-sm text-gray-500">
              Have a business property? Ask us about a no-obligation demonstration and recurring maintenance options.
            </p>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-green-100 to-yellow-100 rounded-2xl p-4 md:p-6 shadow-sm">
              <img
                src="/images/steps-before-after.png"
                alt="Before and after pressure washing results"
                className="w-full h-80 md:h-96 object-cover rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
