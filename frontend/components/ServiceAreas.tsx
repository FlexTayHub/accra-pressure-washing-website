import { MapPin, CheckCircle } from "lucide-react";

export default function ServiceAreas() {
  const areas = [
    "East Legon",
    "Airport Residential",
    "Cantonments",
    "Labone",
    "Osu",
    "Dzorwulu",
    "Roman Ridge",
    "North Ridge",
    "Adabraka",
    "Accra Central",
    "Tema",
    "Madina",
    "Achimota",
    "Dansoman",
    "Kasoa",
    "Weija"
  ];

  return (
    <section id="areas" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Service Areas in Greater Accra
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We proudly serve residential and commercial properties throughout 
            Greater Accra with fast, reliable pressure washing services
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Service Areas List */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <MapPin className="h-6 w-6 text-blue-600" />
              Areas We Serve
            </h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {areas.map((area, index) => (
                <div key={index} className="flex items-center gap-3 p-3 bg-white rounded-lg shadow-sm">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">{area}</span>
                </div>
              ))}
            </div>
            <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
              <p className="text-blue-800 text-sm">
                <strong>Don't see your area?</strong> We may still serve your location. 
                Contact us for availability and pricing in your specific area.
              </p>
            </div>
          </div>

          {/* Service Info */}
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Service Coverage
              </h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-sm text-gray-700">Same-day service available</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <span className="text-sm text-gray-700">Travel within 30km of Accra</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                  <span className="text-sm text-gray-700">Emergency services available</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Response Times
              </h3>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-600">Central Accra</span>
                    <span className="font-medium">Same Day</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full w-full"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-600">Greater Accra</span>
                    <span className="font-medium">1-2 Days</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full w-4/5"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-600">Extended Areas</span>
                    <span className="font-medium">2-3 Days</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-yellow-500 h-2 rounded-full w-3/5"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
