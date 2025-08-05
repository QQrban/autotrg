package com.autotrade;

import com.autotrade.car.Car;
import com.autotrade.car.CarRepository;
import com.autotrade.user.User;
import com.autotrade.user.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
@RequiredArgsConstructor
public class CarApplication {

	public static void main(String[] args) {
		SpringApplication.run(CarApplication.class, args);
	}

	@Bean
	public CommandLineRunner loadData(CarRepository carRepository, UserRepository userRepository) {
		return args -> {
			User owner1 = userRepository.findById(1)
					.orElseThrow(() -> new RuntimeException("User with ID 1 not found"));
			User owner2 = userRepository.findById(2)
					.orElseThrow(() -> new RuntimeException("User with ID 2 not found"));

			Car car1 = Car.builder()
					.vin("VIN0012345678")
					.make("BMW")
					.model("X5")
					.year("2018")
					.registrationYear("2019")
					.bodyType("SUV")
					.drivetrainType("AWD")
					.engineType("DIESEL")
					.transmissionType("AUTO")
					.odometerKm(90000)
					.exteriorColor("Black")
					.interiorColor("Brown")
					.doors(5)
					.seats(5)
					.locationCountry("Germany")
					.locationCity("Munich")
					.priceEur(35000.00)
					.owner(owner1)
					.build();

			Car car2 = Car.builder()
					.vin("VIN0023456789")
					.make("Toyota")
					.model("Corolla")
					.year("2020")
					.registrationYear("2021")
					.bodyType("Sedan")
					.drivetrainType("FWD")
					.engineType("HYBRID")
					.transmissionType("AUTO")
					.odometerKm(40000)
					.exteriorColor("White")
					.interiorColor("Black")
					.doors(4)
					.seats(5)
					.locationCountry("France")
					.locationCity("Paris")
					.priceEur(19000.00)
					.owner(owner2)
					.build();

			Car car3 = Car.builder()
					.vin("VIN0034567890")
					.make("Audi")
					.model("A4")
					.year("2015")
					.registrationYear("2016")
					.bodyType("Sedan")
					.drivetrainType("AWD")
					.engineType("GASOLINE")
					.transmissionType("MANUAL")
					.odometerKm(120000)
					.exteriorColor("Blue")
					.interiorColor("Gray")
					.doors(4)
					.seats(5)
					.locationCountry("Italy")
					.locationCity("Rome")
					.priceEur(15000.00)
					.owner(owner2)
					.build();

			carRepository.save(car1);
			carRepository.save(car2);
			carRepository.save(car3);
		};
	}
}
