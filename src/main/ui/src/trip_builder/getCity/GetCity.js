import React, { useState } from "react";
import Button from "react-bootstrap/esm/Button";
import AddTrip from "../../addTrip/AddTrip";

const GetCity = ({ cities, country, userId }) => {
  const [city, setCity] = useState(null);
  const [addCity, setAddCity] = useState(null);
  console.log(`country is ${country}`);
  console.log(`userId in GetCity is ${userId}`);

  let message = `Let's get a city next.`;

  const handleGetCityClick = async () => {
    console.info("GetCity Button was clicked");
    const randomCityNum = Math.ceil(Math.random() * cities.length);
    let randomCity = cities[randomCityNum]
    console.log("random city is " + randomCity);
    setAddCity(randomCity);
  cities.length !== 0 ? setCity(`How does ${randomCity} sound?`) : setCity(
        "Not a city in sight. You can travel the country all in one trip!"
      );
    };
    console.log(`city is ${city}`);

  return (
    <div className="city">
      <div>
        <h2>{message}</h2>
        <Button className="cityBtn btn-secondary" onClick={handleGetCityClick}>
          Click for a city
        </Button>
        <h2>{city}</h2>
      </div>
        {country !== null && city !== null ? (
          <div className="addTripDiv">
            <div className="restart">
            <Button
            className="startOver"
              variant="outline-secondary"
              onClick={() => window.location.reload(false)}
            >
              Start over?
            </Button>
          </div>
          <div className="addTrip">
            <AddTrip country={country} city={addCity} userId={userId}/>
            </div>
          </div>
        ) : null}
      </div>
  );
};

export default GetCity;
