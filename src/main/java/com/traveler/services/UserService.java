package com.traveler.services;

import com.traveler.dtos.UserDto;

import javax.transaction.Transactional;
import java.util.List;


public interface UserService {
    @Transactional
    List<String> addUser(UserDto userDto);

    List<String> userLogin(UserDto userDto);
}
