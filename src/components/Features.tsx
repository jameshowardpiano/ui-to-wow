
import { Button } from "@/components/ui/button";

const Features = () => {
  const features = [
    {
      icon: "🎯",
      title: "Expert-Level Piano Technicians",
      description: "All our technicians are certified professionals with years of experience in piano care and maintenance."
    },
    {
      icon: "⚡",
      title: "Competitive Piano Services",
      description: "Get the best value for professional piano services with transparent pricing and no hidden fees."
    },
    {
      icon: "🛡️",
      title: "Fast and Safe Service",
      description: "Quick response times and safe handling of your valuable instrument with full insurance coverage."
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=400&fit=crop" 
              alt="Piano technician at work"
              className="rounded-lg shadow-xl"
            />
          </div>
          
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Key Features of Our Piano Services
            </h2>
            <div className="space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="text-3xl">{feature.icon}</div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <Button className="mt-8 bg-orange-600 hover:bg-orange-700">
              Book Service
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
