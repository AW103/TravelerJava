import React, {useState} from "react";
import axios from "axios";
import Button from "react-bootstrap/esm/Button";

const DeleteTrip = ({id}) => {
    const [trip, setTrip] = useState([null]);
console.log();
    const handleClick = async () => {
      const findTrip = await axios.get(`http://localhost:8080/api/v1/trips/${id}`);
      console.log(findTrip.data.id);
        setTrip(findTrip.data.id)
        const deleteTrip = await axios.delete(`http://localhost:8080/api/v1/trips/${trip}`);
        window.location.reload(false);
    console.log(deleteTrip);
    }
    return (
        <div className="remove">
        <Button type="button" className="btn-sm" variant="outline-danger" onClick={handleClick}>Remove</Button>
        </div>
    )
}

export default DeleteTrip;