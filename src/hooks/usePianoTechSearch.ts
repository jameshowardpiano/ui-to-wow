
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

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

export const usePianoTechSearch = () => {
  const [technicians, setTechnicians] = useState<PianoTechnician[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const searchTechnicians = async (location: string) => {
    if (!location.trim()) {
      toast({
        title: "Error",
        description: "Please enter a city or zip code",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    
    try {
      const response = await fetch('/functions/v1/search-piano-techs', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ location }),
      });

      if (!response.ok) {
        throw new Error('Search failed');
      }

      const data = await response.json();
      setTechnicians(data.technicians);
      
      if (data.technicians.length === 0) {
        toast({
          title: "No results",
          description: "No piano technicians found in this area. Try a different location.",
        });
      } else {
        toast({
          title: "Search complete",
          description: `Found ${data.technicians.length} piano technicians in your area`,
        });
      }
    } catch (error) {
      console.error('Search error:', error);
      toast({
        title: "Search failed",
        description: "Unable to search for piano technicians. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return {
    technicians,
    isLoading,
    searchTechnicians,
  };
};
