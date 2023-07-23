import React, { useState } from "react";
import FlightService from "../services/flight_service";
import { Footer } from "./Footer";
import "./Flight.css"; // Import the CSS file
import { Header } from "./Header";
import { useNavigate } from "react-router-dom";

export const Flight = () => {
  
  const [flightId, setFlightId] = useState("");
  const [airportCode, setAirportCode] = useState("");
  const [flightStatus, setFlightStatus] = useState("");
  const [totalNumOfSeat, setTotalNumOfSeat] = useState("");
  const [bookedSeat, setBookedSeat] = useState("");
  const [arrivalTime,setArrivalTime] = useState("");
  const [departureTime,setdepartureTime] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await FlightService.addFlight(flightId, airportCode, flightStatus, totalNumOfSeat,bookedSeat,arrivalTime,departureTime).then(
        (response) => {
          console.log("Flight Added", response);
          navigate("/flight");
          window.location.reload();
        },
        (error) => {
          console.log(error);
        }
      );
    } catch (err) {
      alert(err);
    }
  };

  return (
    <div>
        <Header />
                <div className="container">
            
            <form className = "form" onSubmit={handleSubmit}>
                <label className="label">
                FLIGHT ID:
                <input className="input"
                    type="number"
                    name="flightId"
                    onChange={(input) => setFlightId(input.target.value)}
                />
                </label>

                <label className="label">
                AIRPORT CODE:
                <input className="input"
                    type="number"
                    name="airportCode"  
                    onChange={(input) => setAirportCode(input.target.value)}
                />
                </label>

                <label className="label">
                FLIGHT STATUS:
                <input className="input"
                    type="text"
                    name="flightStatus"
                    onChange={(input) => setFlightStatus(input.target.value)}
                />
                </label>

                <label className="label">
                TOTAL NUMBER OF SEAT:
                <input className="input"
                    type="text"
                    name="totalNumOfSeat"
                    onChange={(input) => setTotalNumOfSeat(input.target.value)}
                />
                </label>

                <label className="label">
                BOOKED SEAT:
                <input className="input"
                    type="text"
                    name="bookedSeat"
                    onChange={(input) => setBookedSeat(input.target.value)}
                />
                </label>

                <label className="label">
                ARRIVAL TIME:
                <input className="input"
                    type="text"
                    name="arrivalTime"
                    onChange={(input) => setArrivalTime(input.target.value)}
                />
                </label>

                <label className="label">
                DEPARTURE TIME:
                <input className="input"
                    type="text"
                    name="departureTime"
                    onChange={(input) => setdepartureTime(input.target.value)}
                />
                </label>

                <button className= "button" type="submit">ADD FLIGHT</button>
                

            </form>

            
            </div>
            <Footer />
    </div>
    
  );
};
