
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Experts = () => {
  const experts = [
    {
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      name: "David Johnson",
      rating: 4.9,
      reviews: 127,
      specialties: ["Piano Tuning", "Repairs"]
    },
    {
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      name: "Mike Smith",
      rating: 4.8,
      reviews: 89,
      specialties: ["Restoration", "Moving"]
    },
    {
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
      name: "John Wilson",
      rating: 5.0,
      reviews: 156,
      specialties: ["Tuning", "Maintenance"]
    },
    {
      image: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?w=100&h=100&fit=crop&crop=face",
      name: "Robert Brown",
      rating: 4.9,
      reviews: 203,
      specialties: ["Cleaning", "Inspection"]
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Get Your Piano in Perfect Harmony with Expert Care
            </h2>
            <p className="text-gray-600 mb-8">
              Our certified piano technicians bring years of experience and passion 
              to every service. Trust your piano to skilled professionals who care 
              about the music as much as you do.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {experts.map((expert, index) => (
              <Card key={index} className="p-4">
                <CardContent className="p-0">
                  <div className="flex items-center space-x-3 mb-3">
                    <img 
                      src={expert.image} 
                      alt={expert.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-semibold">{expert.name}</h4>
                      <div className="flex items-center space-x-2">
                        <span className="text-yellow-500">★</span>
                        <span className="text-sm">{expert.rating} ({expert.reviews})</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {expert.specialties.map((specialty, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {specialty}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experts;
