import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import GetCountry from "./trip_builder/getCountry/GetCountry";
import GetCity from "./trip_builder/getCity/GetCity";
import AddTrip from "./addTrip/AddTrip";
import TripProfile from "./tripProfile/TripProfile";
import Header from "./header/Header";
import "./app.css";
import Home from "./home/Home";
import TripBuilder from "./trip_builder/TripBuilder";
import Login from "./login/Login";
import useLogin from "./login/useLogin";
import Register from "./register/Register";
import useRegister from "./register/useRegister";


const App = () => {
  const [login, authorized, userId] = useLogin("");
  const [register, isRegistered] = useRegister("");
  console.log(`userId is ${userId}`);
  

  return (
    <main className="appPage">
      <Header userId={userId}/>
      <Routes>
      <Route path="/" exact element={<Home authenticated={authorized}/>} />
      <Route path="/login" element={<Login login={login} authorized={authorized}/>} />
      <Route path="/register" element={authorized ? <Navigate to="/login"/> : <Register register={register} isRegistered={isRegistered}/>}/>
        <Route path="/tripBuilder" element={<TripBuilder userId={userId} />} />
        <Route path="/getCountry" element={ <GetCountry />} /> 
        <Route path="/getCity" element={<GetCity />} />
        <Route path="/addTrip" element={<AddTrip />} />
        <Route path="/tripProfile" element={!authorized ? <Navigate to="/login"/> : <TripProfile  userId={userId} />} />
      </Routes>
    </main>
  );
};

export default App;
