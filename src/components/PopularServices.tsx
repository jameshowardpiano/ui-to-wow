import { Card, CardContent } from "@/components/ui/card";

const PopularServices = () => {
  const services = [
    {
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=200&fit=crop",
      title: "Piano Tuning",
      price: "Starting at $120"
    },
    {
      image: "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?w=300&h=200&fit=crop",
      title: "Open Your Piano",
      price: "Starting at $80"
    },
    {
      image: "https://images.unsplash.com/photo-1511192336575-5a79af67a629?w=300&h=200&fit=crop",
      title: "Piano Key Regulation",
      price: "Starting at $200"
    },
    {
      image: "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?w=300&h=200&fit=crop",
      title: "Piano Servicing",
      price: "Starting at $150"
    },
    {
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=200&fit=crop",
      title: "Piano Cleaning",
      price: "Starting at $90"
    },
    {
      image: "https://images.unsplash.com/photo-1511192336575-5a79af67a629?w=300&h=200&fit=crop",
      title: "Piano Restoration",
      price: "Starting at $500"
    }
  ];

  return (
    <section className="py-16" style={{ backgroundColor: "#F2F3F8" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-12">Popular Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
              <img 
                src={service.image} 
                alt={service.title}
                className="w-full h-48 object-cover"
              />
              <CardContent className="p-4">
                <h3 className="font-semibold text-lg mb-2">{service.title}</h3>
                <p className="text-orange-600 font-medium">{service.price}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularServices;
