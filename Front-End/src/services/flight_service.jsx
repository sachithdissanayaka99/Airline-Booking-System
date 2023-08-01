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

// Gets available flights relavant to country from the API
/*const getAvailableFlights = async (country) => {
  return axios
    .get(API_URL + `/available-flights?country=${country}`)
    .then((response) => {
      console.log(response);
      return response.data;
    });
};
*/
const getAvailableFlights = async (country) => {
  try {
    const response = await axios.get(`${API_URL}/available-flights`, {
      params: { country }, // Pass the country parameter in the request
    });
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch available flights. Please try again later.");
  }
};

const FlightService = {
  getAvailableFlights,
}


const bookFlight = (flightId) => {
  return axios.post(API_URL + `/book-flight/${flightId}`);
};


const auth = {
  addFlight,
  updateFlight,
  deleteFlight,
  getAllFlights,
  getAvailableFlights,
  bookFlight,
};


export default auth;
