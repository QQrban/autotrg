package com.autotrade.auth;

import com.autotrade.auth.dto.AuthenticationRequest;
import com.autotrade.auth.dto.AuthenticationResponse;
import com.autotrade.config.JwtService;
import com.autotrade.user.User;
import com.autotrade.user.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuthenticationService {

    private final UserRepository repository;
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;

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
