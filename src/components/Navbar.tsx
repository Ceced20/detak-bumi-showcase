
import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface NavbarProps {
  isScrolled: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ isScrolled }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Close mobile menu when clicking a nav link
  const handleNavLinkClick = () => {
    setIsMenuOpen(false);
  };

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4",
        isScrolled 
          ? "bg-nbdk-blue-dark/90 shadow-lg backdrop-blur-md" 
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <a 
          href="#home" 
          className="flex items-center gap-2 text-white font-bold text-xl"
        >
          <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center overflow-hidden shadow-md">
            <img src="/lovable-uploads/63ddf673-224c-4942-b29e-0b41b7e581b7.png" alt="NBDK" className="w-full h-full object-cover" />
          </div>
          <span className="hidden md:inline">Napas Bumi Detak Kehidupan</span>
        </a>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-2">
          <a href="#home" className="nav-link" onClick={handleNavLinkClick}>Home</a>
          <a href="#about" className="nav-link" onClick={handleNavLinkClick}>About</a>
          <a href="#schedule" className="nav-link" onClick={handleNavLinkClick}>Schedule</a>
          <a href="#gallery" className="nav-link" onClick={handleNavLinkClick}>Gallery</a>
          <a href="#team" className="nav-link" onClick={handleNavLinkClick}>Team</a>
          <a href="#contact" className="nav-link" onClick={handleNavLinkClick}>Contact</a>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden w-10 h-10 rounded-full bg-white/20 flex items-center justify-center shadow-md backdrop-blur-sm"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Menu"
        >
          <div className="w-6 flex flex-col items-center">
            <span 
              className={`block w-5 h-0.5 bg-white rounded-full transition-all duration-300 ${
                isMenuOpen ? "rotate-45 translate-y-1.5" : ""
              }`}
            />
            <span 
              className={`block w-5 h-0.5 bg-white rounded-full my-1 ${
                isMenuOpen ? "opacity-0" : "opacity-100"
              } transition-opacity duration-300`}
            />
            <span 
              className={`block w-5 h-0.5 bg-white rounded-full transition-all duration-300 ${
                isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
              }`}
            />
          </div>
        </button>
        
        {/* Mobile Menu */}
        <div 
          className={`fixed inset-0 bg-nbdk-blue-dark/95 backdrop-blur-lg z-40 flex flex-col justify-center items-center transition-all duration-300 ${
            isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
          } md:hidden`}
        >
          <div className="flex flex-col space-y-8 text-center">
            <a href="#home" className="text-2xl nav-link" onClick={handleNavLinkClick}>Home</a>
            <a href="#about" className="text-2xl nav-link" onClick={handleNavLinkClick}>About</a>
            <a href="#schedule" className="text-2xl nav-link" onClick={handleNavLinkClick}>Schedule</a>
            <a href="#gallery" className="text-2xl nav-link" onClick={handleNavLinkClick}>Gallery</a>
            <a href="#team" className="text-2xl nav-link" onClick={handleNavLinkClick}>Team</a>
            <a href="#contact" className="text-2xl nav-link" onClick={handleNavLinkClick}>Contact</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
