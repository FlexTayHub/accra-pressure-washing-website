import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold text-blue-400 mb-4">
              PressureWash Pro
            </h3>
            <p className="text-gray-300 mb-4">
              Professional pressure washing services for Greater Accra. 
              Transforming properties with expert cleaning solutions.
            </p>
            <div className="flex space-x-4">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors cursor-pointer">
                <Facebook size={16} />
              </div>
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors cursor-pointer">
                <Instagram size={16} />
              </div>
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors cursor-pointer">
                <Linkedin size={16} />
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li className="hover:text-blue-400 transition-colors cursor-pointer">
                Residential Cleaning
              </li>
              <li className="hover:text-blue-400 transition-colors cursor-pointer">
                Commercial Services
              </li>
              <li className="hover:text-blue-400 transition-colors cursor-pointer">
                Vehicle Washing
              </li>
              <li className="hover:text-blue-400 transition-colors cursor-pointer">
                Specialized Cleaning
              </li>
              <li className="hover:text-blue-400 transition-colors cursor-pointer">
                Emergency Services
              </li>
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Service Areas</h4>
            <ul className="space-y-2 text-gray-300">
              <li>East Legon</li>
              <li>Airport Residential</li>
              <li>Cantonments</li>
              <li>Labone & Osu</li>
              <li>Tema</li>
              <li>And more...</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone size={16} className="text-blue-400" />
                <span className="text-gray-300">+233 XX XXX XXXX</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={16} className="text-blue-400" />
                <span className="text-gray-300">info@pressurewashaccra.com</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin size={16} className="text-blue-400" />
                <span className="text-gray-300">Greater Accra Region</span>
              </div>
            </div>

            <div className="mt-6 p-4 bg-gray-800 rounded-lg">
              <p className="text-sm text-gray-300">
                <strong className="text-blue-400">24/7 Emergency Service</strong><br />
                Available for urgent cleaning needs
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm">
              © {currentYear} PressureWash Pro. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm text-gray-400 mt-4 md:mt-0">
              <span className="hover:text-blue-400 transition-colors cursor-pointer">
                Privacy Policy
              </span>
              <span className="hover:text-blue-400 transition-colors cursor-pointer">
                Terms of Service
              </span>
              <span className="hover:text-blue-400 transition-colors cursor-pointer">
                Licensing
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
