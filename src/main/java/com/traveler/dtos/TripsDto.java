package com.traveler.dtos;


import com.traveler.entities.Trips;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;

@Data
@AllArgsConstructor
@NoArgsConstructor

public class TripsDto implements Serializable {
    private Long id;
    private String country;
    private String city;
    private String countryCode;
    private UserDto userDto;

    public TripsDto(Trips trips) {
        if(trips.getId() != null){
            this.id = trips.getId();
        }
        if(trips.getCity() != null) {
            this.city = trips.getCity();
        }
        if(trips.getCountry() != null){
            this.country = trips.getCountry();
        }
        if(trips.getCountryCode() != null) {
            this.countryCode = trips.getCountryCode();
        }
    }
}
