import { Button } from "@/components/ui/button";
import { useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo and Brand */}
          <div className="flex items-center">
            <img src="/logo.png" alt="PianoCare Logo" className="h-8 w-auto mr-3" />
            <span className="text-2xl font-bold text-orange-700 tracking-tight">PianoCare</span>
          </div>
          {/* Hamburger for mobile */}
          <button
            className="md:hidden flex items-center px-2 py-1 border rounded text-orange-700 border-orange-700"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-700 hover:text-orange-700 font-medium">Services</a>
            <a href="#" className="text-gray-700 hover:text-orange-700 font-medium">Providers</a>
            <a href="#" className="text-gray-700 hover:text-orange-700 font-medium">Support</a>
          </nav>
          {/* Desktop Auth & CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="#" className="text-gray-700 hover:text-orange-700 font-medium">Sign up</a>
            <a href="#" className="text-gray-700 hover:text-orange-700 font-medium">Login</a>
            <Button className="bg-orange-700 hover:bg-orange-800 text-white font-semibold px-4 py-2 rounded-md">
              Become a Technician
            </Button>
          </div>
        </div>
        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden mt-2 flex flex-col gap-2 bg-white rounded shadow px-4 py-3">
            <nav className="flex flex-col gap-2">
              <a href="#" className="text-gray-700 hover:text-orange-700 font-medium">Services</a>
              <a href="#" className="text-gray-700 hover:text-orange-700 font-medium">Providers</a>
              <a href="#" className="text-gray-700 hover:text-orange-700 font-medium">Support</a>
            </nav>
            <div className="flex flex-col gap-2 mt-2">
              <a href="#" className="text-gray-700 hover:text-orange-700 font-medium">Sign up</a>
              <a href="#" className="text-gray-700 hover:text-orange-700 font-medium">Login</a>
              <Button className="bg-orange-700 hover:bg-orange-800 text-white font-semibold w-full rounded-md">
                Become a Technician
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
