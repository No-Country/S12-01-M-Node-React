'use client'
import React, { useEffect } from 'react';
import { GoogleOAuthProvider, useGoogleLogin } from '@react-oauth/google';
import { type } from 'os';
import GoogleIcon from '@/assets/icons/GoogleIcon';

type GoogleAuthProps = {};
type GoogleButtonProps = {};

const GoogleButton: React.FC<GoogleButtonProps> = (props: GoogleButtonProps) => {

  const login = useGoogleLogin({
    
    onSuccess: tokenResponse => console.log(tokenResponse),
  });

  return (
      <button onClick={() => login()} className='' >
       <GoogleIcon width={37}/>
      </button>
  );
};


const GoogleAuth: React.FC<GoogleAuthProps> = (props: GoogleAuthProps) => {
  const clientIdGoogle = '244278261503-oasa5c28d7343ah61h1rvklhoqm9otbb.apps.googleusercontent.com';

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
  return(
    <GoogleOAuthProvider clientId={clientIdGoogle}>
    <GoogleButton/>
    </GoogleOAuthProvider>
  )
} 
export default GoogleAuth;
