
import { Card, CardContent } from "@/components/ui/card";

const Services = () => {
  const services = [
    { icon: "🎹", title: "Piano Tuning", description: "Professional piano tuning services" },
    { icon: "🎵", title: "String Replacement", description: "Expert string replacement" },
    { icon: "🔧", title: "Repair & Service", description: "Comprehensive repair services" },
    { icon: "🎼", title: "Piano Restoration", description: "Complete piano restoration" },
    { icon: "✨", title: "Piano Cleaning", description: "Professional cleaning service" },
    { icon: "🎯", title: "Piano Regulation", description: "Precise regulation service" },
    { icon: "🗝️", title: "Key Replacement", description: "Key repair and replacement" },
    { icon: "🎶", title: "Soundboard Repair", description: "Expert soundboard services" }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="p-4">
                <div className="text-3xl mb-2">{service.icon}</div>
                <h3 className="font-semibold text-sm mb-1">{service.title}</h3>
                <p className="text-xs text-gray-600">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
