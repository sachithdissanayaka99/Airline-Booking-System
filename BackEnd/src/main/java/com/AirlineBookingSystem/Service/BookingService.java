package com.AirlineBookingSystem.Service;

import com.AirlineBookingSystem.Dto.BookingDto;
import com.AirlineBookingSystem.Model.BookingModel;
import com.AirlineBookingSystem.Repository.BookingRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class BookingService {
    private final BookingRepository bookingRepository;
    private final BookingDtoMapper bookingDtoMapper;

    public BookingService(BookingRepository bookingRepository, BookingDtoMapper bookingDtoMapper) {
        this.bookingRepository = bookingRepository;
        this.bookingDtoMapper = bookingDtoMapper;
    }

    public List<BookingDto> getAllVaccinations() {
        return bookingRepository.findAll()
                .stream()
                .map(bookingDtoMapper)
                .collect(Collectors.toList());

    }

    public BookingDto getVaccinationById(int id) {
        return bookingRepository.findById(id)
                .map(bookingDtoMapper::apply)
                .get();
    }

    public BookingDto createVaccination(BookingDto bookingDto) {

        BookingModel bookingModel = bookingRepository.save(bookingDtoMapper.reapply(bookingDto));
        return bookingDtoMapper.apply(bookingModel);
    }

    public BookingDto updateVaccination(int id, BookingDto bookingDto) {
        boolean doesVaccinationExist = bookingRepository.existsById(id);
        if(doesVaccinationExist){
            BookingModel bookingModel = bookingRepository.save(bookingDtoMapper.reapply(bookingDto));
            return bookingDtoMapper.apply(bookingModel);
        }
        return null;
    }

    public boolean deleteVaccination(int id) {
        BookingModel existingBookingModel = bookingRepository.findById(id).orElse(null);
        if (existingBookingModel != null) {
            bookingRepository.delete(existingBookingModel);
            return true;
        } else {
            return false;
        }

    }


    //TODO
    // Service methods for Controller
}
