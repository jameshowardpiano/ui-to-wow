
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-orange-600">🎹 PianoCare</span>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-700 hover:text-orange-600">Services</a>
            <a href="#" className="text-gray-700 hover:text-orange-600">How It Works</a>
            <a href="#" className="text-gray-700 hover:text-orange-600">About</a>
            <a href="#" className="text-gray-700 hover:text-orange-600">Contact</a>
          </nav>

          <div className="flex items-center space-x-4">
            <a href="#" className="text-gray-700 hover:text-orange-600 font-medium">Login</a>
            <Button className="bg-orange-600 hover:bg-orange-700">
              Sign Up
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
