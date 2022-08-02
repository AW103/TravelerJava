package com.traveler.services.implementation;

import com.traveler.connector.CountriesAPIConnector;
import com.traveler.connector.WeatherAPIConnector;
import com.traveler.dtos.CountryResponse;
import com.traveler.dtos.TripsDto;
import com.traveler.dtos.WeatherResponse;
import com.traveler.entities.Trips;
import com.traveler.entities.User;
import com.traveler.repositories.TripsRepository;
import com.traveler.repositories.UserRepository;
import com.traveler.services.TripsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.Collections;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;


@Service
public class TripsServiceImpl implements TripsService {
@Autowired
private CountriesAPIConnector countriesAPIConnector;

@Autowired
private WeatherAPIConnector weatherAPIConnector;

@Autowired
private UserRepository userRepository;

@Autowired
private TripsRepository tripsRepository;

    public CountryResponse getCountries() {
       return countriesAPIConnector.connect();
    }

    public WeatherResponse getWeather(String city, String countryCode) {
        return weatherAPIConnector.connect(city, countryCode);
    }

    @Override
    public List<TripsDto> getAllTripsByUserId(Long userId) {
        Optional<User> userOptional = userRepository.findById(userId);
        if(userOptional.isPresent()){
            List<Trips> tripsList = tripsRepository.findAllByUserEquals(userOptional.get());
            return tripsList.stream().map(TripsDto::new).collect(Collectors.toList());
        }
        return Collections.emptyList();
    }

    @Transactional
    public TripsDto addTrip(TripsDto tripsDto, Long userId) {
        Optional<User> userOptional = userRepository.findById(userId);
        Trips trip = new Trips(tripsDto);
        userOptional.ifPresent(trip::setUser);
        tripsRepository.saveAndFlush(trip);
        tripsDto.setId(trip.getId());
        return tripsDto;
    }

    @Transactional
    public String deleteTrip(Long tripId) {
        Optional<Trips> tripsOptional = tripsRepository.findById(tripId);
        tripsOptional.ifPresent(trips -> tripsRepository.delete(trips));
        return "Deleted";
    }

    public Optional<TripsDto> getTripById(Long tripId) {
        Optional<Trips> tripsOptional = tripsRepository.findById(tripId);
        return tripsOptional.map(TripsDto::new);
    }
}
