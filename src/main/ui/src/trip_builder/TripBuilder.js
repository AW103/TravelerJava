import React from "react";
import "./tripBuilder.css";
import GetCountry from "./getCountry/GetCountry";

const TripBuilder = ({userId}) => {
  return (
    <main className="tripBuilder d-flex h-100 w-100 mx-auto flex-column">
      <link rel="preload" href="https://images.unsplash.com/photo-1589262804704-c5aa9e6def89?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2942&q=80" as="image"/>
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
