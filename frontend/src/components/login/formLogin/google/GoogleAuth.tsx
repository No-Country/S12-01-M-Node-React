// Ensure you have the required imports
'use client'
import GoogleIcon from '@/assets/icons/GoogleIcon';
import React, { useEffect } from 'react';
import { GoogleLogin, GoogleLoginResponse, GoogleLoginResponseOffline } from 'react-google-login';

type GoogleAuthProps = {};

const GoogleAuth: React.FC<GoogleAuthProps> = (props: GoogleAuthProps) => {
  const clientIdGoogle = '354100094772-8luvc02gi36citqetv41t23ss8h2leiv.apps.googleusercontent.com';


  useEffect(() => {
    const start = async () => {
      try {
        await (window as any).gapi.load('auth2');
        await (window as any).gapi.auth2.init({
          clientId: clientIdGoogle 
          

        });
      } catch (error) {
        console.error('Error initializing Google API', error);
      }
    };

    start();
  }, []);

  const onSuccess = (response: GoogleLoginResponse | GoogleLoginResponseOffline) => {
    console.log(response);
  };

  const onFailure = (response: GoogleLoginResponse | GoogleLoginResponseOffline) => {
    console.log(response);
  };
//   const responseFacebook = (response) => {
//     console.log(response);
//   };

  return (
  
     
          <GoogleLogin
            clientId={clientIdGoogle}
            onSuccess={onSuccess}
            onFailure={onFailure}
            render={(renderProps) => (
              <button
                onClick={renderProps.onClick}
                
              >
                <img src="./" alt="" />
                <GoogleIcon width={30} height={30} />
              </button>
            )}
          />
      

  );
};

export default GoogleAuth;
