import { Menu, X } from "lucide-react";
import { useState } from "react";
export default function Navbar() {
  const [mobaileMenueIsopen, setMobaileMenueisopen] = useState(false);
  return (
    <nav className="fixed top-0 w-full z-50 transition-all duration-300 bg-slate-900/20 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16 md:h-20">
          <div className="flex items-center space-x-1 cursor-pointer">
            <div>
              <img
                src="/images.jpg"
                alt="code flow"
                className="w-6 h-6 sm:w-8 sm:h-8"
              />
            </div>
            <span className="text-lg sm:text-xl md:text-2xl font-medium">
              <span className="text-white">Code</span>
              <span className="text-blue-400">Flow</span>
            </span>
          </div>
          {/* Nav links  */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <a
              href="#"
              className="text-gray-300 hover:text-white text-sm lg:text-base"
            >
              Features
            </a>
            <a href="#" className="text-gray-300 hover:text-white">
              Pricing
            </a>
            <a href="#" className="text-gray-300 hover:text-white">
              Hero
            </a>
            <a href="#" className="text-gray-300 hover:text-white">
              Testimonials
            </a>
            <a href="#" className="text-gray-300 hover:text-white">
              Footer
            </a>
          </div>
          <button
            className="md:hidden p-2 text-gray-300 hover:text-white"
            onClick={() => setMobaileMenueisopen((prev) => !prev)}
          >
            {mobaileMenueIsopen ? (
              <X className="w-5 h-5 sm:w-6 sm:h-6 " />
            ) : (
              <Menu className=" w-5 h-5 sm:w-6 sm:h-6" />
            )}
          </button>
        </div>
      </div>
      {mobaileMenueIsopen && (
        <div className="md:hidden bg-slate-900/95 backdrop-blur-lg border-t border-slate-800 animate-in slide-in-from-top duration-300">
          <div className="px-4 py-4 sm:py-6 space-y-3 sm:space-y-3">
            <a
              href="#"
              onClick={() => setMobaileMenueisopen(false)}
              className="block text-gray-300 hover:text-white text-sm lg:text-base"
            >
              Features
            </a>
            <a
              href="#"
              onClick={() => setMobaileMenueisopen(false)}
              className="block text-gray-300 hover:text-white"
            >
              Pricing
            </a>
            <a
              href="#"
              onClick={() => setMobaileMenueisopen(false)}
              className="block text-gray-300 hover:text-white"
            >
              Hero
            </a>
            <a
              href="#"
              onClick={() => setMobaileMenueisopen(false)}
              className="block text-gray-300 hover:text-white"
            >
              Testimonials
            </a>
            <a
              href="#"
              onClick={() => setMobaileMenueisopen(false)}
              className="block text-gray-300 hover:text-white"
            >
              Footer
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
