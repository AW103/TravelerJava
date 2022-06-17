package com.traveler.connector;

import com.traveler.dtos.CountryResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;

@Service
public class CountriesAPIConnector {

    @Autowired
    @Qualifier("CountriesWebClient")
    WebClient webClient;

    public CountryResponse connect() {

        return webClient.get()
            .uri("/countries")
            .retrieve()
            .bodyToMono(CountryResponse.class)
            .block();
    }

}
