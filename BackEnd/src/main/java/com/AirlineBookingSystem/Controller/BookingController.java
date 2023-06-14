package com.AirlineBookingSystem.Controller;

import com.AirlineBookingSystem.Dto.BookingDto;
import com.AirlineBookingSystem.Service.BookingService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/v1/booking")
public class BookingController {
    private final BookingService bookingService;


    public BookingController(BookingService bookingService) {
        this.bookingService = bookingService;
    }

    @GetMapping
    public ResponseEntity<List<BookingDto>> getAllVaccinations(){
        return ResponseEntity.ok(bookingService.getAllVaccinations());

    }

    @GetMapping("{id}")
    public ResponseEntity<BookingDto> getVaccinationById(@PathVariable int id){
        return ResponseEntity.ok(bookingService.getVaccinationById(id));
    }
    @PostMapping
    public ResponseEntity<BookingDto> createVaccination(@RequestBody BookingDto bookingDto){
        return ResponseEntity.status(HttpStatus.CREATED)
                .body(bookingService.createVaccination(bookingDto));
    }

    @PutMapping("/{id}")
    public ResponseEntity<BookingDto> updateVaccination(@PathVariable int id, @RequestBody BookingDto bookingDto) {
        BookingDto updatedBookingDto = bookingService.updateVaccination(id, bookingDto);
        if (updatedBookingDto != null) {
            return ResponseEntity.ok(updatedBookingDto);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteVaccination(@PathVariable int id) {
        boolean deleted = bookingService.deleteVaccination(id);
        if (deleted) {
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }

}
