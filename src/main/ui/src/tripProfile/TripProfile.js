import React, { useState, useEffect } from "react";
import axios from "axios";
import TripCard from "./TripCard";
import Container from "react-bootstrap/Container";
import "./tripProfile.css";
import { Link } from "react-router-dom";

const TripProfile = ({ userId }) => {
  const [trips, setTrips] = useState([]);
  const [remove, setRemove] = useState(false);

 


  
  let message1 = "Looks like you don't have any trips right now!";
  let message2 = "Head to the Trip Builder page to add some trips.";
  // console.log(`TripProfile: userId is ${userId}, countryCode is ${countryCode}`);

  useEffect(() => {
    const getTrips = async () => {
      const response = await axios.get(
        `http://localhost:8080/api/v1/trips/user/${userId}`
      );
      console.log(response.data);
      setTrips(response.data);
    };
    getTrips().catch(console.error);
    setRemove(false);
  }, [userId, remove]);

  const removeTrip = () => {
    setRemove(true);
    return remove;
  };
  // console.log(`trips is ${JSON.stringify(trips)}`);
  const tripData = trips.map((trip) => {
    return (
      <TripCard
        key={trip.id}
        tripId={trip.id}
        city={trip.city}
        country={trip.country}
        countryCode={trip.countryCode}
        remove={removeTrip}
      />
    );
  });
  return (
    <main id="tripProfile">
      <Container className="tripProfile display px-4 py-5" id="customCard">
        <h1 className="userTrips">Your Trips</h1>
        {!trips[0] ? (
          <div className="noTrips">
            <h2>{message1}</h2>
            <Link to="/tripBuilder">
              <h3>{message2}</h3>
            </Link>
          </div>
        ) : (
          <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
            {tripData}
          </div>
        )}
      </Container>
    </main>
  );
};

export default TripProfile;
