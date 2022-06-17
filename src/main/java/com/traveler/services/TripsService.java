package com.traveler.services;

import com.traveler.dtos.CountryResponse;
import com.traveler.dtos.TripsDto;
import com.traveler.entities.Trips;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

public interface TripsService {

CountryResponse getCountries();

List<TripsDto> getAllTripsByUserId(Long userId);
Optional<TripsDto> getTripById(Long tripId);

@Transactional
   TripsDto addTrip(TripsDto tripsDto, Long userId);

@Transactional
String deleteTrip(Long tripId);


}
