package com.microservices.auth_service.auth;

import com.microservices.auth_service.auth.dto.AuthenticationRequest;
import com.microservices.auth_service.auth.dto.AuthenticationResponse;
import com.microservices.auth_service.auth.dto.RegisterRequest;
import com.microservices.auth_service.auth.dto.RegisterResponse;
import com.microservices.auth_service.config.JwtService;
import com.microservices.auth_service.user.Role;
import com.microservices.auth_service.user.User;
import com.microservices.auth_service.user.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuthenticationService {

    private final UserRepository repository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;

    public RegisterResponse register(RegisterRequest request) {
        if (repository.findByEmail(request.email()).isPresent()) {
            throw new IllegalArgumentException("Email is already registered");
        }

        if (repository.findByName(request.name()).isPresent()) {
            throw new IllegalArgumentException("Username is already registered");
        }

        var user = User.builder()
                .name(request.name())
                .email(request.email())
                .password(passwordEncoder.encode(request.password()))
                .role(Role.USER)
                .build();

        repository.save(user);

        return new RegisterResponse("User registered successfully");
    }

    public AuthenticationResponse login(AuthenticationRequest request) {

        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        request.identifier(),
                        request.password()
                )
        );
        User user = repository.findByEmail(request.identifier())
                .or(() -> repository.findByName(request.identifier()))
                .orElseThrow(() -> new UsernameNotFoundException("User not found: " + request.identifier()));

        var jwtToken = jwtService.generateToken(user);

        return new AuthenticationResponse(jwtToken);
    }
}
