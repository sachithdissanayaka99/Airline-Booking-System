import React, { useState } from "react";
import FlightService from "./services/flight_service";
import { Footer } from "./Footer";
import "./Booking.css"; // Import the CSS file
import { Nav } from "./Nav";
import { useNavigate } from "react-router-dom";

export const Booking = () => {
  const [tripType, setTripType] = useState("one-way");
  const [departureDate, setDepartureDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [country, setCountry] = useState("");
  const navigate = useNavigate();

  const handleCountryChange = (e) => {
    setCountry(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic to handle the form submission
    console.log("Trip Type:", tripType);
    console.log("Departure Date:", departureDate);
    console.log("Return Date:", returnDate);
    console.log("Country:", country);
    navigate("/available-flights?country=${country}"); // Navigate to the available flights page with the entered country as a parameter
  };

  

  return (
    <div>
      <Nav />
      <div className="container">
        <form className="form" onSubmit={handleSubmit}>

          <label>
              <b>Country:</b>
              
                <input
                  className="input"
                  type="text"
                  value={country}
                onChange={handleCountryChange}
                />
          </label>
          <label className="label">
            <b>Trip Type:</b>
            <select
              className="input"
              name="tripType"
              value={tripType}
              onChange={(e) => setTripType(e.target.value)}
            >
              <option value="one-way">One Way</option>
              <option value="round-trip">Round Trip</option>
            </select>
          </label>

          {tripType === "one-way" && (
            <label className="label">
              <b>Departure Date:</b>
              <input
                className="input"
                type="date"
                name="departureDate"
                value={departureDate}
                onChange={(e) => setDepartureDate(e.target.value)}
              />
            </label>
          )}

          {tripType === "round-trip" && (
            <>
              <label className="label">
                <b>Departure Date:</b>
                <input
                  className="input"
                  type="date"
                  name="departureDate"
                  value={departureDate}
                  onChange={(e) => setDepartureDate(e.target.value)}
                />
              </label>

              <label className="label">
                <b>Return Date:</b>
                <input
                  className="input"
                  type="date"
                  name="returnDate"
                  value={returnDate}
                  onChange={(e) => setReturnDate(e.target.value)}
                />
              </label>

            </>
          )}

          <button className="button" type="submit">
            Search Flights
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

