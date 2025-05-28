import { Card, CardContent } from "@/components/ui/card";

const Services = () => {
  const services = [
    { icon: "/service-piano-tuning.png", label: "Piano Tuning" },
    { icon: "/service-string-replacement.png", label: "String Replacement" },
    { icon: "/service-repair-service.png", label: "Repair & Service" },
    { icon: "/service-piano-restoration.png", label: "Piano Restoration" },
    { icon: "/service-piano-cleaning.png", label: "Piano Cleaning" },
    { icon: "/service-piano-regulation.png", label: "Piano Regulation" },
    { icon: "/service-key-replacement.png", label: "Key Replacement" },
    { icon: "/service-soundboard-repair.png", label: "Soundboard Repair" }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="p-4">
                <div className="text-3xl mb-2">
                  <img src={service.icon} alt={service.label} className="h-14 mx-auto" />
                </div>
                <span className="sr-only">{service.label}</span>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
