import React from "react";
import { Link } from "react-router-dom";
import "./home.css";

const Home = () => {
    const button =
        <div className="beginBtn">
            <Link to="/login" className="homeBtn btn btn-outline">
                Let's begin
            </Link>
        </div>
return (
    <section className="homePage d-flex h-100 w-100 mx-auto flex-column">
        <div className="welcome-div">
         <h1 className="greeting">The world is yours.</h1>
        {button}
        </div>
    </section>
)
}

export default Home;