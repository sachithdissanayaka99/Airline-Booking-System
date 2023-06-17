import axios from "axios";

const API_URL = "http://localhost:8080/api/v1/flight";

// Registers a user by making a POST request to the API
const addFlight = (flightId, airportCode, flightStatus, totalNumOfSeat, bookedSeat, arrivalTime, departureTime) => {
  return axios
    .post(API_URL + "/saveFlight", {
      flightId,
      airportCode,
      flightStatus,
      totalNumOfSeat,
      bookedSeat,
      arrivalTime,
      departureTime,
    })
    .then((response) => {
      console.log(response);
      return response.data;
    });
};

// Updates a flight by making a PUT request to the API
const updateFlight = (flightId, airportCode, flightStatus, totalNumOfSeat, bookedSeat, arrivalTime, departureTime) => {
  return axios
    .put(API_URL + `/updateFlight/${flightId}`, {
      airportCode,
      flightStatus,
      totalNumOfSeat,
      bookedSeat,
      arrivalTime,
      departureTime,
    })
    .then((response) => {
      console.log(response);
      return response.data;
    });
};

// Deletes a flight by making a DELETE request to the API
const deleteFlight = (flightId) => {
  return axios.delete(API_URL + `/deleteFlight/${flightId}`).then((response) => {
    console.log(response);
    return response.data;
  });
};

// Gets all flights from the API
const getAllFlights = () => {
  return axios.get(API_URL + "/getAllFlight").then((response) => {
    console.log(response);
    return response.data;
  });
};

const auth = {
  addFlight,
  updateFlight,
  deleteFlight,
  getAllFlights,
};

export default auth;
