import React from "react";
function LoginStatus(){
    const isLoggedIn = true;
        if (isLoggedIn == true) {
    return(     
        <h1> Welcome User</h1>       
    );
}
    return(
        <h1> Please Login </h1>
    )
}  
    export default LoginStatus;