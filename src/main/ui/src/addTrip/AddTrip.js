import React, {useState} from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import axios from "axios";

const AddTrip = ({country, city, countryCode, userId}) => {
    console.log(`AddTrip receiving countryCode of ${countryCode}`);
    const [response, setResponse] = useState(null)
// console.log(`country is ${country}, city is ${city}`);
    const body = {
        country: country,
        city: city,
        countryCode: countryCode
    }
    console.log(`body is ${JSON.stringify(body)}`);
    const handleAddTripClick = async () => {
        // console.info("Add trip Button was clicked");
    let res = await axios.post(`http://localhost:8080/api/v1/trips/user/${userId}`, body);
    console.log("AddTrip post request received response of" + res.data);
       setResponse(res.data)
      };
  
return (
<section>
    <Button variant="outline-warning" className="addTripBtn" onClick={handleAddTripClick}>Add trip</Button>
    {response !== null ? <Link to="/tripProfile" className="viewTripsBtn btn btn-outline-success">Click to view trips</Link> : null}
    </section>
)
}

export default AddTrip;