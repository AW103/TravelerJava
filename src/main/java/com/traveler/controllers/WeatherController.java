package com.traveler.controllers;


import com.traveler.dtos.WeatherResponse;
import com.traveler.services.TripsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.awt.*;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/weather")
public class WeatherController {

    @Autowired
    private TripsService tripsService;

    @GetMapping(value="/", produces= MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<WeatherResponse> getWeather(@RequestParam(name = "city") String city, @RequestParam(name="countryCode") String countryCode){
        return new ResponseEntity<>(tripsService.getWeather(city, countryCode), HttpStatus.OK);
    }
}
