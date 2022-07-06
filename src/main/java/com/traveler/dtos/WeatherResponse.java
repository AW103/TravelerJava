package com.traveler.dtos;

import com.fasterxml.jackson.databind.JsonNode;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class WeatherResponse {
    private JsonNode weather;
    private JsonNode main;
    private JsonNode cod;
}
