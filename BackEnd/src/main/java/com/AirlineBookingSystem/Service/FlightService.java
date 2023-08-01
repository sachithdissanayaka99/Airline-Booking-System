package com.AirlineBookingSystem.Service;

import com.AirlineBookingSystem.Dto.FlightDto;
import com.AirlineBookingSystem.Model.FlightModel;
import com.AirlineBookingSystem.Repository.FlightRepository;
import com.AirlineBookingSystem.Utill.VariableList;
import jakarta.transaction.Transactional;
import lombok.AllArgsConstructor;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@Transactional
@AllArgsConstructor
public class FlightService {

    private FlightRepository flightRepository;

    private ModelMapper modelMapper;
    public String saveFlight(FlightDto flightDto){
        if (flightRepository.existsById(flightDto.getFlightId())){
            return VariableList.RSP_DUPLICATED;
        }else {

            flightRepository.save(modelMapper.map(flightDto, FlightModel.class));
            return VariableList.RSP_SUCCESS;

        }
    }

    public String updateFlight(FlightDto flightDto) {
        if (flightRepository.existsById(flightDto.getFlightId())) {
            flightRepository.save(modelMapper.map(flightDto,FlightModel.class));
            return VariableList.RSP_SUCCESS;
        } else {
            return VariableList.R$P_NO_DATA_FOUND;
        }

    }

    public List<FlightDto> getAllFlight(){
        List<FlightModel> flightList= flightRepository.findAll();
        return modelMapper.map(flightList, new TypeToken<ArrayList<FlightDto>>(){

        }.getType());
    }

    //Made change by hirushi to get available flights
    public List<FlightDto> getAvailableFlights(String country) {
        List<FlightModel> allFlights = flightRepository.findAll();
        List<FlightModel> availableFlights = new ArrayList<>();

        for (FlightModel flight : allFlights) {
            // Convert bookedSeat and totalNumOfSeat to numeric types
            int bookedSeats = Integer.parseInt(String.valueOf(flight.getBookedSeat()));
            int totalSeats = Integer.parseInt(String.valueOf(flight.getTotalNumOfSeat()));

            // Check if there are available seats on the flight and the country matches
            if (bookedSeats < totalSeats && flight.getCountry().equals(country)) {
                availableFlights.add(flight);
            }
        }

        // Convert the available flights to DTOs and return
        return modelMapper.map(availableFlights, new TypeToken<List<FlightDto>>() {}.getType());
    }

    public FlightModel getFlightById(int flightId) {
        return flightRepository.findById(flightId).orElse(null);
    }

    public FlightModel saveFlight(FlightModel flight) {
        return flightRepository.save(flight);
    }



    public String deleteFlight(int flightId){
        if (flightRepository.existsById(flightId)){
            flightRepository.deleteById(flightId);
            return VariableList.RSP_SUCCESS;
        }else {
            return VariableList.R$P_NO_DATA_FOUND;
        }
    }
}
