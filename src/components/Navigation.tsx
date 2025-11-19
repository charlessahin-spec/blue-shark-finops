import { useState, useEffect } from "react";
import logo from "@/assets/logo.png";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const openCalendly = () => {
    if (window.Calendly) {
      window.Calendly.initPopupWidget({url: 'https://calendly.com/bluesharkconsulting/30min'});
    }
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-md shadow-card" : "bg-transparent"
      }`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center">
              <img src={logo} alt="Blue Shark Consulting" className="h-8 sm:h-10 md:h-12 w-auto" />
            </div>
            <button
              onClick={openCalendly}
              className="px-4 sm:px-6 py-2 sm:py-2.5 text-sm sm:text-base bg-gradient-premium text-primary-foreground font-semibold rounded-lg hover:shadow-premium transition-all duration-300 hover:scale-105"
            >
              <span className="hidden sm:inline">Réserver un appel</span>
              <span className="sm:hidden">Réserver</span>
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
