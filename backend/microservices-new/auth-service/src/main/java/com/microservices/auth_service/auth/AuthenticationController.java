package com.microservices.auth_service.auth;

import com.microservices.auth_service.auth.dto.AuthenticationRequest;
import com.microservices.auth_service.auth.dto.AuthenticationResponse;
import com.microservices.auth_service.auth.dto.RegisterRequest;
import com.microservices.auth_service.auth.dto.RegisterResponse;
import com.microservices.auth_service.user.dto.UserResponse;
import com.microservices.auth_service.user.service.UserService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v2/auth")
@RequiredArgsConstructor
public class AuthenticationController {

    private final AuthenticationService service;
    private final UserService userService;

    @PostMapping("/register")
    public ResponseEntity<RegisterResponse> register(
            @RequestBody @Valid RegisterRequest request
    ) {
        return ResponseEntity.ok(service.register(request));
    }

    @PostMapping("/login")
    public ResponseEntity<AuthenticationResponse> login(
            @RequestBody AuthenticationRequest request
    ) {
        return ResponseEntity.ok(service.login(request));
    }

    @GetMapping("/user/{id}")
    public UserResponse getUser(@PathVariable Integer id) {
        return userService.getById(id);
    }
}
