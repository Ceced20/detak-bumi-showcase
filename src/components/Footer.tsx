
import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-footer-pattern py-12 text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between mb-8">
          <div className="mb-6 md:mb-0">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center overflow-hidden shadow-lg">
                <span className="text-nbdk-blue-dark text-sm font-bold">NBDK</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Napas Bumi Detak Kehidupan</h3>
                <p className="text-sm text-nbdk-green-light">Earth's Breath, Life's Heartbeat</p>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-4 mb-3">
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-nbdk-green transition-colors duration-300"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                </svg>
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-nbdk-green transition-colors duration-300"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.069 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.346 1.057.413 2.227.058 1.265.07 1.645.07 4.849s-.012 3.584-.07 4.849c-.069 1.17-.249 1.805-.415 2.227-.217.562-.477.96-.896 1.382-.419.419-.819.679-1.381.896-.422.164-1.057.346-2.227.413-1.265.058-1.645.07-4.849.07s-3.584-.012-4.849-.07c-1.17-.069-1.805-.249-2.227-.415-.562-.217-.96-.477-1.382-.896-.419-.419-.679-.819-.896-1.381-.164-.422-.346-1.057-.413-2.227-.058-1.265-.07-1.645-.07-4.849s.012-3.584.07-4.849c.069-1.17.249-1.805.415-2.227.217-.562.477-.96.896-1.382.419-.419.819-.679 1.381-.896.422-.164 1.057-.346 2.227-.413 1.265-.058 1.645-.07 4.849-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-1.277.06-2.148.262-2.913.558-.789.306-1.459.718-2.126 1.384s-1.079 1.336-1.384 2.126c-.296.765-.499 1.636-.558 2.913-.06 1.28-.072 1.688-.072 4.947s.014 3.667.072 4.947c.06 1.277.262 2.148.558 2.913.306.789.718 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.765.296 1.636.499 2.913.558 1.28.06 1.688.072 4.947.072s3.667-.014 4.947-.072c1.277-.06 2.148-.262 2.913-.558.789-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.336 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.688.072-4.947s-.014-3.667-.072-4.947c-.06-1.277-.262-2.148-.558-2.913-.306-.789-.718-1.459-1.384-2.126-.667-.666-1.336-1.079-2.126-1.384-.765-.296-1.636-.499-2.913-.558-1.28-.06-1.688-.072-4.947-.072zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-nbdk-green transition-colors duration-300"
                aria-label="Twitter"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>
            </div>
            <p className="text-sm text-white/70">Contact us at: xavierceceda@gmail.com</p>
          </div>
        </div>
        
        <div className="border-t border-white/20 pt-6 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-white/70 mb-4 md:mb-0">
            &copy; {currentYear} Napas Bumi Detak Kehidupan. All rights reserved.
          </div>
          <div className="flex space-x-6">
            <a href="#" className="text-sm text-white/70 hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-sm text-white/70 hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="text-sm text-white/70 hover:text-white transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
