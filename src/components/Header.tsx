import { Button } from "@/components/ui/button";

const Header = () => (
  <header className="bg-white shadow-sm">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center h-20">
        {/* Logo and Brand */}
        <div className="flex items-center">
          <img src="/logo.png" alt="PianoCare Logo" className="h-8 w-auto mr-3" />
          <span className="text-2xl font-bold text-orange-700 tracking-tight">PianoCare</span>
        </div>
        {/* Navigation */}
        <nav className="hidden md:flex space-x-8">
          <a href="#" className="text-gray-700 hover:text-orange-700 font-medium">Services</a>
          <a href="#" className="text-gray-700 hover:text-orange-700 font-medium">Providers</a>
          <a href="#" className="text-gray-700 hover:text-orange-700 font-medium">Support</a>
        </nav>
        {/* Auth & CTA */}
        <div className="flex items-center space-x-4">
          <a href="#" className="text-gray-700 hover:text-orange-700 font-medium">Sign up</a>
          <a href="#" className="text-gray-700 hover:text-orange-700 font-medium">Login</a>
          <Button className="bg-orange-700 hover:bg-orange-800 text-white font-semibold px-4 py-2 rounded-md">
            Become a Technician
          </Button>
        </div>
      </div>
    </div>
  </header>
);

export default Header;
