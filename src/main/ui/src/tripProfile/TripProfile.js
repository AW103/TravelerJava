import React, { useState, useEffect } from "react";
import axios from "axios";
import TripCard from "./TripCard";
import Container from "react-bootstrap/Container";
import "./tripProfile.css";
import { Link } from "react-router-dom";


const TripProfile = ({userId}) => {
  const [trips, setTrips] = useState([]);
console.log(`userId is ${userId}`);
  useEffect(() => {
    const getTrips = async () => {
      const response = await axios.get(`http://localhost:8080/api/v1/trips/user/${userId}`);
      console.log(response.data);
      setTrips(response.data);
    };
    getTrips().catch(console.error);
  }, [userId]);
  console.log(`trips is ${JSON.stringify(trips)}`);
  let message1 = "Looks like you don't have any trips right now!"
  let message2 = "Head to the Trip Builder page to add some trips."
  const tripData = trips.map((trip) => {
    return (
      <TripCard
        key={trip.id}
        id={trip.id}
        city={trip.city}
        country={trip.country}
      />
    );
  });
  return (
    <main id="tripProfile">
         <Container className="tripProfile display px-4 py-5" id="customCard">
          <h1 className="userTrips">Your Trips</h1>
          {!trips[0] ? <div className="noTrips"><h2>{message1}</h2><Link to="/tripBuilder"><h3>{message2}</h3></Link></div> :
          <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
            {tripData}
          </div>}
          </Container>
    </main>
  );
};

export default TripProfile;
