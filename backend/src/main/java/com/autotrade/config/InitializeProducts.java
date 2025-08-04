package com.autotrade.config;


import com.autotrade.car.Car;
import com.autotrade.car.CarRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.List;

@Configuration
public class InitializeProducts {

    private final List<Car> products;

    public InitializeProducts() {
        this.products = List.of(
                Car.builder().name("Almond Crunch").description("3 | 6 | 10 (0)").price(2.0).userId(1).build(),
                Car.builder().name("Choco Bar").description("2 | 4 | 8 (1)").price(1.5).userId(1).build(),
                Car.builder().name("Vanilla Cookie").description("4 | 5 | 9 (2)").price(1.8).userId(1).build(),
                Car.builder().name("Protein Shake").description("10 | 2 | 5 (0)").price(3.0).userId(1).build(),
                Car.builder().name("Nut Mix").description("6 | 10 | 4 (1)").price(2.5).userId(1).build(),
                Car.builder().name("Fruit Bar").description("1 | 1 | 12 (6)").price(1.2).userId(1).build(),
                Car.builder().name("Oatmeal Cup").description("5 | 3 | 15 (3)").price(2.0).userId(1).build(),
                Car.builder().name("Granola Bites").description("4 | 4 | 11 (2)").price(1.7).userId(1).build(),
                Car.builder().name("Coconut Chips").description("2 | 8 | 7 (1)").price(1.9).userId(1).build(),
                Car.builder().name("Energy Gel").description("0 | 0 | 20 (10)").price(1.0).userId(1).build()
        );
    }

    @Bean
    public CommandLineRunner createProducts(CarRepository carRepository) {
        return _ -> {
            carRepository.saveAll(products);
        };
    }


}
