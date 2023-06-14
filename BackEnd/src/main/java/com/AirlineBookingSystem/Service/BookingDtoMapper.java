package com.AirlineBookingSystem.Service;

import com.AirlineBookingSystem.Dto.BookingDto;
import com.AirlineBookingSystem.Model.BookingModel;
import org.springframework.stereotype.Service;

import java.util.function.Function;
@Service
public class BookingDtoMapper implements Function<BookingModel, BookingDto> {
    public BookingDto apply(BookingModel bookingModel){
        return new BookingDto(
                bookingModel.getId(),
                bookingModel.getName(),
                bookingModel.getAgeInMonths(),
                bookingModel.getType());

    }
    public BookingModel reapply(BookingDto bookingDto){
        return new BookingModel(

                bookingDto.name(),

                bookingDto.ageInMonths(),
                bookingDto.type());

    }

}
