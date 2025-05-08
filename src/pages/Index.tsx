
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Calendar, ChevronDown, Clock } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScheduleSection from "@/components/ScheduleSection";
import TeamSection from "@/components/TeamSection";
import GallerySection from "@/components/GallerySection";
import CountdownTimer from "@/components/CountdownTimer";

const Index = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  
  // Add scroll event listener to track scrolling for navbar transparency
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Form submission handling
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.currentTarget as HTMLFormElement;
    const formData = new FormData(form);
    
    // Here you would typically send this data to a server
    // For now, we'll just log it and redirect to email
    console.log("Form submitted to xavierceceda@gmail.com");
    console.log("Name:", formData.get("name"));
    console.log("Email:", formData.get("email"));
    console.log("Message:", formData.get("message"));
    
    // Redirect to email client
    window.location.href = `mailto:xavierceceda@gmail.com?subject=NBDK Show Inquiry&body=Name: ${formData.get("name")}%0D%0AMessage: ${formData.get("message")}`;
    
    // Clear form
    form.reset();
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar isScrolled={isScrolled} />
      
      {/* Hero Section with Countdown */}
      <section id="home" className="hero min-h-screen flex items-center justify-center text-white pt-20 bg-cover bg-center bg-fixed" style={{ backgroundImage: "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('/lovable-uploads/2d09a040-d5c3-4e45-b438-b7a8615ebafa.png')" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="floating mb-8">
            <div className="w-40 h-40 mx-auto rounded-full bg-nbdk-green/30 border-4 border-nbdk-green/50 flex items-center justify-center">
              <div className="w-32 h-32 rounded-full bg-nbdk-green/40 border-4 border-nbdk-green-light/50 flex items-center justify-center overflow-hidden">
                <img 
                  src="/lovable-uploads/2d09a040-d5c3-4e45-b438-b7a8615ebafa.png" 
                  alt="NBDK Logo" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-pulse-slow text-shadow">
            Napas Bumi<br />Detak Kehidupan
          </h1>
          <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto text-shadow-sm">
            An extraordinary celebration of nature's rhythm through music, dance, and art. 
            Presented by our talented students.
          </p>
          
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-16">
            <a 
              href="#tickets" 
              className="bg-nbdk-green hover:bg-nbdk-green-dark text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300 transform hover:scale-105 shadow-lg"
            >
              Get Tickets
            </a>
            <a 
              href="#about" 
              className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white font-bold py-3 px-8 rounded-full border-2 border-white/50 text-lg transition duration-300 transform hover:scale-105 shadow-lg flex items-center gap-2"
            >
              Learn More 
              <ChevronDown className="w-5 h-5 animate-bounce" />
            </a>
          </div>
          
          {/* Countdown Timer */}
          <div className="max-w-4xl mx-auto">
            <h3 className="text-xl mb-6 flex items-center justify-center gap-2">
              <Clock className="w-5 h-5" />
              Show Starts In:
            </h3>
            <CountdownTimer targetDate="May 27, 2025" />
          </div>
        </div>
      </section>
      
      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-b from-nbdk-blue-dark to-nbdk-blue text-white">
        <div className="container mx-auto px-4">
          <h2 className="section-title">About The Show</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <img 
                  src="/images/about-show.jpg" 
                  alt="About the Show" 
                  className="rounded-lg shadow-xl"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">Celebrating Earth's Rhythm</h3>
                <p className="mb-4">
                  "Napas Bumi Detak Kehidupan" (Earth's Breath, Life's Heartbeat) is an immersive 
                  theatrical experience that celebrates the profound connection between human existence
                  and the natural world.
                </p>
                <p className="mb-4">
                  Through captivating performances of music, dance, and visual arts, our talented 
                  students explore the delicate balance of our ecosystem and inspire action toward 
                  environmental stewardship.
                </p>
                <p>
                  Join us for a transformative evening that will leave you with a renewed appreciation 
                  for the rhythm of nature and our place within it.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Schedule Section */}
      <ScheduleSection />
      
      {/* Gallery Section */}
      <GallerySection />
      
      {/* Team Section */}
      <TeamSection />
      
      {/* Tickets Section */}
      <section id="tickets" className="py-20 bg-gradient-to-b from-nbdk-blue/90 to-nbdk-blue-dark text-white">
        <div className="container mx-auto px-4">
          <h2 className="section-title">Get Your Tickets</h2>
          <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-xl">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex flex-col justify-center">
                <h3 className="text-2xl font-bold mb-2">Show Details</h3>
                <div className="flex items-center gap-2 mb-3">
                  <Calendar className="w-5 h-5 text-nbdk-green-light" />
                  <span>May 27-28, 2025</span>
                </div>
                <div className="flex items-center gap-2 mb-3">
                  <Clock className="w-5 h-5 text-nbdk-green-light" />
                  <span>7:00 PM (Doors open at 6:30 PM)</span>
                </div>
                <div className="mb-3">
                  <h4 className="font-semibold mb-1">Location:</h4>
                  <p>School Auditorium</p>
                </div>
                <div className="mb-6">
                  <h4 className="font-semibold mb-1">Ticket Price:</h4>
                  <p>Students: $5 | Adults: $10 | Family Pack (4 tickets): $30</p>
                </div>
                <Button 
                  type="submit" 
                  className="w-full bg-nbdk-green hover:bg-nbdk-green-dark text-white font-bold shadow-lg"
                  onClick={() => window.location.href = `mailto:xavierceceda@gmail.com?subject=NBDK Show Ticket Request&body=I would like to request tickets for the NBDK show.`}
                >
                  Request Tickets
                </Button>
              </div>
              <div className="hidden md:block">
                <img 
                  src="/lovable-uploads/2d09a040-d5c3-4e45-b438-b7a8615ebafa.png" 
                  alt="NBDK Logo" 
                  className="w-full max-w-xs mx-auto rounded-full border-4 border-white/30 shadow-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section id="contact" className="py-20 bg-nbdk-neutral-dark text-white">
        <div className="container mx-auto px-4">
          <h2 className="section-title">Contact Us</h2>
          <div className="max-w-2xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">Your Name</label>
                <Input 
                  id="name"
                  name="name"
                  type="text" 
                  className="bg-white/10 border-white/30"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">Your Email</label>
                <Input 
                  id="email"
                  name="email"
                  type="email" 
                  className="bg-white/10 border-white/30"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                <Textarea 
                  id="message"
                  name="message"
                  className="bg-white/10 border-white/30 min-h-32"
                  placeholder="Your message or question"
                  required
                />
              </div>
              <div>
                <Button 
                  type="submit"
                  className="w-full bg-nbdk-green hover:bg-nbdk-green-dark text-white font-semibold py-3"
                >
                  Send Message
                </Button>
                <p className="text-xs text-center mt-2 text-nbdk-neutral-light/70">
                  Your message will be sent to: xavierceceda@gmail.com
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
