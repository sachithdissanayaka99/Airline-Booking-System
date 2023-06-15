package com.AirlineBookingSystem.Dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class BookingDto{

    private int id;
    private String status;
    private int seatNumber;
    private String paymentInfo;
    private String fareClass;
    private int passengerId;
    private int reservationId;
}