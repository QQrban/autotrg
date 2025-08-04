package com.autotrade.media.dto;

import com.autotrade.media.Media;

public record MediaResponse(
        String vehicleId,
        String url,
        Boolean isMainPhoto
) {
    public static MediaResponse from(Media media) {
        return new MediaResponse(
                media.getVehicleId(),
                media.getUrl(),
                media.getIsMainPhoto()
        );
    }
}
