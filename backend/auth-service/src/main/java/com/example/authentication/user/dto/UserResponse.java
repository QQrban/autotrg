package com.example.authentication.user.dto;

public record UserResponse(
        String id,
        String name,
        String avatar
) {}