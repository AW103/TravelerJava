import React from "react";
import "./tripBuilder.css";
import GetCountry from "./getCountry/GetCountry";

const TripBuilder = ({userId}) => {
console.log(`userID is ${userId}`);
  return (
    <main className="tripBuilder d-flex h-100 w-100 mx-auto flex-column">
      <h1 className="tripBuilderHeader">Adventure awaits!</h1>
      <section className="cardSection">
      <h2 className="tripBuilderMessage">First,let's find a country.</h2>
      <div className="card-deck">
        <GetCountry userId={userId}/>
    </div>
    </section>
  </main>
  );
};

export default TripBuilder;
