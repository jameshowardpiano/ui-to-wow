import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { useState } from "react";
import axios from "axios";
import { usePianoTechSearch } from "@/hooks/usePianoTechSearch";

interface HeroProps {
  onSearchResults?: (technicians: any[]) => void;
}

const Hero = ({ onSearchResults }: HeroProps) => {
  const [searchLocation, setSearchLocation] = useState("");
  const [results, setResults] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { technicians, isLoading, searchTechnicians } = usePianoTechSearch();

  const handleSearch = async () => {
    if (!searchLocation) return;
    setLoading(true);
    setError(null);
    setResults([]);
    const query = `piano technician in ${searchLocation}`;
    try {
      const response = await axios.get(
        "http://localhost:3001/api/search",
        {
          params: { query },
        }
      );
      setResults(response.data.results || []);
    } catch (err) {
      setError("Failed to fetch results.");
    } finally {
      setLoading(false);
    }
  };


  return (
    <section className="bg-gradient-to-r from-orange-50 to-orange-100 py-20 rounded-3xl max-w-7xl mx-auto mt-8 px-4 sm:px-6 lg:px-8">
      <div>
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
                onKeyDown={e => { if (e.key === "Enter") handleSearch(); }}
              />
              <Button 
                size="lg" 
                className="bg-orange-600 hover:bg-orange-700 h-12 px-6"
                onClick={handleSearch}
                disabled={loading}
              >
                <Search className="w-4 h-4 mr-2" />
                {loading ? "Searching..." : "Search"}
              </Button>
            </div>

            {error && <div className="text-red-600 mb-4">{error}</div>}

            {/* Results */}
            {results.length > 0 && (
              <div className="mb-8">
                <h2 className="text-lg font-semibold mb-2">Nearby Piano Technicians:</h2>
                <ul className="space-y-3">
                  {results.map((place) => (
                    <li key={place.place_id} className="p-4 bg-white rounded shadow flex flex-col">
                      <span className="font-medium text-gray-900">{place.name}</span>
                      <span className="text-gray-700 text-sm">{place.formatted_address}</span>
                      {place.rating && (
                        <span className="text-yellow-600 text-xs mt-1">
                          Rating: {place.rating} ⭐
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            )}

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
              src="/header-image.png" 
              alt="PianoCare Hero" 
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
