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
      if (response.data.access_token) {
        // Stores the user object in local storage if a token is present in the response
        localStorage.setItem("user", JSON.stringify(response.data));
      }
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

const auth = {
  addFlight,
  deleteFlight,
};

export default auth;

