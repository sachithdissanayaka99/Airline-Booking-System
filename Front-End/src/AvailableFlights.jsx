import React, { useState, useEffect } from "react";
import FlightService from "./services/flight_service";
import axios from "axios"; 
import { useLocation } from "react-router-dom";
import { Flight } from "./Flight";
import "./AvailableFlights.css";
import { Footer } from "./Footer";
import { Nav } from "./Nav";

const AvailableFlights = () => {
  const [flights, setFlights] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const location = useLocation();
  const country = new URLSearchParams(location.search).get("country");

  useEffect(() => {
    // Fetch available flights when the component mounts
    fetchAvailableFlights();
  }, [country]); // Add country as a dependency to fetch flights when it changes

  
  const fetchAvailableFlights = async () => {
        try {
          const response = await FlightService.getAvailableFlights(country); // Pass the country as a parameter
          setFlights(response);

      if (response.data.length === 0) {
        setErrorMessage("No flights available for the selected country.");
      } else {
        setErrorMessage("");
      }
    } catch (error) {
      console.log(error);
      setErrorMessage("Failed to fetch available flights. Please try again later.");
    }
  };

  const handleBookFlight = async (flightId) => {
    try {
      // Make an API call to the backend to book the flight
      await FlightService.bookFlight(flightId);
  
      // After successful booking, refetch the available flights to update the data
      fetchAvailableFlights();
    } catch (error) {
      console.log(error);
      setErrorMessage("Failed to book the flight. Please try again later.");
    }
  };
  

  return (
    <div  className = "AvailableFlightsContainer">
      <Nav />
      <div className="AvailableFlightsTitle">
        <h2 className="AvailableFlightsTitle">Available Flights</h2>
      </div>

      {errorMessage ? (
        <p className= "error-message">{errorMessage}</p>
      ) : (
        flights.map((flight) => (
          <div key={flight.id}>
            <p>Flight ID: {flight.flightId}</p>
            <p>Airport Code: {flight.airportCode}</p>
            <p>Flight Status: {flight.flightStatus}</p>
            <p>Total Number of Seats: {flight.totalNumOfSeat}</p>
            <p>Booked Seats: {flight.bookedSeat}</p>
            <p>Arrival Time: {flight.arrivalTime}</p>
            <p>Departure Time: {flight.departureTime}</p>
            <button onClick={() => handleBookFlight(flight.id)}>Book</button>
          </div>
        ))
      )}
      <Footer />
    </div>
  );
};

export default AvailableFlights;
