import React, { useState } from "react";
import { Footer } from "./Footer";
import "./Flight.css"; // Import the CSS file
import { Header } from "./Header";

export const AddAirPort = () => {
  const [flightData, setFlightData] = useState({
    airportCode: null,
    name: "",
    city: "",
    country: "",
    contactInfo: "",

  });

  const handleChange = (e) => {
    setFlightData({
      ...flightData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform any necessary actions with the flightData
    console.log(flightData);
  };

  return (
    <div>
        <Header />
                <div className="container">
            
            <form className = "form" onSubmit={handleSubmit}>
                <label className="label">
                AIRPORT CODE :
                <input className="input"
                    type="number"
                    name="flightId"
                    value={flightData.flightId || ""}
                    onChange={handleChange}
                />
                </label>

                <label className="label">
                NAME :
                <input className="input"
                    type="number"
                    name="airportCode"
                    value={flightData.airportCode || ""}
                    onChange={handleChange}
                />
                </label>

                <label className="label">
                CITY
                <input className="input"
                    type="text"
                    name="flightStatus"
                    value={flightData.flightStatus}
                    onChange={handleChange}
                />
                </label>

                <label className="label">
                COUNTRY :
                <input className="input"
                    type="text"
                    name="totalNumOfSeat"
                    value={flightData.totalNumOfSeat}
                    onChange={handleChange}
                />
                </label>

                <label className="label">
                CONTACT INFO:
                <input className="input"
                    type="text"
                    name="bookedSeat"
                    value={flightData.bookedSeat}
                    onChange={handleChange}
                />
                </label>

                

                <button className= "button" type="submit">ADD AIRPORT</button>
                

            </form>

            
            </div>
            <Footer />
    </div>
    
  );
};
