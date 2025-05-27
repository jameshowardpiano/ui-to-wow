
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Newsletter = () => {
  return (
    <section className="py-16 bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
        <p className="text-gray-300 mb-8">
          Stay updated with piano care tips, maintenance schedules, and special offers.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <Input 
            type="email" 
            placeholder="Enter your email"
            className="bg-white text-gray-900"
          />
          <Button className="bg-orange-600 hover:bg-orange-700">
            Subscribe
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
