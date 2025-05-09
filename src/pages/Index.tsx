
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
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
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
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const form = e.currentTarget as HTMLFormElement;
      const response = await fetch(form.action, {
        method: form.method,
        body: new FormData(form),
        headers: {
          'Accept': 'application/json'
        }
      });
      
      const data = await response.json();
      
      if (response.ok) {
        form.reset();
        toast({
          title: "Message sent!",
          description: "We'll get back to you as soon as possible.",
          variant: "default",
        });
      } else {
        throw new Error(data.error || "Form submission failed");
      }
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Please try again later.",
        variant: "destructive",
      });
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar isScrolled={isScrolled} />
      
      {/* Hero Section with Countdown */}
      <section id="home" className="min-h-screen flex items-center justify-center text-white pt-20" 
        style={{ 
          background: "linear-gradient(to bottom right, #243949, #517fa4)",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <img 
              src="/lovable-uploads/63ddf673-224c-4942-b29e-0b41b7e581b7.png" 
              alt="NBDK Logo" 
              className="w-40 h-40 mx-auto rounded-full border-4 border-white/30"
            />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-pulse-slow text-white">
            Napas Bumi<br />Detak Kehidupan
          </h1>
          <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto text-white">
            Join us for an unforgettable celebration of Earth and Life through art,
            music, and dance at our school's annual environmental showcase.
          </p>
          
          <div className="flex justify-center items-center gap-4 mb-16">
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
            <h3 className="text-xl mb-6 flex items-center justify-center gap-2 text-white">
              <Clock className="w-5 h-5" />
              Show Starts: May 27th
            </h3>
            <CountdownTimer targetDate="May 27, 2025" />
          </div>
        </div>
      </section>
      
      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-r from-gray-100 via-green-50 to-gray-100 text-nbdk-blue-dark">
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
      
      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-b from-gray-100 to-gray-200 text-nbdk-blue-dark">
        <div className="container mx-auto px-4">
          <h2 className="section-title">Contact Us</h2>
          <div className="max-w-2xl mx-auto">
            <form 
              action="https://formspree.io/f/xjkwoypg" 
              method="POST"
              onSubmit={handleSubmit} 
              className="space-y-6"
            >
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">Your Name</label>
                <Input 
                  id="name"
                  name="Name"
                  type="text" 
                  className="bg-white/70 border-nbdk-green/30"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">Your Email</label>
                <Input 
                  id="email"
                  name="Email"
                  type="email" 
                  className="bg-white/70 border-nbdk-green/30"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                <Textarea 
                  id="message"
                  name="Message"
                  className="bg-white/70 border-nbdk-green/30 min-h-32"
                  placeholder="Your message or question"
                  required
                />
              </div>
              <div>
                <Button 
                  type="submit"
                  className="w-full bg-nbdk-green hover:bg-nbdk-green-dark text-white font-semibold py-3"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
                <p className="text-xs text-center mt-2 text-nbdk-blue-dark/70">
                  Your message will be processed by Formspree
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
