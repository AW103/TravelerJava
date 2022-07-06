import React, { useState } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/esm/Container";
import "./getCountry.css";
import GetCity from "../getCity/GetCity";


const GetCountry = ({userId}) => {
  const [country, setCountry] = useState([]);
  const [cities, setCities] = useState(null);
  const [countryCode, setCountryCode] = useState(null);
  // console.log(`userID in getCountry is ${userId}`);

  const handleClick = async () => {
    // console.info("Button was clicked");
    let response = await axios.get("http://localhost:8080/api/v1/trips/country");
    let responseLength = response.data.data.length;
    const randomCountryNum = Math.ceil(Math.random() * responseLength)
    let randomCountry = response.data.data[randomCountryNum].country;
    let countryCode = response.data.data[randomCountryNum].iso2;
    let cities = response.data.data[randomCountryNum].cities;
    console.log(`country code is ${countryCode}`);
    // console.log(`country is ${country}`);
    // console.log(`cities are ${cities}`);
    setCountry(randomCountry);
    setCountryCode(countryCode);
    setCities(cities);
    return country;
  };

  return (
    <div className="tripInfo">
      <Container className="tripCard">
          <section className="countrySection">
            <div className="country">
            <h2 className="countryName">{country}</h2>
            <Button className="countryBtn btn-secondary" onClick={handleClick}>
              Click for a country
            </Button>
            </div>
          </section>
      </Container>
      {cities !== null ? (
        <Container className="tripCard">
          <section className="citySection"><GetCity cities={cities} country={country} countryCode={countryCode} userId={userId}/></section>
        </Container>
      ) : null}
  
    </div>
  );
};

export default GetCountry;
