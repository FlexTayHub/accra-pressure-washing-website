import { Shield, Award, Users, Clock } from "lucide-react";

export default function About() {
  const stats = [
    {
      icon: <Users className="h-8 w-8 text-blue-600" />,
      number: "500+",
      label: "Happy Customers"
    },
    {
      icon: <Clock className="h-8 w-8 text-blue-600" />,
      number: "5+",
      label: "Years Experience"
    },
    {
      icon: <Award className="h-8 w-8 text-blue-600" />,
      number: "100%",
      label: "Satisfaction Rate"
    },
    {
      icon: <Shield className="h-8 w-8 text-blue-600" />,
      number: "24/7",
      label: "Emergency Service"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Choose PressureWash Pro?
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                We are Accra's premier pressure washing service, dedicated to 
                transforming properties across Greater Accra with professional, 
                eco-friendly cleaning solutions.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <Shield className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">
                    Licensed & Insured
                  </h3>
                  <p className="text-gray-600">
                    Fully licensed and insured for your peace of mind. 
                    We carry comprehensive liability insurance.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Award className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">
                    Professional Equipment
                  </h3>
                  <p className="text-gray-600">
                    State-of-the-art pressure washing equipment and 
                    eco-friendly cleaning solutions for optimal results.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Users className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">
                    Experienced Team
                  </h3>
                  <p className="text-gray-600">
                    Our trained professionals have years of experience 
                    serving the Greater Accra community.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Stats */}
          <div className="bg-gradient-to-br from-blue-50 to-gray-50 rounded-2xl p-8">
            <div className="grid grid-cols-2 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-3">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-1">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-600">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-white rounded-lg border border-blue-100">
              <h3 className="font-semibold text-gray-900 mb-2">
                Our Commitment
              </h3>
              <p className="text-gray-600 text-sm">
                We're committed to providing exceptional service that exceeds 
                expectations. Every job comes with our 100% satisfaction guarantee.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
