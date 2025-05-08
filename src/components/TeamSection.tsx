
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface TeamMember {
  name: string;
  role: string;
  photo: string;
  bio: string;
}

const TeamSection = () => {
  // Sample team members
  const teamMembers: TeamMember[] = [
    {
      name: "Sarah Johnson",
      role: "Show Director",
      photo: "/images/team-1.jpg",
      bio: "Sarah has been directing school productions for over 10 years with a passion for environmental storytelling."
    },
    {
      name: "Miguel Sanchez",
      role: "Music Director",
      photo: "/images/team-2.jpg",
      bio: "An accomplished composer, Miguel brings natural soundscapes to life with our student orchestra."
    },
    {
      name: "Aisha Patel",
      role: "Choreographer",
      photo: "/images/team-3.jpg",
      bio: "Aisha's innovative movements capture the essence of earth's rhythms through contemporary dance."
    },
    {
      name: "David Chen",
      role: "Set Designer",
      photo: "/images/team-4.jpg", 
      bio: "David creates immersive environments using sustainable materials and cutting-edge projection techniques."
    },
    {
      name: "Olivia Wilson",
      role: "Costume Designer",
      photo: "/images/team-5.jpg",
      bio: "Olivia's eco-friendly costume designs transform students into living embodiments of natural elements."
    },
    {
      name: "Jackson Brown",
      role: "Technical Director",
      photo: "/images/team-6.jpg",
      bio: "Jackson manages all technical aspects of the show, from lighting to sound engineering."
    }
  ];

  return (
    <section id="team" className="py-20 bg-gradient-to-b from-nbdk-neutral-light to-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-nbdk-blue-dark">Creative Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 border border-nbdk-neutral-light/50 hover:shadow-xl transition duration-300 flex flex-col items-center text-center"
            >
              <Avatar className="w-32 h-32 border-4 border-nbdk-green/20 mb-4">
                <AvatarImage src={member.photo} alt={member.name} />
                <AvatarFallback className="bg-nbdk-green/20 text-nbdk-green-dark text-2xl">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
              </Avatar>
              <h3 className="text-xl font-bold text-nbdk-blue-dark mb-1">{member.name}</h3>
              <p className="text-nbdk-green font-medium mb-3">{member.role}</p>
              <p className="text-nbdk-neutral">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
