export default function Gallery() {
  const galleryImages = [
    {
      src: "/images/steps-before-after.png",
      title: "Brick Steps Restoration",
      description: "Complete transformation of moss-covered brick steps to pristine condition"
    },
    {
      src: "/images/driveway-before-after.png",
      title: "Driveway Deep Clean",
      description: "Professional concrete cleaning removing years of stains and buildup"
    },
    {
      src: "/images/walkway-before-after.png",
      title: "Paver Walkway Revival",
      description: "Restored paver walkway with cleaned joints and renewed appearance"
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            See Our Results
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Professional pressure washing that transforms your property. 
            See the dramatic before and after results from our expert cleaning services.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryImages.map((image, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="aspect-video overflow-hidden">
                <img 
                  src={image.src} 
                  alt={image.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {image.title}
                </h3>
                <p className="text-gray-600">
                  {image.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-blue-600 text-white rounded-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Transform Your Property?
            </h3>
            <p className="text-lg mb-6">
              These results speak for themselves. Let ANA Power Cleaners restore your property to its original beauty.
            </p>
            <button
              onClick={() => {
                const element = document.getElementById("contact");
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Get Your Free Quote Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}