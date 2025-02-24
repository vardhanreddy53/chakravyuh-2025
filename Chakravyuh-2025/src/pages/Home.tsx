import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import ChakravyuhAnimation from "../components/ChakravyuhAnimation";
import { Sword, Scroll } from "lucide-react";

const Home = () => {
  const titleRef = useRef(null);

  const sponsors = [
    {
      name: "Supraja Technologies",
      image: "images/st.jpg",
      description: "Leading provider of cybersecurity solutions and training.",
      type: "Knowledge Partner",
      social: "https://suprajatechnologies.com/index.php",
    },
    {
      name: "Computer Science Department",
      image: "images/gctc3.jpg",
      description:
        "Department of Computer Science,Geethanjali College of Engineering and Technology.",
      type: "Academic Partner",
      social: "https://www.gcet.edu.in/cse",
    },
    {
      name: "IEEE CSe GCET Student Branch",
      image: "images/logocomputer.jpg",
      description:
        "IEEE Computer Society Student Branch,Geethanjali College of Engineering and Technology ",
      type: "Technical Partner",
      social: "https://www.instagram.com/ieeecs_gcetsb/",
    },
  ];
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-title-reveal");
          }
        });
      },
      { threshold: 0.1 }
    );

    if (titleRef.current) {
      observer.observe(titleRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative min-h-screen bg-mythological text-white overflow-hidden">
      <div
        className="absolute inset-0 bg-chakra-pattern bg-cover bg-center opacity-10"
        style={{ filter: "sepia(100%) hue-rotate(340deg)" }}
      />
      <ChakravyuhAnimation />
      <div className="relative z-10 container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <div ref={titleRef} className="relative mb-6 perspective-1000">
            <h1 className="text-6xl md:text-8xl font-bold text-saffron tracking-wider">
              चक्रव्यूह
            </h1>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gold animate-glow">
            Chakravyuh CTF
          </h2>
          <p className="text-2xl md:text-3xl mb-8 text-saffron/90 font-spectral">
            Enter the Sacred Battlefield of Digital Warriors
          </p>
          <p className="text-lg mb-12 text-gray-300 font-spectral">
            As in the great epic Mahabharata, where Abhimanyu faced the mighty
            Chakravyuh, prepare yourself for an epic three-day battle of wisdom,
            strategy, and skill.
          </p>
          <div className="flex flex-col md:flex-row gap-6 justify-center mb-16">
            <Link to="/register" className="btn-primary group">
              <Sword className="w-6 h-6 group-hover:rotate-45 transition-transform duration-500" />
              Join the Battle
            </Link>
            <Link to="/schedule" className="btn-secondary group">
              <Scroll className="w-6 h-6 group-hover:-translate-y-1 transition-transform duration-500" />
              Sacred Timeline
            </Link>
          </div>
          <div className="mt-24">
            <h2 className="text-3xl font-bold mb-8 text-saffron">
              Our Divine Allies
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {sponsors.map((sponsor, index) => (
                <div
                  key={index}
                  className="relative group transform hover:scale-105 transition-transform duration-300"
                >
                  <div className="relative bg-darkBrown/80 backdrop-blur-sm rounded-lg overflow-hidden border border-saffron/20">
                    <div className="relative h-32">
                      <Link
                        to={sponsor.social}
                        className="block w-full h-full relative z-10"
                      >
                        <img
                          src={sponsor.image}
                          alt={sponsor.name}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-darkBrown via-transparent to-transparent"></div>
                      </Link>
                    </div>
                    <div className="p-4">
                      <div className="mb-1 text-gold font-medium text-sm">
                        {sponsor.type}
                      </div>
                      <h3 className="text-lg font-bold text-saffron mb-1">
                        {sponsor.name}
                      </h3>
                    </div>
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

export default Home;