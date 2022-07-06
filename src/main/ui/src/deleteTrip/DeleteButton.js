import React from "react";
import axios from "axios";
import Button from "react-bootstrap/esm/Button";

const DeleteButton = ({ tripId, remove }) => {
  // console.log(`DeleteButton receiving tripId of ${tripId}`);

  const handleClick = async () => {
    console.log("Button was clicked");
    const findTrip = await axios.delete(
      `http://localhost:8080/api/v1/trips/${tripId}`
    );
    // console.log("findTrip is " + findTrip.data);
    if (findTrip) {
      remove();
    }
  };

  return (
    <li className="remove">
      <Button
        type="button"
        className="removeBtn btn-sm"
        variant="outline-danger"
        onClick={handleClick}
      >
        Remove
      </Button>
      </li>

  );
};

export default DeleteButton;
