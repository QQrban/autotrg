package com.microservices.product_service.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Builder
@Data
@Entity
@Table(name = "products")
public class Product {

    @Id
    @GeneratedValue
    private Integer id;

    private String imageUrl;
    private String name;
    private String description;
    private Double price;

    private Integer userId;
}
