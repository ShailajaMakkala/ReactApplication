import React, { useState } from 'react';
import FacebookLogin from 'react-facebook-login';

function FacebookLoginComponent() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState('');
  const [userPicture, setUserPicture] = useState('');

  const handleFacebookResponse = (response) => {
    console.log('Facebook Login Success:', response);
    setIsLoggedIn(true);
    setUserName(response.name);
    setUserPicture(response.picture.data.url);
  };

  const handleFacebookFailure = (error) => {
    console.error('Facebook Login Failed:', error);
  };

  return (
    <div>
      {!isLoggedIn ? (
        <FacebookLogin
          appId="YOUR_FACEBOOK_APP_ID"
          autoLoad={false}
          fields="name,email,picture"
          callback={handleFacebookResponse}
          onFailure={handleFacebookFailure}
        />
      ) : (
        <div>
          <h2>Welcome, {userName}</h2>
          <img src={userPicture} alt="User profile" />
        </div>
      )}
    </div>
  );
}

export default FacebookLoginComponent;
