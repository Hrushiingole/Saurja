import React, { useState } from "react";
import axios from "axios";
import Footer from "./Footer";

const Home = () => {
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleNotify = async () => {
    if (phoneNumber.length !== 10 || !/^\d+$/.test(phoneNumber)) {
      alert("Please enter a valid 10-digit phone number");
      return;
    }

    try {
      const API_KEY =
        "patqr8qMuLNlZlixh.7dc571ce8121a384538b71623be1762acf0a681ac23885fbc47b4495d0b946ae";
      const BASE_ID = "appSVlGqhgfYWlWpI";
      const TABLE_NAME = "Contacts";

      const url = `https://api.airtable.com/v0/${BASE_ID}/${TABLE_NAME}`;

      const response = await axios.post(
        url,
        {
          records: [
            {
              fields: {
                Phone: phoneNumber,
              },
            },
          ],
        },
        {
          headers: {
            Authorization: `Bearer ${API_KEY}`,
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        alert("You will be notified when we launch!");
        setPhoneNumber(""); // Clear input after submission
      } else {
        alert("Something went wrong, please try again.");
      }
    } catch (error) {
      console.error("Error adding to Airtable:", error);
      alert("Error adding to Airtable, please check your API credentials.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-center p-4 ">
      <div className="flex space-x-4 mb-6">
        <img
          src="/path-to-urjacart-logo.png"
          alt="Urjacart Logo"
          className="h-10"
        />
        <img
          src="/path-to-waaree-logo.png"
          alt="Waaree Logo"
          className="h-10"
        />
      </div>

      <h1 className="text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gray-400 via-yellow-300 to-orange-300">
        COMING <br />
        SOON.
      </h1>

      <p className="mt-4 text-lg text-gray-700 max-w-lg">
        Empowering Solar Solutions! Your go-to platform for all solar
        installation essentials and electric goods is on the way.
      </p>

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

      <p className="mt-2 text-sm text-gray-500">
        Enter phone number to not miss any updates!
      </p>
      <Footer />
    </div>
  );
};

export default Home;
