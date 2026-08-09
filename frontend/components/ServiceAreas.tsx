import { CheckCircle, MapPin } from "lucide-react";

export default function ServiceAreas() {
  const areas = [
    "East Legon", "Airport Residential", "Cantonments", "Labone",
    "Osu", "Dzorwulu", "Roman Ridge", "North Ridge",
    "Adabraka", "Accra Central", "Tema", "Madina",
    "Achimota", "Dansoman", "Kasoa", "Weija"
  ];

  return (
    <section id="areas" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-3 gap-10 items-start">
          <div>
            <p className="font-semibold text-red-600 mb-2">SERVICE AREA</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Serving Greater Accra</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              We travel to residential and commercial properties throughout Greater Accra. Send your location on WhatsApp and we can confirm availability for your property.
            </p>
            <a
              href="https://wa.me/233544539852?text=Hello%20ANA%20Power%20Cleaners%2C%20can%20you%20confirm%20service%20in%20my%20area%3F"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center rounded-md bg-green-600 px-6 py-3 font-medium text-white hover:bg-green-700"
            >
              Check My Area
            </a>
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-xl font-bold text-gray-900 mb-5 flex items-center gap-2">
              <MapPin className="h-5 w-5 text-red-600" />
              Common Service Locations
            </h3>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
              {areas.map((area) => (
                <div key={area} className="flex items-center gap-3 p-3 bg-white rounded-lg border border-gray-100 shadow-sm">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">{area}</span>
                </div>
              ))}
            </div>
            <p className="mt-5 text-sm text-gray-500">Outside these areas? Contact us anyway—availability depends on the job location and scope.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
