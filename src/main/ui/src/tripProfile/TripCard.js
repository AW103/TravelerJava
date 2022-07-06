import React from "react";
import "./tripCard.css";
import DeleteButton from "../deleteTrip/DeleteButton";
import GetWeather from "../weather/GetWeather";

const TripCard = ({ tripId, city, country, countryCode, remove }) => {
  let location = "";
  if (!city) {
    location = `No city needed. Hello, ${country}!`;
  } else {
    location = `${city}, ${country}`;
  }

  return (
    <div className="col">
      <div className="card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg">
        <div className="cardContent pb-3 text-white text-shadow-1">
          <h2 className="tripLocation pt-5 mt-4 mb-4 display-6 lh-1 fw-bold">
            {location}
          </h2>
          <ul className="list-unstyled">
            <li className="explore">
              Explore
            </li>
              <GetWeather countryCode={countryCode} city={city} />
              <DeleteButton tripId={tripId} remove={remove} />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TripCard;
