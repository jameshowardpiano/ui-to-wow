import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { useState } from "react";
import { usePianoTechSearch } from "@/hooks/usePianoTechSearch";

interface HeroProps {
  onSearchResults?: (technicians: any[]) => void;
}

const Hero = ({ onSearchResults }: HeroProps) => {
  const [searchLocation, setSearchLocation] = useState("");
  const { technicians, isLoading, searchTechnicians } = usePianoTechSearch();

  const handleSearch = async () => {
    await searchTechnicians(searchLocation);
    if (onSearchResults) {
      onSearchResults(technicians);
    }
  };

  return (
    <section className="bg-gradient-to-r from-orange-50 to-orange-100 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Expert Piano Care,<br />
              Made Simple.
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Get your piano tuned by skilled experts at your doorstep. Quick,
              reliable, and affordable piano care services.
            </p>
            
            {/* Search Bar */}
            <div className="flex flex-col sm:flex-row gap-3 mb-8 max-w-lg">
              <Input
                type="text"
                placeholder="Enter city or zipcode"
                value={searchLocation}
                onChange={(e) => setSearchLocation(e.target.value)}
                className="flex-1 h-12 text-base"
                onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
              />
              <Button 
                size="lg" 
                className="bg-orange-600 hover:bg-orange-700 h-12 px-6"
                onClick={handleSearch}
                disabled={isLoading}
              >
                <Search className="w-4 h-4 mr-2" />
                {isLoading ? 'Searching...' : 'Search'}
              </Button>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-orange-600 hover:bg-orange-700">
                Get Started
              </Button>
              <Button size="lg" variant="outline">
                Learn More
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?w=600&h=400&fit=crop" 
              alt="Person playing grand piano in concert hall"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
