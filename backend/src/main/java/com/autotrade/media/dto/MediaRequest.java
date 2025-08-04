package com.autotrade.media.dto;

public record MediaRequest(
        String vehicleId,
        String url,
        Boolean isMainPhoto
) {
}
