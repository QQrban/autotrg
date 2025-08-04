package com.autotrade.auth.dto;

import jakarta.validation.constraints.NotBlank;

public record AuthenticationRequest(
        @NotBlank String identifier,
        @NotBlank String password
) {}
