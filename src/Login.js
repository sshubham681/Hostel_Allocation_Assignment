// import React from 'react'
import React, { useState } from 'react';
import { facebookProvider, googleProvider } from './config/authMethods';
import socialMediaAuth from "./services/auth";
import Welcome from './Welcome'
function Login() {
  const [loggedIn, setLoggedIn] = useState(false);
  const handleOnClick = async (provider) => {
    const res = await socialMediaAuth(provider);
    setLoggedIn(true);
  }
  return (
    <div>

      {
        !loggedIn ?
          <div>
            <h2>Hostel Allocation</h2>
            <p>Please Sign-in</p>
            <> <button className="fb" onClick={() => handleOnClick(facebookProvider)}>Facebook</button>
              <button className="google" onClick={() => handleOnClick(googleProvider)}>Google</button></>
          </div> : <Welcome />
      }
    </div>
  )
}

export default Login
