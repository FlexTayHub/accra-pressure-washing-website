import { Building2, Car, Home, Sparkles, Store, Warehouse } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function Services() {
  const services = [
    {
      icon: <Building2 className="h-8 w-8 text-red-600" />,
      title: "Commercial Properties",
      description: "Exterior power cleaning for businesses and managed properties.",
      features: ["Building exteriors", "Entrances & walkways", "Parking areas", "Scheduled maintenance"]
    },
    {
      icon: <Home className="h-8 w-8 text-green-600" />,
      title: "Homes & Compounds",
      description: "Deep exterior cleaning that refreshes residential spaces.",
      features: ["Compound floors", "Driveways", "Walls & gates", "Patios & walkways"]
    },
    {
      icon: <Store className="h-8 w-8 text-red-600" />,
      title: "Storefronts & Hospitality",
      description: "Keep customer-facing areas cleaner and more presentable.",
      features: ["Storefronts", "Restaurants", "Hotels", "Churches & schools"]
    },
    {
      icon: <Car className="h-8 w-8 text-green-600" />,
      title: "Fleet & Vehicle Washing",
      description: "Mobile exterior washing for individual and business vehicles.",
      features: ["Cars & SUVs", "Vans", "Commercial fleets", "Trucks"]
    },
    {
      icon: <Warehouse className="h-8 w-8 text-red-600" />,
      title: "Industrial & Large Areas",
      description: "High-capacity cleaning for larger hard-surface jobs.",
      features: ["Warehouses", "Loading areas", "Large paved surfaces", "Property turnovers"]
    },
    {
      icon: <Sparkles className="h-8 w-8 text-green-600" />,
      title: "Specialty Cleaning",
      description: "Targeted cleaning for tough buildup and neglected surfaces.",
      features: ["Mold & mildew", "Dirt buildup", "Stain treatment", "Surface restoration"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <p className="font-semibold text-red-600 mb-2">WHAT WE CLEAN</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Pressure Washing Built for Accra Properties
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            From a single compound to a recurring commercial account, we tailor the job to the surface, property, and cleaning frequency you need.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
          {services.map((service) => (
            <Card key={service.title} className="bg-white border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="mb-3">{service.icon}</div>
                <CardTitle className="text-xl font-bold text-gray-900">{service.title}</CardTitle>
                <CardDescription className="text-gray-600">{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-red-600 rounded-full mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 rounded-2xl bg-gray-900 px-6 py-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-2">Need recurring cleaning?</h3>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Ask about quarterly, semi-annual, or annual maintenance plans for businesses, compounds, and managed properties.
          </p>
        </div>
      </div>
    </section>
  );
}
