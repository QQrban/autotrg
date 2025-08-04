package com.autotrade.car;


import com.autotrade.car.dto.CarRequest;
import com.autotrade.car.dto.CarResponse;
import com.autotrade.user.User;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1")
@RequiredArgsConstructor
public class CarController {

    private final CarService carService;
    private final CarRepository carRepository;

    @PostMapping("/add-car")
    public ResponseEntity<CarResponse> createProduct(
            @RequestBody CarRequest request,
            @AuthenticationPrincipal User userDetails
    ) {
        return ResponseEntity.ok(carService.car(request, userDetails));
    }

    @GetMapping("/cars")
    public ResponseEntity<List<CarResponse>> getAllProducts() {
        return ResponseEntity.ok(carService.getAllCars());
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<CarResponse> updateProduct(
            @PathVariable Integer id,
            @RequestBody CarRequest request,
            @AuthenticationPrincipal User userDetails
    ) {
        return ResponseEntity.ok(carService.updateCar(id, request, userDetails));
    }

    @DeleteMapping("/delete")
    public void deleteProduct(@RequestBody List<Integer> ids){
        carService.deleteCar(ids);
    }
}
