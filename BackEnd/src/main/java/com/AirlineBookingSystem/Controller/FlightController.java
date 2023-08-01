package com.AirlineBookingSystem.Controller;


import com.AirlineBookingSystem.Dto.FlightDto;
import com.AirlineBookingSystem.Dto.ResponseDto;
import com.AirlineBookingSystem.Model.FlightModel;
import com.AirlineBookingSystem.Service.FlightService;
import com.AirlineBookingSystem.Utill.VariableList;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "api/v1/flight")
public class FlightController {

    @Autowired
    private FlightService flightService;

    @Autowired
    private ResponseDto responseDto;

    @PostMapping(value = "/saveFlight")
    public ResponseEntity saveFlight(@RequestBody FlightDto flightDto) {

        try {
            String res = flightService.saveFlight(flightDto);
            if (res.equals("00")) {
                responseDto.setCode(VariableList.RSP_SUCCESS);
                responseDto.setMessage("Success");
                responseDto.setContent(flightDto);
                return new ResponseEntity(responseDto, HttpStatus.ACCEPTED);
            } else if (res.equals("06 ")) {

                responseDto.setCode(VariableList.RSP_DUPLICATED);
                responseDto.setMessage("All ready added");
                responseDto.setContent(flightDto);
                return new ResponseEntity(responseDto, HttpStatus.BAD_REQUEST);

            } else {

                responseDto.setCode(VariableList.RSP_FAIL);
                responseDto.setMessage("Error");
                responseDto.setContent(null);
                return new ResponseEntity(responseDto, HttpStatus.BAD_REQUEST);

            }
        } catch (Exception ex) {

            responseDto.setCode(VariableList.RSP_ERROR);
            responseDto.setMessage(ex.getMessage());
            responseDto.setContent(null);
            return new ResponseEntity(responseDto, HttpStatus.INTERNAL_SERVER_ERROR);

        }

    }

    @PutMapping(value = "/updateFlight")
    public ResponseEntity updateFlight(@RequestBody FlightDto flightDto) {

        try {
            String res = flightService.updateFlight(flightDto);
            if (res.equals("00")) {
                responseDto.setCode(VariableList.RSP_SUCCESS);
                responseDto.setMessage("Success");
                responseDto.setContent(flightDto);
                return new ResponseEntity(responseDto, HttpStatus.ACCEPTED);
            } else if (res.equals("06 ")) {

                responseDto.setCode(VariableList.RSP_DUPLICATED);
                responseDto.setMessage("Flight not funded");
                responseDto.setContent(flightDto);
                return new ResponseEntity(responseDto, HttpStatus.BAD_REQUEST);

            } else {

                responseDto.setCode(VariableList.RSP_FAIL);
                responseDto.setMessage("Error");
                responseDto.setContent(null);
                return new ResponseEntity(responseDto, HttpStatus.BAD_REQUEST);

            }
        } catch (Exception ex) {

            responseDto.setCode(VariableList.RSP_ERROR);
            responseDto.setMessage(ex.getMessage());
            responseDto.setContent(null);
            return new ResponseEntity(responseDto, HttpStatus.INTERNAL_SERVER_ERROR);

        }

    }

    @GetMapping("/getAllFlight")
    public ResponseEntity getAllFlight(){
        try {

            List<FlightDto> flightDtoList = flightService.getAllFlight();
            responseDto.setCode(VariableList.RSP_SUCCESS);
            responseDto.setMessage("Success");
            responseDto.setContent(flightDtoList);
            return new ResponseEntity(responseDto, HttpStatus.ACCEPTED);
        }catch (Exception ex){
            responseDto.setCode(VariableList.RSP_ERROR);
            responseDto.setMessage(ex.getMessage());
            responseDto.setContent(null);
            return new ResponseEntity(responseDto, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    //Edited by Hirushi
    @GetMapping("/available-flights")
    public List<FlightDto> getAvailableFlights(@RequestParam("country") String country) {
        return flightService.getAvailableFlights(country);
    }



    @DeleteMapping(value = "/deleteFlight/{flightId}")
    public ResponseEntity deleteFlight(@PathVariable int flightId) {

        try {
            String res = flightService.deleteFlight(flightId);
            if (res.equals("00")) {
                responseDto.setCode(VariableList.RSP_SUCCESS);
                responseDto.setMessage("Success");
                responseDto.setContent(null);
                return new ResponseEntity(responseDto, HttpStatus.ACCEPTED);
            } else {

                responseDto.setCode(VariableList.RSP_FAIL);
                responseDto.setMessage("No Flight");
                responseDto.setContent(null);
                return new ResponseEntity(responseDto, HttpStatus.BAD_REQUEST);

            }
        } catch (Exception ex) {

            responseDto.setCode(VariableList.RSP_ERROR);
            responseDto.setMessage(ex.getMessage());
            responseDto.setContent(null);
            return new ResponseEntity(responseDto, HttpStatus.INTERNAL_SERVER_ERROR);

        }

    }


    @PostMapping("/book-flight/{flightId}")
    public ResponseEntity<String> bookFlight(@PathVariable int flightId) {
        try {
            FlightModel flight = flightService.getFlightById(flightId);
            if (flight == null) {
                return new ResponseEntity<>("Flight not found.", HttpStatus.NOT_FOUND);
            }

            // Check if there are available seats on the flight
            int bookedSeats = Integer.parseInt(String.valueOf(flight.getBookedSeat()));
            int totalSeats = Integer.parseInt(String.valueOf(flight.getTotalNumOfSeat()));
            if (bookedSeats >= totalSeats) {
                return new ResponseEntity<>("No available seats on this flight.", HttpStatus.BAD_REQUEST);
            }
            // Update booked and available seats
            flight.setBookedSeat(bookedSeats + 1);
            flight.setTotalNumOfSeat(totalSeats - 1);

            flightService.saveFlight(flight);
            return new ResponseEntity<>("Flight successfully booked.", HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>("Failed to book the flight. Please try again later.", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }


}
