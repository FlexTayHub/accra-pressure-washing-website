import { useState } from "react";
import { Mail, MapPin, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const PHONE = "233544539852";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    serviceType: "",
    propertyType: "",
    area: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const message = [
      "Hello ANA Power Cleaners, I would like a quote.",
      `Name: ${formData.name || "Not provided"}`,
      `Phone: ${formData.phone || "Not provided"}`,
      `Service: ${formData.serviceType || "Not selected"}`,
      `Property: ${formData.propertyType || "Not selected"}`,
      `Area: ${formData.area || "Not provided"}`,
      `Details: ${formData.message || "No additional details"}`
    ].join("\n");

    window.open(`https://wa.me/${PHONE}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <p className="font-semibold text-red-600 mb-2">GET A QUOTE</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Tell Us What Needs Cleaning</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Complete the short form and your request will open directly in WhatsApp, ready to send to our team.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card className="border border-gray-100 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900">Request a Quote or Demo</CardTitle>
                <CardDescription>For commercial properties, mention if you would like to discuss an on-site demonstration.</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input id="name" value={formData.name} onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))} placeholder="Your name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone / WhatsApp</Label>
                      <Input id="phone" value={formData.phone} onChange={(e) => setFormData((prev) => ({ ...prev, phone: e.target.value }))} placeholder="Your phone number" />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>Service</Label>
                      <Select value={formData.serviceType} onValueChange={(value) => setFormData((prev) => ({ ...prev, serviceType: value }))}>
                        <SelectTrigger><SelectValue placeholder="Select service" /></SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Commercial property cleaning">Commercial property cleaning</SelectItem>
                          <SelectItem value="Compound / residential cleaning">Compound / residential cleaning</SelectItem>
                          <SelectItem value="Storefront / hospitality cleaning">Storefront / hospitality cleaning</SelectItem>
                          <SelectItem value="Fleet / vehicle washing">Fleet / vehicle washing</SelectItem>
                          <SelectItem value="Specialty pressure washing">Specialty pressure washing</SelectItem>
                          <SelectItem value="Maintenance plan">Recurring maintenance plan</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label>Property Type</Label>
                      <Select value={formData.propertyType} onValueChange={(value) => setFormData((prev) => ({ ...prev, propertyType: value }))}>
                        <SelectTrigger><SelectValue placeholder="Select property type" /></SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Home / compound">Home / compound</SelectItem>
                          <SelectItem value="Office / commercial building">Office / commercial building</SelectItem>
                          <SelectItem value="Retail / restaurant">Retail / restaurant</SelectItem>
                          <SelectItem value="Hotel / apartment property">Hotel / apartment property</SelectItem>
                          <SelectItem value="Church / school">Church / school</SelectItem>
                          <SelectItem value="Fleet / vehicles">Fleet / vehicles</SelectItem>
                          <SelectItem value="Other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="area">Area / Location</Label>
                    <Input id="area" value={formData.area} onChange={(e) => setFormData((prev) => ({ ...prev, area: e.target.value }))} placeholder="Example: East Legon, Osu, Tema" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">What needs cleaning?</Label>
                    <Textarea id="message" value={formData.message} onChange={(e) => setFormData((prev) => ({ ...prev, message: e.target.value }))} placeholder="Tell us the surfaces, approximate size, condition, and preferred timing. You can send photos in WhatsApp after this." rows={5} />
                  </div>

                  <Button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white">
                    <MessageCircle className="mr-2" size={19} />
                    Continue in WhatsApp
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="border-0 shadow-lg bg-gray-900 text-white">
              <CardHeader>
                <CardTitle className="text-xl">Contact ANA Power Cleaners</CardTitle>
              </CardHeader>
              <CardContent className="space-y-5">
                <a href="https://wa.me/233544539852" target="_blank" rel="noreferrer" className="flex items-start gap-3 hover:text-green-300">
                  <MessageCircle className="h-5 w-5 text-green-400 mt-0.5" />
                  <div><p className="font-medium">WhatsApp</p><p className="text-gray-300">+233 54 453 9852</p></div>
                </a>
                <a href="mailto:ANAPowerCleaners@gmail.com" className="flex items-start gap-3 hover:text-red-300">
                  <Mail className="h-5 w-5 text-red-400 mt-0.5" />
                  <div><p className="font-medium">Email</p><p className="text-gray-300 break-all">ANAPowerCleaners@gmail.com</p></div>
                </a>
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-red-400 mt-0.5" />
                  <div><p className="font-medium">Service Area</p><p className="text-gray-300">Greater Accra Region</p></div>
                </div>
              </CardContent>
            </Card>

            <Card className="border border-green-100 bg-green-50">
              <CardContent className="p-6">
                <h3 className="font-bold text-gray-900 mb-3">For business clients</h3>
                <p className="text-sm leading-relaxed text-gray-700">
                  We can discuss one-time cleaning, a demonstration area, or recurring maintenance for storefronts, compounds, hospitality properties, schools, churches, fleets, and managed properties.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
