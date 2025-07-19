package com.microservices.auth_service.auth.dto;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

@JsonIgnoreProperties(ignoreUnknown = false)
public record RegisterRequest(
        @NotBlank(message = "Name is required")
        @Size(min = 3, message = "Username must be at least 3 characters")
        String name,

        @Email(message = "Invalid email format")
        String email,

        @Size(min = 6, message = "Password must be at least 6 characters")
        String password
) {
}
