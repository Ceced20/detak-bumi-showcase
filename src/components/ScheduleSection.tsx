
import React from "react";
import { Calendar, Clock } from "lucide-react";

const ScheduleSection = () => {
  const scheduleItems = [
    {
      time: "6:30 PM",
      title: "Doors Open",
      description: "Welcome reception with light refreshments"
    },
    {
      time: "7:00 PM",
      title: "Opening Ceremony",
      description: "Welcome address and introduction to the show's theme"
    },
    {
      time: "7:15 PM",
      title: "Act I: Earth's Origins",
      description: "A dance performance depicting the formation of our planet"
    },
    {
      time: "7:40 PM",
      title: "Musical Interlude",
      description: "Symphony of natural sounds performed by our orchestra"
    },
    {
      time: "8:00 PM",
      title: "Intermission",
      description: "15-minute break with refreshments available"
    },
    {
      time: "8:15 PM",
      title: "Act II: Humanity's Impact",
      description: "A powerful dramatic performance on human-nature relationships"
    },
    {
      time: "8:45 PM",
      title: "Final Act: Harmony Restored",
      description: "A hopeful vision for the future through dance and song"
    },
    {
      time: "9:15 PM",
      title: "Closing Remarks",
      description: "Thank you and call to action"
    }
  ];

  return (
    <section id="schedule" className="py-20 bg-gradient-to-r from-nbdk-neutral-dark to-nbdk-blue-dark text-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Event Schedule</h2>
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-8">
            <Calendar className="w-5 h-5 text-nbdk-green-light" />
            <span className="text-xl">May 28, 2025</span>
          </div>
          
          <div className="relative">
            {/* Vertical timeline line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-nbdk-green/50 transform md:translate-x-px hidden md:block"></div>
            
            <div className="space-y-12 relative">
              {scheduleItems.map((item, index) => (
                <div 
                  key={index} 
                  className={`flex flex-col md:flex-row ${
                    index % 2 === 0 ? "md:flex-row-reverse" : ""
                  } items-center md:gap-10`}
                >
                  <div className="md:w-1/2 flex md:justify-end mb-4 md:mb-0">
                    <div className={`bg-white/10 backdrop-blur-sm rounded-lg p-5 border border-white/20 shadow-lg max-w-md ${
                      index % 2 === 0 ? "md:text-left" : "md:text-right"
                    }`}>
                      <div className="flex items-center gap-2 text-nbdk-green-light mb-2">
                        <Clock className="w-4 h-4" />
                        <span className="font-bold">{item.time}</span>
                      </div>
                      <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                      <p className="text-white/80">{item.description}</p>
                    </div>
                  </div>
                  
                  {/* Timeline marker */}
                  <div className="flex items-center justify-center md:w-0 md:relative md:left-px">
                    <div className="w-10 h-10 rounded-full bg-nbdk-green flex items-center justify-center shadow-lg z-10">
                      <span className="text-white font-bold">{index + 1}</span>
                    </div>
                  </div>
                  
                  <div className="md:w-1/2 hidden md:block"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScheduleSection;
