package com.autotrade.car;


import com.autotrade.car.dto.CarRequest;
import com.autotrade.car.dto.CarResponse;
import com.autotrade.user.User;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.List;


@Slf4j
@Service
@RequiredArgsConstructor
public class CarService {

    private final CarRepository carRepository;

    public CarResponse car(CarRequest request, User userDetails) {

        if (request.vin().isEmpty()
                || request.make().isEmpty()
                || request.model().isEmpty()
                || request.year().isEmpty()
                || request.registrationYear().isEmpty()
                || request.bodyType().isEmpty()
                || request.drivetrainType().isEmpty()
                || request.engineType().isEmpty()
                || request.transmissionType().isEmpty()
                || request.priceEur() <= 0) {
            throw new IllegalArgumentException("Invalid car data: make, model, year, registrationYear, bodyType, drivetrainType, engineType, transmissionType or price is invalid");
        }

        var car = Car.builder()
                    .make(request.make())
                    .model(request.model())
                    .year(request.year())
                    .registrationYear(request.registrationYear())
                    .bodyType(request.bodyType())
                    .drivetrainType(request.drivetrainType())
                    .engineType(request.engineType())
                    .transmissionType(request.transmissionType())
                    .priceEur(request.priceEur())
                    .build();

        carRepository.save(car);

        return null;
    }

    public List<CarResponse> getAllCars() {
        return carRepository.findAll()
                .stream()
                .map(CarResponse::from)
                .toList();
    }

    public CarResponse updateCar(Integer id, CarRequest request, User userDetails) {
        var car = carRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Car not found"));

        car.setMake(request.make());
        car.setModel(request.model());
        car.setYear(request.year());
        car.setRegistrationYear(request.registrationYear());
        car.setBodyType(request.bodyType());
        car.setDrivetrainType(request.drivetrainType());
        car.setEngineType(request.engineType());
        car.setTransmissionType(request.transmissionType());
        car.setPriceEur(request.priceEur());

        carRepository.save(car);

        return CarResponse.from(car);
    }

    public void deleteCar(List<Integer> id) {
        List<Car> cars = carRepository.findAllById(id);

        carRepository.deleteAll(cars);
    }
}
