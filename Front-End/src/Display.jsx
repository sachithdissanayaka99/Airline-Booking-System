import React, { useState } from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";
import "./Display.css";
import { useNavigate } from "react-router-dom";
import FlightService from "./services/flight_service";

export const Display = () => {
  const [flightData, setFlightData] = useState([
    {
      flightId: 1,
      airportCode: 2,
      flightStatus: "On Time",
      totalNumOfSeat: 100,
      bookedSeat: 50,
      arrivalTime: "10:00 AM",
      departureTime: "12:00 PM"
    },
    {
      flightId: 2,
      airportCode: "ABC",
      flightStatus: "On Time",
      totalNumOfSeat: 100,
      bookedSeat: 50,
      arrivalTime: "10:00 AM",
      departureTime: "12:00 PM"
    },
    {
      flightId: 3,
      airportCode: "ABC",
      flightStatus: "On Time",
      totalNumOfSeat: 100,
      bookedSeat: 50,
      arrivalTime: "10:00 AM",
      departureTime: "12:00 PM"
    },
    // Add more flight data objects here...
  ]);

  const [airportData, setAirportData] = useState([
    {
      airportCode: "ABC",
      name: "Airport 1",
      city: "City 1",
      country: "Country 1",
      contactInfo: "Contact 1"
    },
    {
      airportCode: "ABC",
      name: "Airport 1",
      city: "City 1",
      country: "Country 1",
      contactInfo: "Contact 1"
    },

    {
      airportCode: "ABC",
      name: "Airport 1",
      city: "City 1",
      country: "Country 1",
      contactInfo: "Contact 1"
    },
  
    // Add more airport data objects here...
  ]);

  const handleFlightUpdate = (flightId) => {
    // Handle flight update for the given flightId
    console.log("Flight update for ID:", flightId);
  };

  const handleFlightDelete = (flightId) => {
    FlightService.deleteFlight(flightId) // Call the deleteFlight method from 'auth'
      .then((data) => {
        console.log("Flight delete response:", data);
        // Update the flightData state by filtering out the deleted flight
        setFlightData((prevFlightData) =>
          prevFlightData.filter((flight) => flight.flightId !== flightId)
        );
      })
      .catch((error) => {
        console.error("Flight delete error:", error);
        // Handle any error that occurred during the delete request
      });
  };

  const handleAirportUpdate = (airportCode) => {
    // Handle airport update for the given airportCode
    console.log("Airport update for Code:", airportCode);
  };

  const handleAirportDelete = (airportCode) => {
    // Handle airport deletion for the given airportCode
    console.log("Airport delete for Code:", airportCode);
  };

  return (
    <div>
      <Header />
      <div className="container">
        <h2 className="h2">FLIGHT DETAILS</h2>
        <table className="table">
          <thead>
            <tr className="tr">
              <th className="th">FLIGHT ID</th>
              <th className="th">AIRPORT CODE</th>
              <th className="th">FLIGHT STATUS</th>
              <th className="th">TOTAL NUM OF SEAT</th>
              <th className="th">BOOKED SEAT</th>
              <th className="th">ARRIVAL TIME</th>
              <th className="th">DEPARTURE TIME</th>
              <th className="th">ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {flightData.map((flight) => (
              <tr className="tr" key={flight.flightId}>
                <td className="td">{flight.flightId}</td>
                <td className="td">{flight.airportCode}</td>
                <td className="td">{flight.flightStatus}</td>
                <td className="td">{flight.totalNumOfSeat}</td>
                <td className="td">{flight.bookedSeat}</td>
                <td className="td">{flight.arrivalTime}</td>
                <td className="td">{flight.departureTime}</td>
                <td className="button-container">
                  <button onClick={() => handleFlightUpdate(flight.flightId)}>UPDATE</button>
                  <button onClick={() => handleFlightDelete(flight.flightId)}>DELETE</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <h2 className="h2">AIRPORT DETAILS</h2>
        <table className="table">
          <thead>
            <tr className="tr">
              <th className="th">AIRPORT CODE</th>
              <th className="th">NAME</th>
              <th className="th">CITY</th>
              <th className="th">COUNTRY</th>
              <th className="th">CONTACT INFO</th>
              <th className="th">ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {airportData.map((airport) => (
              <tr className="tr" key={airport.airportCode}>
                <td className="td">{airport.airportCode}</td>
                <td className="td">{airport.name}</td>
                <td className="td">{airport.city}</td>
                <td className="td">{airport.country}</td>
                <td className="td">{airport.contactInfo}</td>
                <td className="button-container1">
                  <button onClick={() => handleAirportUpdate(airport.airportCode)}>UPDATE</button>
                  <button onClick={() => handleAirportDelete(airport.airportCode)}>DELETE</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Footer />
    </div>
  );
};
