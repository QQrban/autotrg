package com.example.authentication.auth;

import com.example.authentication.auth.dto.AuthenticationRequest;
import com.example.authentication.auth.dto.AuthenticationResponse;
import com.example.authentication.auth.dto.RegisterRequest;
import com.example.authentication.auth.dto.RegisterResponse;
import com.example.authentication.config.JwtService;
import com.example.authentication.user.Role;
import com.example.authentication.user.User;
import com.example.authentication.user.UserRepository;
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
