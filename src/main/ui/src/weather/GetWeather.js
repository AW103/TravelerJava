import React, {useState, useEffect} from "react";
import axios from "axios";
import "./getWeather.css"

const GetWeather = ({ countryCode, city }) => {
  const [temp, setTemp] = useState(null);
  const [weatherIcon, setWeatherIcon] = useState(null);
  city = city.split(" ").join("");
  city.replace(/\W+/g, "");
  countryCode.replace(/\W+/g, "");
  console.log(
    `displayWeather receiving countryCode of ${countryCode} and city of ${city}`
  );
 useEffect(() => {
  if (city !== "Not a city in sight. You can travel the country all in one trip!") {
    const getWeather = async () => {
      const response = await axios.get(`http://localhost:8080/api/v1/weather/`, {
        params: { city: city, countryCode: countryCode }
      });
      console.log(response.data);
      setTemp(Math.floor(response.data.main.temp));
      setWeatherIcon(response.data.weather[0].icon);
    };
    getWeather().catch(console.error)
  }
 }, [city, countryCode])

  console.log(`temp is ${temp} and icon is ${weatherIcon}`);

  return (
    <li className="weather">
      {temp} 
{weatherIcon ? 
<img 
  id="weatherIcon"
  src={`http://openweathermap.org/img/wn/${weatherIcon}@2x.png`}
  alt="icon"
  /> :"Weather Unavailable"}
   </li> 
  )
};

export default GetWeather;
