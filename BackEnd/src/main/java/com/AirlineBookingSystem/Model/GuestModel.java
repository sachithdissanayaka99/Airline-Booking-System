package com.AirlineBookingSystem.Model;

import com.AirlineBookingSystem.Utill.Role;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table
public class GuestModel extends User{

    private String isMotherFatherGuardian;


    public GuestModel(String firstname, String lastname, String email, String password, Role role, String isMotherFatherGuardian) {
        super(firstname, lastname, email, password, role);
        this.isMotherFatherGuardian = isMotherFatherGuardian;
    }
}