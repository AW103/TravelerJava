package com.traveler.controllers;

import com.traveler.dtos.CountryResponse;
import com.traveler.dtos.TripsDto;
import com.traveler.services.TripsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("api/v1/trips")
public class TripsController {

    @Autowired
    private TripsService tripsService;

    @GetMapping(value = "/country", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<CountryResponse> getCountry() {
        return new ResponseEntity<>(tripsService.getCountries(), HttpStatus.OK);
    }
    @GetMapping("/user/{userId}")
    public List<TripsDto> getTripsByUser(@PathVariable Long userId) {
        return tripsService.getAllTripsByUserId(userId);
    }

    @PostMapping(value = "/user/{userId}")
        public ResponseEntity<TripsDto> addTrip(@RequestBody TripsDto tripsDto, @PathVariable Long userId) {
            return new ResponseEntity<>(tripsService.addTrip(tripsDto, userId), HttpStatus.OK);
        }
    @GetMapping("/{tripId}")
    public Optional<TripsDto> getTripById(@PathVariable Long tripId){
        return tripsService.getTripById(tripId);
    }

    @DeleteMapping("/{tripId}")
    public ResponseEntity<String> deleteTripById(@PathVariable Long tripId) {
        tripsService.deleteTrip(tripId);
        return new ResponseEntity<>("Trip successfully deleted", HttpStatus.OK);
    }


}
