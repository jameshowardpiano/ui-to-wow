
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">🎹 PianoCare</h3>
            <p className="text-gray-300">
              Expert piano care services at your doorstep. Professional, reliable, and affordable.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Piano Tuning</li>
              <li>Piano Repairs</li>
              <li>Piano Moving</li>
              <li>Piano Cleaning</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-300">
              <li>About Us</li>
              <li>How It Works</li>
              <li>Pricing</li>
              <li>Contact</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Help</h4>
            <ul className="space-y-2 text-gray-300">
              <li>FAQ</li>
              <li>Support</li>
              <li>Terms of Service</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; 2024 PianoCare. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
