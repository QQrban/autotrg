package com.autotrade.car.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Positive;

public record CarRequest(
        @NotBlank String vin,
        @NotBlank String make,
        @NotBlank String model,
        @NotBlank String year,
        @NotBlank String registrationYear,
        @NotBlank String bodyType,
        @NotBlank String drivetrainType,
        @NotBlank String engineType,
        @NotBlank String transmissionType,
        Integer odometerKm,
        String exteriorColor,
        String interiorColor,
        @NotNull @Positive Double priceEur
) {}
