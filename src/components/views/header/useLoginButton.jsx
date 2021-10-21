import React from "react";
import {Link} from "react-router-dom";

const UserLoginButton = ()=>{
    return(
        <React.Fragment>
            <Link to="/auth" type="button" className="g-signin2 btn btn-outline-light me-2">Login</Link>
            <Link to="/auth" type="button" className="btn btn-warning">Sign-up</Link>
        </React.Fragment>
    );
}

export default UserLoginButton;