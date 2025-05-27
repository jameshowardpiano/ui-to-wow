
import { Card, CardContent } from "@/components/ui/card";

const Services = () => {
  const services = [
    { icon: "🎼", title: "Tuning", description: "Professional piano tuning" },
    { icon: "🔧", title: "Repairs", description: "Expert piano repairs" },
    { icon: "🎹", title: "Maintenance", description: "Regular maintenance" },
    { icon: "🚚", title: "Moving", description: "Safe piano moving" },
    { icon: "🎵", title: "Lessons", description: "Piano lessons" },
    { icon: "✨", title: "Cleaning", description: "Deep cleaning service" },
    { icon: "🎯", title: "Inspection", description: "Thorough inspection" },
    { icon: "📋", title: "Assessment", description: "Value assessment" }
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
