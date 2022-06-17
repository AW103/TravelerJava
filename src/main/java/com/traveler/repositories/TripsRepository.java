package com.traveler.repositories;

import com.traveler.entities.Trips;
import com.traveler.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TripsRepository extends JpaRepository<Trips,Long> {
    List<Trips> findAllByUserEquals(User user);
}
