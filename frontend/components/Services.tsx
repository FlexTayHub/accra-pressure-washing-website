import { Home, Building, Car, Wrench } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function Services() {
  const services = [
    {
      icon: <Home className="h-8 w-8 text-blue-600" />,
      title: "Residential Cleaning",
      description: "Complete exterior house washing, driveways, patios, and walkways",
      features: ["House siding cleaning", "Driveway restoration", "Patio & deck cleaning", "Roof cleaning"],
      price: "From GH₵200"
    },
    {
      icon: <Building className="h-8 w-8 text-blue-600" />,
      title: "Commercial Services",
      description: "Professional cleaning for businesses, offices, and commercial properties",
      features: ["Building facades", "Parking lots", "Storefronts", "Regular maintenance"],
      price: "From GH₵500"
    },
    {
      icon: <Car className="h-8 w-8 text-blue-600" />,
      title: "Vehicle Washing",
      description: "Cars, trucks, boats, and recreational vehicles",
      features: ["Car detailing", "Fleet washing", "Boat cleaning", "RV cleaning"],
      price: "From GH₵50"
    },
    {
      icon: <Wrench className="h-8 w-8 text-blue-600" />,
      title: "Specialized Cleaning",
      description: "Graffiti removal, rust cleaning, and deep stain removal",
      features: ["Graffiti removal", "Rust treatment", "Oil stain removal", "Mold & mildew"],
      price: "Quote on request"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Pressure Washing Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Professional cleaning solutions for residential and commercial properties 
            throughout Greater Accra
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="text-center pb-4">
                <div className="flex justify-center mb-4">
                  {service.icon}
                </div>
                <CardTitle className="text-xl font-bold text-gray-900">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-gray-600">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-4">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="text-center pt-4 border-t">
                  <span className="text-lg font-bold text-blue-600">{service.price}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            All services include free estimates and satisfaction guarantee
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500">
            <span>✓ Licensed & Insured</span>
            <span>✓ Eco-Friendly Products</span>
            <span>✓ Same-Day Service</span>
            <span>✓ Free Estimates</span>
          </div>
        </div>
      </div>
    </section>
  );
}
