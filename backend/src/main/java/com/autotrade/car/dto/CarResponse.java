package com.autotrade.car.dto;

import com.autotrade.car.Car;
import com.autotrade.user.User;

public record CarResponse(
        Integer id,
        String vin,
        String make,
        String model,
        String year,
        String registrationYear,
        String bodyType,
        String drivetrainType,
        String engineType,
        String transmissionType,
        Integer odometerKm,
        String exteriorColor,
        String interiorColor,
        Double priceEur,
        User owner
) {
    public static CarResponse from(Car car) {
        return new CarResponse(
                car.getId(),
                car.getVin(),
                car.getMake(),
                car.getModel(),
                car.getYear(),
                car.getRegistrationYear(),
                car.getBodyType(),
                car.getDrivetrainType(),
                car.getEngineType(),
                car.getTransmissionType(),
                car.getOdometerKm(),
                car.getExteriorColor(),
                car.getInteriorColor(),
                car.getPriceEur(),
                car.getOwner()
        );
    }
}
