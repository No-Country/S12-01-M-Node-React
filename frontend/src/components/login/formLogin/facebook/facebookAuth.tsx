import FacebookIcon from '@/assets/icons/FacebookIcon';
import React, { FC, useEffect } from 'react';
import FacebookLogin, { ReactFacebookLoginInfo } from 'react-facebook-login';

interface FacebookLoginButtonProps {
  onLogin: (response: ReactFacebookLoginInfo) => void;
}

const FacebookAuth: FC<FacebookLoginButtonProps> = ({ onLogin }) => {
  const clientIdFacebook = "1584955498944348";

  useEffect(() => {
    const start = async () => {
      try {
        await (window as any).gapi.load('auth2');
        await (window as any).gapi.auth2.init({
          clientId: clientIdFacebook,
        });
      } catch (error) {
        console.error('Error initializing Facebook API', error);
      }
    };

    start();
  }, []);



  const responseFacebook = (response: ReactFacebookLoginInfo) => {
    console.log(response);
    onLogin(response);
  };

  return (
    
    <FacebookLogin
      appId={clientIdFacebook}
      autoLoad={false} 
      fields="name,email,picture"
      callback={responseFacebook}
      cssClass='rounded-full   text-3xl text-[#3b5998]  '
      icon='fa-facebook'
      textButton=''
    />
  );
};

export default FacebookAuth;
