import { MessageCircle } from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/233544539852?text=Hello%20ANA%20Power%20Cleaners%2C%20I%20have%20a%20surface%20I%20would%20like%20cleaned.%20I%20can%20send%20you%20a%20photo.";

export default function Gallery() {
  const galleryImages = [
    {
      src: "/images/steps-before-after.png",
      title: "Brick & Step Cleaning",
      description: "Pressure washing can remove heavy surface buildup and reveal a much cleaner finish."
    },
    {
      src: "/images/driveway-before-after.png",
      title: "Driveway & Concrete Cleaning",
      description: "Professional surface cleaning can lift embedded dirt, grime, and weather staining."
    },
    {
      src: "/images/walkway-before-after.png",
      title: "Paver & Walkway Cleaning",
      description: "Walkways and paved surfaces can be refreshed with the right pressure and cleaning process."
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <p className="font-semibold text-red-600 mb-2">CLEANING EXAMPLES</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            The Difference Pressure Washing Can Make
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Different surfaces require different techniques. These images illustrate the kinds of transformations professional exterior cleaning can achieve.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryImages.map((image) => (
            <div key={image.title} className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="aspect-video overflow-hidden bg-gray-100">
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{image.title}</h3>
                <p className="text-gray-600 leading-relaxed">{image.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-gray-900 text-white rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-3">Have a surface that needs attention?</h3>
            <p className="text-gray-300 mb-6">
              Send us a photo on WhatsApp. We can review the surface, discuss the job, and arrange a quote or site visit.
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center rounded-md bg-green-600 px-7 py-3 font-semibold text-white hover:bg-green-700"
            >
              <MessageCircle className="mr-2" size={19} />
              Send a Photo on WhatsApp
            </a>
          </div>
        </div>

        <p className="mt-5 text-center text-xs text-gray-500">
          Example imagery is used to demonstrate typical pressure-washing applications and is not presented as a specific customer case study.
        </p>
      </div>
    </section>
  );
}
