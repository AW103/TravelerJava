package com.traveler.dtos;

import com.traveler.entities.Trips;
import com.traveler.entities.User;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class UserDto implements Serializable {
    private Long id;
    private String username;
    private String password;
    private Set<TripsDto> tripsDtoSet= new HashSet<>();

    public UserDto(User user) {
        if(user.getId() != null) {
            this.id = user.getId();
        }
        if(user.getUsername() != null) {
            this.username = user.getUsername();
        }
        if(user.getPassword() != null) {
            this.password = user.getPassword();
        }
    }
}
