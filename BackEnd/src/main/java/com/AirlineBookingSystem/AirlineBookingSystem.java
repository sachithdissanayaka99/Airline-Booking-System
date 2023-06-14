package com.AirlineBookingSystem;

import com.AirlineBookingSystem.Model.BookingModel;
import com.AirlineBookingSystem.Repository.BookingRepository;
import org.modelmapper.ModelMapper;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;



@SpringBootApplication
public class AirlineBookingSystem {

    public static void main(String[] args) {
        SpringApplication.run(AirlineBookingSystem.class, args);
    }

    @Bean
    public ModelMapper modelMapper(){
        return new ModelMapper();
    }

    @Bean
    public CommandLineRunner commandLineRunner(BookingRepository bookingRepository){
        return args -> {
            bookingRepository.save(new BookingModel("BCG", 0, "Compulsory"));
            bookingRepository.save(new BookingModel("Hexaxim/Infanrix Hexa", 0, "Compulsory"));
            bookingRepository.save(new BookingModel("Pentavalent and Polio (1st dose)", 2, "Compulsory"));
            bookingRepository.save(new BookingModel("Rotarix/Rotateq (1st dose)", 2, "Additional"));
            bookingRepository.save(new BookingModel("Synflorix (1st dose)", 2, "Additional"));
            bookingRepository.save(new BookingModel("Rotarix/Rotateq (2nd dose)", 4, "Additional"));
            bookingRepository.save(new BookingModel("Synflorix (2nd dose)", 4, "Additional"));
            bookingRepository.save(new BookingModel("Hexaxim/Infanrix Hexa (2nd dose)", 4, "Compulsory"));
            bookingRepository.save(new BookingModel("Pentavalent and Polio (3rd dose)", 6, "Compulsory"));
            bookingRepository.save(new BookingModel("Rotarix/Rotateq (2nd dose)", 6, "Additional"));
            bookingRepository.save(new BookingModel("Synflorix (2nd dose)", 6, "Additional"));
            bookingRepository.save(new BookingModel("Hexaxim/Infanrix Hexa (3rd dose)", 6, "Compulsory"));
            bookingRepository.save(new BookingModel("Priorix/MMR (1st dose)", 9, "Compulsory"));
            bookingRepository.save(new BookingModel("Japanese Encephalitis (single dose)", 12, "Compulsory"));
            bookingRepository.save(new BookingModel("Hexaxim/Infanrix Hexa (4th dose)", 18, "Compulsory"));
            bookingRepository.save(new BookingModel("Pentavalent and Polio (4th dose)", 18, "Compulsory"));
            bookingRepository.save(new BookingModel("Synflorix (4th dose)", 18, "Additional"));
            bookingRepository.save(new BookingModel("Avaxim (PEDIATRIC) OR IM", 18, "Additional"));
            bookingRepository.save(new BookingModel("Havrix 720 (PEDIATRIC) (1st dose)", 12, "Additional"));
            bookingRepository.save(new BookingModel("Varilrix (1st dose)", 12, "Additional"));
            bookingRepository.save(new BookingModel("Varilrix (2nd dose)", 24, "Additional"));
            bookingRepository.save(new BookingModel("Typhim (Booster Doses every 3 years)", 36, "Additional"));
            bookingRepository.save(new BookingModel("Avaxim (PEDIATRIC) OR IM", 24, "Additional"));
            bookingRepository.save(new BookingModel("Havrix 720 (PEDIATRIC) (2nd dose)", 24, "Additional"));
            bookingRepository.save(new BookingModel("Priorix/MMR (2nd dose)", 36, "Compulsory"));
            bookingRepository.save(new BookingModel("Boostrix (1st dose)", 60, "Compulsory"));
            bookingRepository.save(new BookingModel("Polio Oral", 60, "Compulsory"));



        };
    }

}
