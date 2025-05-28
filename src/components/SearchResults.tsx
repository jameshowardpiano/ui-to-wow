
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, MapPin, Phone } from "lucide-react";

interface PianoTechnician {
  id: string;
  name: string;
  address: string;
  rating: number;
  userRatingsTotal: number;
  priceLevel: number | null;
  isOpen: boolean | null;
  photos: string | null;
}

interface SearchResultsProps {
  technicians: PianoTechnician[];
  isLoading: boolean;
}

const SearchResults = ({ technicians, isLoading }: SearchResultsProps) => {
  if (isLoading) {
    return (
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-600 mx-auto"></div>
            <p className="mt-4 text-gray-600">Searching for piano technicians...</p>
          </div>
        </div>
      </section>
    );
  }

  if (technicians.length === 0) {
    return null;
  }

  const getPriceLevelText = (level: number | null) => {
    if (level === null) return "Price not available";
    const levels = ["Free", "$", "$$", "$$$", "$$$$"];
    return levels[level] || "Price not available";
  };

  return (
    <section className="py-8 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Piano Technicians Found ({technicians.length})
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {technicians.map((tech) => (
            <Card key={tech.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              {tech.photos && (
                <img 
                  src={tech.photos} 
                  alt={tech.name}
                  className="w-full h-48 object-cover"
                />
              )}
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-2">{tech.name}</h3>
                
                <div className="flex items-center mb-2">
                  <MapPin className="w-4 h-4 text-gray-500 mr-2" />
                  <p className="text-sm text-gray-600">{tech.address}</p>
                </div>

                {tech.rating > 0 && (
                  <div className="flex items-center mb-2">
                    <Star className="w-4 h-4 text-yellow-500 mr-1" />
                    <span className="text-sm font-medium">{tech.rating}</span>
                    <span className="text-sm text-gray-500 ml-1">
                      ({tech.userRatingsTotal} reviews)
                    </span>
                  </div>
                )}

                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-orange-600 font-medium">
                    {getPriceLevelText(tech.priceLevel)}
                  </span>
                  {tech.isOpen !== null && (
                    <span className={`text-sm font-medium ${tech.isOpen ? 'text-green-600' : 'text-red-600'}`}>
                      {tech.isOpen ? 'Open now' : 'Closed'}
                    </span>
                  )}
                </div>

                <Button className="w-full bg-orange-600 hover:bg-orange-700">
                  <Phone className="w-4 h-4 mr-2" />
                  Contact
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SearchResults;
