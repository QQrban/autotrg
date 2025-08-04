package com.autotrade.car;


import com.autotrade.user.User;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import com.autotrade.media.Media;

import java.util.Date;
import java.util.List;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "car")
public class Car {

    @Id
    @GeneratedValue
    private Integer id;
    private String vin;
    private String sku;
    private String make;
    private String model;
    private String year;
    private String registrationYear;
    private String bodyType;
    private String drivetrainType;
    private String engineType;
    private String transmissionType;

    private Integer odometerKm;
    private String exteriorColor;
    private String interiorColor;

    private Integer doors;
    private Integer seats;

    private String locationCountry;
    private String locationCity;

    private Double priceEur;

    private Date created_at;


    @ManyToOne
    @JoinColumn(name = "owner_id", nullable = false)
    private User owner;

    @OneToMany(mappedBy = "car", cascade = CascadeType.ALL)
    private List<Media> media;

}
