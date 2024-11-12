import React, { useState } from 'react';
import Footer from './Footer';

const Home = () => {
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleNotify = () => {
    if (phoneNumber) {
      alert('You will be notified when we launch!');
      // Add API call to save phone number if needed
    } else {
      alert('Please enter a valid phone number');
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-center p-4">
      {/* Logo Section */}
      <div className="flex space-x-4 mb-6">
        <img src="/path-to-urjacart-logo.png" alt="Urjacart Logo" className="h-10" />
        <img src="/path-to-waaree-logo.png" alt="Waaree Logo" className="h-10" />
      </div>

      {/* Coming Soon Title */}
      <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-500 via-yellow-400 to-green-400 text-transparent bg-clip-text">
        COMING SOON.
      </h1>

      {/* Description */}
      <p className="mt-4 text-lg text-gray-700 max-w-md">
        Empowering Solar Solutions! Your go-to platform for all solar installation essentials and electric goods is on the way.
      </p>

      {/* Input Section */}
      <div className="mt-8 flex items-center space-x-2">
        <input
          type="tel"
          placeholder="Please enter your phone number"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          className="p-3 w-64 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={handleNotify}
          className="p-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition duration-300"
        >
          Notify Me
        </button>
      </div>

      {/* Note */}
      <p className="mt-2 text-sm text-gray-500">Enter phone number to not miss any updates!</p>
        <Footer/>
      
    </div>
  );
};

export default Home;
