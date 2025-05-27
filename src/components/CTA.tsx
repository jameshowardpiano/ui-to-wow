
import { Button } from "@/components/ui/button";

const CTA = () => {
  return (
    <section className="py-16 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">
              Take the First Step: Become a Skilled Piano Technician
            </h2>
            <p className="text-gray-300 mb-8">
              Join our certified training program and become a professional piano 
              technician. Learn from industry experts and start your rewarding career.
            </p>
            <ul className="space-y-2 mb-8">
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Comprehensive Training Program
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Industry Certification
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Job Placement Assistance
              </li>
            </ul>
            <div className="flex items-center space-x-4">
              <Button className="bg-orange-600 hover:bg-orange-700">
                Start Training
              </Button>
              <div className="text-2xl font-bold">$99.95</div>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=400&fit=crop" 
              alt="Piano technician training"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
