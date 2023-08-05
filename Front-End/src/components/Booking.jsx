import { Footer } from "./Footer";
import "./Booking.css"; // Import the CSS file
import { Nav } from "./Nav";
import auth from "../services/airports_service";
import { useNavigate, useLocation } from 'react-router-dom';
import React, { useState, useEffect } from "react";

export const Booking = () => {
  const [country, setCountry] = useState("");
  const [bookingDate, setBookingDate] = useState("");
  const [flights, setFlights] = useState([]);
  const [successMessage, setSuccessMessage] = useState(""); // Add successMessage state

  useEffect(() => {
    fetchFlights();
  }, []);

  const fetchFlights = async () => {
    try {
      const fetchedFlights = await auth.fetchAvailableFlights();
      setFlights(fetchedFlights);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "country":
        setCountry(value);
        break;
      case "bookingDate":
        setBookingDate(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const fetchedFlights = await auth.fetchAvailableFlights(
        country,
        bookingDate
      );
      setFlights(fetchedFlights);
      setSuccessMessage("Flights successfully fetched!");
    } catch (error) {
      console.log(error);
    }
  };

  const navigate = useNavigate();
  const location = useLocation();

  const handleBookNow = (flight) => {
    navigate("/bookingForm", { state: { flight } });
  };

  return (
    <div>
      <Nav />
      <div className="container">
        {successMessage && (
          <div className="success-message">{successMessage}</div>
        )}
        <form className="form" onSubmit={handleSubmit}>
          <label className="label">
            COUNTRY:
            <input
              className="input"
              type="text"
              name="country"
              value={country}
              onChange={handleChange}
            />
          </label>

          <label className="label">
            BOOKING DATE:
            <input
              className="input"
              type="date"
              name="bookingDate"
              value={bookingDate}
              onChange={handleChange}
            />
          </label>

          <button className="button" type="submit">
            SEARCH
          </button>
        </form>

        <div className="flights-container">
          {flights.length > 0 ? (
            <div>
              <h2>Available Flights</h2>
              <table>
                <thead>
                  <tr>
                    <th>Flight ID</th>
                    <th>Airport Code</th>
                    <th>Flight Status</th>
                    <th>Total Num Of Seat</th>
                    <th>Booked Seat</th>
                    <th>Arrival Time</th>
                    <th>Departure Time</th>
                    <th>Flight Date</th>
                    <th>Departure Country</th>
                    <th>Booking</th>
                  </tr>
                </thead>
                <tbody>
                  {flights.map((flight) => (
                    <tr key={flight.flightId}>
                      <td>{flight.flightId}</td>
                      <td>{flight.airportCode}</td>
                      <td>{flight.flightStatus}</td>
                      <td>{flight.totalNumOfSeat}</td>
                      <td>{flight.bookedSeat}</td>
                      <td>{flight.arrivalTime}</td>
                      <td>{flight.departureTime}</td>
                      <td>{flight.flightDate}</td>
                      <td>{flight.departureCountry}</td>
                      <td>
                        <button
                          className="booking-button"
                          onClick={() => handleBookNow(flight)}
                        >
                          Book Now
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div>No flights available for the selected criteria.</div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};
