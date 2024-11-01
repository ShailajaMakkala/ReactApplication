import React, { useState } from 'react';
import { GoogleLogin } from '@react-oauth/google';

function GoogleLoginComponent() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState('');

  const handleSuccess = (credentialResponse) => {
    console.log('Login Success:', credentialResponse);
    const userProfile = decodeJwt(credentialResponse.credential);
    setUserName(userProfile.name); 
    setIsLoggedIn(true);
  };

  const decodeJwt = (token) => {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    return JSON.parse(window.atob(base64));
  };

  return (
    <>
      {!isLoggedIn ? (
        <> 
          <GoogleLogin onSuccess={handleSuccess}/>
        </>
      ) : (
        <h2>Welcome {userName}</h2>
      )}
    </>
  );
}

export default GoogleLoginComponent;
