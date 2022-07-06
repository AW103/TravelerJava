package com.traveler.configuration;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.codec.ClientCodecConfigurer;
import org.springframework.web.reactive.function.client.ExchangeStrategies;
import org.springframework.web.reactive.function.client.WebClient;

@Configuration
public class WebClientConfig {
    @Value("${api.endpoints.countriesURL}")
    private transient String urlCountries;

    @Value("${api.endpoints.weatherURL}")
    private transient String urlWeather;



    @Bean("CountriesWebClient")
    public WebClient countriesWebClient() {
//        size variable and codecs lines allow for the extremely large response from my api, they are not required for webClient
        final int size = 16 * 1024 * 1024;
        final ExchangeStrategies strategies = ExchangeStrategies.builder()
                .codecs(codecs -> codecs.defaultCodecs().maxInMemorySize(size))
                .build();
        return WebClient.builder()
                .baseUrl(urlCountries)
                .exchangeStrategies(strategies)
                .build();
    }

    @Bean("WeatherWebClient")
    public WebClient weatherWebClient() {
        final ExchangeStrategies strategies = ExchangeStrategies.builder()
                .codecs(ClientCodecConfigurer::defaultCodecs)
                .build();
        return WebClient.builder().baseUrl(urlWeather).exchangeStrategies(strategies).build();
//        return WebClient.create(urlWeather);
    }
}