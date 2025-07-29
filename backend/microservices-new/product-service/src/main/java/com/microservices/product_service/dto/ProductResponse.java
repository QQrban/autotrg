package com.microservices.product_service.dto;


import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class ProductResponse {
    private Integer id;

    private String imageUrl;
    private String name;
    private String description;
    private Double price;
    private Integer userId;
    private Integer categoryId;

}
