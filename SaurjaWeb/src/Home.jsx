import React, { useState } from "react";
import axios from "axios";
import Footer from "./Footer";
import '../src/App.css'; // Ensure this file includes the @import

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
    <div className="min-h-screen flex flex-col items-center justify-center  text-center md:p-4 ">
      <div className="flex space-x-4 mb-6 bg-white mt-16">
        <img src="src\assets\Combined logos (4).png" alt="saurja" className=" w-60 md:w-full"/>
      </div>

      <h1
  className="md:text-8xl text-6xl font-extrabold text-transparent bg-clip-text"
  style={{
    fontFamily: 'Montserrat, sans-serif',
    fontWeight: 900,
    lineHeight: '120%',
    backgroundImage: 'linear-gradient(to left, rgb(194,237,148), rgb(249,204,141), rgb(147,175,240))',
  }}
>
  COMING <br />
  SOON.
</h1>



      <p className="mt-4 text-sm md:text-lg text-gray-700 max-w-xl px-4 md:px-0">
        Empowering Solar Solutions! Your go-to platform for all solar installation 
        essentials and electric goods is on the way.
      </p>

      <div className="mt-8 flex items-center space-x-2 md:gap-3">
        <input
          type="tel"
          placeholder="Please enter your phone number"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          className="md:p-3 p-2 w-64 md:w-96 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
        />
      <button
  onClick={handleNotify}
  style={{
    background: 'linear-gradient(to bottom, rgb(23, 63, 174), rgb(11, 34, 100))',
  }}
  className="md:py-3 py-2 px-3 md:px-5 text-white font-medium rounded-md transition duration-300 hover:brightness-110"
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
