import axios from "axios";
import { useState } from "react";

const useLogin = () => {
   const [authorized, setAuthorized] = useState(false)
   const [userId, setUserId] = useState(null);
    const login = async (username,password) => {
        let response = await axios.post("http://localhost:8080/api/v1/users/login", {
            username: username,
            password: password
        });
        console.log(`useLogin response.data is ${response.data}`);
        // console.log(String(response.data).includes("Error"));
        if(String(response.data).includes("Error")){
            console.log("Error logging in user.");
            return authorized;
        }else {
            console.log("else statement hit");
            setUserId(response.data[1]);
            setAuthorized(true);
            return authorized;
        }

  }
return [login, authorized, userId];
}

export default useLogin;