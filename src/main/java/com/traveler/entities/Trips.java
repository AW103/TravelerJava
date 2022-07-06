package com.traveler.entities;


import com.fasterxml.jackson.annotation.JsonBackReference;
import com.traveler.dtos.TripsDto;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Table(name = "Trips")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Trips {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    @Column
    private Long id;

    @Column
    private String country;

    @Column
    private String city;

    @Column
    private String countryCode;

    @ManyToOne
    @JsonBackReference
    private User user;

    public Trips(TripsDto tripsDto) {
        if(tripsDto.getCity() != null) {
            this.city = tripsDto.getCity();
        }
        if(tripsDto.getCountry() != null) {
            this.country = tripsDto.getCountry();
        }
        if(tripsDto.getCountryCode() != null){
            this.countryCode = tripsDto.getCountryCode();
        }
    }
}
