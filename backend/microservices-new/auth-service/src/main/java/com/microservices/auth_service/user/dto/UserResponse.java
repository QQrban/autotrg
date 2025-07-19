package com.microservices.auth_service.user.dto;

public record UserResponse(
        String id,
        String name,
        String avatar
) {}