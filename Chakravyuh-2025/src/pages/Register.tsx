import React, { useState } from 'react';
import { Sword, Shield, X } from 'lucide-react';

const Register = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="min-h-screen bg-mythological text-white relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1606487469852-39fb8c096e36?q=80&w=2000')] bg-cover bg-center opacity-10"
        style={{ filter: 'sepia(100%) hue-rotate(340deg)' }}
      />
      
      <div className="absolute inset-0 bg-gradient-to-b from-darkBrown/50 to-darkBrown" />
      
      <div className="relative z-10 container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto text-center">
          {/* Sanskrit Symbol */}
          <div className="text-6xl mb-6 text-saffron war-drums">॥</div>
          
          <h1 className="text-5xl font-bold mb-4 text-saffron animate-glow">
            Take Your Sacred Oath
          </h1>
          
          <h2 className="text-3xl font-bold mb-8 text-gold">
            Join the Sacred Battle
          </h2>
          
          <div className="mb-12 space-y-6 text-gray-300">
            <p className="text-xl">
              "As Krishna guided Arjuna, let wisdom guide your path through this digital battlefield."
            </p>
            <p className="text-lg">
              Prepare yourself for an epic journey through the realms of cybersecurity.
              Test your skills, learn from the masters, and emerge victorious.
            </p>
          </div>
          
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-saffron via-gold to-saffron rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000"></div>
            <button
              onClick={() => setShowForm(true)}
              className="relative btn-primary group w-full md:w-auto sacred-oath-btn"
            >
              <Sword className="w-6 h-6 group-hover:rotate-12 transition-transform duration-500" />
              <span>Swear Your Sacred Oath</span>
              <Shield className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-500" />
              <div className="flame-effect"></div>
            </button>
          </div>
        </div>
      </div>

      {/* Modal with External Google Form Link */}
      {showForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-darkBrown/80 backdrop-blur-sm">
          <div className="relative w-full max-w-lg bg-white p-6 rounded-lg shadow-2xl text-darkBrown text-center">
            <button
              onClick={() => setShowForm(false)}
              className="absolute -top-4 -right-4 w-8 h-8 flex items-center justify-center bg-saffron text-darkBrown rounded-full hover:bg-gold transition-colors duration-300"
            >
              <X className="w-5 h-5" />
            </button>
            
            <h2 className="text-2xl font-bold mb-4">Proceed to Swear Your Oath</h2>
            <p className="text-lg mb-6">Click below to open the form and take your sacred oath.</p>
            
            <a 
              href="https://docs.google.com/forms/d/14CebDnA4wOPzYEAHbu0KKKBsarZKa-ekWBPIQIR9zgY/viewform?edit_requested=true" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-primary inline-block px-6 py-3 rounded-md font-bold text-white bg-saffron hover:bg-gold transition duration-300"
            >
              Open Form
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Register;
