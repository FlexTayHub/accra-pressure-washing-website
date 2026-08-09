import { CalendarCheck, Gauge, Handshake, Users } from "lucide-react";

export default function About() {
  const strengths = [
    {
      icon: <Gauge className="h-7 w-7 text-red-600" />,
      title: "Commercial-Grade Equipment",
      text: "Our pressure washing setup is built to handle residential compounds, storefronts, paved areas, and larger commercial jobs."
    },
    {
      icon: <Users className="h-7 w-7 text-green-600" />,
      title: "Trained Local Team",
      text: "Our technicians follow a structured process for setup, surface cleaning, safe operation, and site cleanup."
    },
    {
      icon: <Handshake className="h-7 w-7 text-red-600" />,
      title: "Demo-Friendly Sales Approach",
      text: "For qualified commercial properties, we can discuss an on-site demonstration so your team can see the difference before considering ongoing work."
    },
    {
      icon: <CalendarCheck className="h-7 w-7 text-green-600" />,
      title: "Maintenance Options",
      text: "Recurring quarterly, semi-annual, and annual cleaning options are available based on property needs."
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div>
              <p className="font-semibold text-red-600 mb-2">WHY ANA POWER CLEANERS</p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                More Than a Basic Cleaning Service
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                We focus on exterior pressure washing and power cleaning—the heavy-duty work that routine janitorial or housekeeping teams often are not equipped to handle. Our goal is simple: help properties across Greater Accra look cleaner, better maintained, and ready for customers, residents, and guests.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              {strengths.map((item) => (
                <div key={item.title} className="rounded-xl border border-gray-100 p-5 shadow-sm">
                  <div className="mb-3">{item.icon}</div>
                  <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-gray-600">{item.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img
                src="/images/professional-worker.png"
                alt="ANA Power Cleaners pressure washing service"
                className="w-full h-[460px] object-cover"
              />
            </div>
            <div className="absolute -bottom-6 left-4 right-4 md:left-8 md:right-auto bg-gray-900 text-white rounded-xl p-5 shadow-lg md:max-w-xs">
              <p className="font-bold text-lg mb-1">Commercial property manager?</p>
              <p className="text-sm text-gray-300">Ask us about a site assessment, demonstration, and maintenance cleaning plan.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
