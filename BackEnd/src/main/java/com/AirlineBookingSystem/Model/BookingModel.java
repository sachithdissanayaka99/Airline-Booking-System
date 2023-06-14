package com.AirlineBookingSystem.Model;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table
public class BookingModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String name;
    private int ageInMonths;
    private String type;



    public BookingModel(String name, int age, String type) {
        this.name = name;
        this.ageInMonths = age;
        this.type = type;
    }
}
