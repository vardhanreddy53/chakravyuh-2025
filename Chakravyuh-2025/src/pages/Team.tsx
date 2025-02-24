import React from "react";
import { Users } from "lucide-react";

const Team = () => {
  const facultyCoordinators = [
    {
      name: "Dr. Neha Nandal",
      role: "IEEE CS Coordinator",
      image: "images/neha.jpeg",
      social: "https://www.linkedin.com/in/neha-nandal-64a04498/",
    },
    {
      name: "Prof. Mamatha",
      role: "CyberSecurity Club Coordinator",
      image: "images/Mamatha.jpg",
      social: "https://www.linkedin.com/in/neha-nandal-64a04498/",
    },
  ];

  const studentCoordinators = [
    {
      name: "Vardhan",
      role: "IEEE CS SB Chair",
      image: "images/vardan.jpg",
      social: "https://www.linkedin.com/in/vardhanreddy53/",
    },
    {
      name: "Dhanush",
      role: "CyberSecurity Club Chair",
      image: "images/dhanush.jpg",
      social: "https://www.linkedin.com/in/dhanusherramuri/",
    },
    {
      name: "Muzammil Pasha",
      role: "CyberSecurity Club Vice Chair",
      image: "images/Muzammil.jpg",
      social: "https://www.linkedin.com/in/mohammed-muzammil-pasha-495413232/",
    },
    {
      name: "Kankati Pragnya",
      role: "CS Social media head",
      image: "images/pragnya.jpg",
      social: "https://www.linkedin.com/in/pragnya-kankati-100204254/",
    },

    {
      name: "Vignesh",
      role: "Technical Lead",
      image: "images/Vicky.jpg",
      social: "https://www.linkedin.com/in/shivanoor-vignesh-541085270/",
    },
    {
      name: "Shashank",
      role: "IEEE social media head",
      image: "images/shashkank.jpg",
      social:
        "https://www.linkedin.com/in/shashank-chepuri-26ba12278?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },

    {
      name: "Ratna Keshav",
      role: "Logistics Head",
      image: "images/Ratnakeshav .jpg",
      social:
        "https://www.linkedin.com/in/ratnakeshav-s-685523295/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    {
      name: "Shruthi",
      role: "Designing Head",
      image: "images/shruthi.jpg",
      social:
        "hhttps://www.linkedin.com/in/kanduri-shruthi-80910b2a3?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    },
    {
      name: "Rohit",
      role: "Event Coordinator",
      image: "images/Rohit.jpg",
      social:
        "https://www.linkedin.com/in/rohit-chandra-05721626b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    {
      name: "Sanjana",
      role: "Marketing Head",
      image: "images/sa.jpg",
      social: "https://www.linkedin.com/in/sanjana-uppoju-356207295/",
    },

    // {
    //   name: 'Karthik',
    //   role: 'Marketing Lead',
    //   image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1000',
    // },
    // {
    //   name: 'Sneha',
    //   role: 'Design Lead',
    //   image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1000',
    // },
  ];

  return (
    <div className="min-h-screen bg-mythological text-white pt-20">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Users className="w-16 h-16 text-saffron mx-auto mb-4" />
            <h1 className="text-5xl font-bold text-saffron mb-4 animate-glow">
              Our Sacred Warriors
            </h1>
            <p className="text-xl text-gray-300">
              Meet the team behind Chakravyuh CTF
            </p>
          </div>

          {/* Faculty Coordinators */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gold mb-8 text-center">
              Faculty Coordinators
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {facultyCoordinators.map((faculty, index) => (
                <div key={index} className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-saffron via-gold to-saffron rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000"></div>
                  <div className="relative flex items-center bg-darkBrown/80 backdrop-blur-sm p-6 rounded-lg border border-saffron/20">
                    <div className="w-32 h-32 relative mr-6">
                      <div className="absolute inset-0 bg-gradient-to-r from-saffron to-gold rounded-lg transform -rotate-6"></div>
                      <img
                        src={faculty.image}
                        alt={faculty.name}
                        className="w-full h-full object-cover rounded-lg transform rotate-3 transition-transform group-hover:rotate-0 duration-300"
                      />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-saffron mb-2">
                        <a href={faculty.social}>{faculty.name}</a>
                      </h3>
                      <p className="text-gold">{faculty.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Student Coordinators */}
          <div>
            <h2 className="text-3xl font-bold text-gold mb-8 text-center">
              Student Coordinators
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {studentCoordinators.map((student, index) => (
                <div
                  key={index}
                  className="relative group transform hover:scale-105 transition-transform duration-300"
                >
                  <div className="absolute -inset-1 bg-gradient-to-r from-saffron via-gold to-saffron rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000"></div>
                  <div className="relative bg-darkBrown/80 backdrop-blur-sm p-6 rounded-lg border border-saffron/20">
                    <div className="w-full h-48 relative mb-4">
                      <div className="absolute inset-0 bg-gradient-to-r from-saffron to-gold rounded-lg transform -rotate-3"></div>
                      <img
                        src={student.image}
                        alt={student.name}
                        className="w-full h-full object-cover rounded-lg transform rotate-3 transition-transform group-hover:rotate-0 duration-300"
                      />
                    </div>
                    <h3 className="text-xl font-bold text-saffron mb-1">
                      <a href={student.social}>{student.name}</a>
                    </h3>
                    <p className="text-gold">{student.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;