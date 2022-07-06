package com.traveler.connector;


import com.traveler.dtos.WeatherResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;

@Service
public class WeatherAPIConnector {

    @Value("${api.weatherKey}")
    private transient String apiKey;

    @Autowired
    @Qualifier("WeatherWebClient")
    WebClient webClient;


    public WeatherResponse connect(String city, String countryCode) {
        WeatherResponse response = new WeatherResponse();
        try {
           response = webClient.get()
                    .uri(uriBuilder -> uriBuilder
                            .queryParam("q", String.join(",", city, countryCode))
                            .queryParam("appid", apiKey)
                            .queryParam("units", "imperial")
                            .build())
                    .retrieve()
                    .bodyToMono(WeatherResponse.class)
                    .block();
           return response;
        } catch (Exception e) {
            System.out.println(e.getMessage());
            return response;
        }
    }
}
