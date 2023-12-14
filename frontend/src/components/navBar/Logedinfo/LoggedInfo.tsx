import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import UserActions from './UserActions';
import UserInformation from './UserInformation';
import useUser from '@/store/loginStore';
import LinkMenu from '../LinkMenu';

const LoggedInfo = () => {
  const logged = useUser((state) => state.loginInfo);

  return (
    <div
      className={`flex justify-center gap-4 bg-Azul h-full rounded-tl-xl rounded-bl-xl items-center ${
        logged.isLogged ? 'w-[410px]' : 'w-[300px]'
      }`}
    >
      {logged.isLogged ? (
        <>
          <UserActions role={logged.usuario.role} />
          <UserInformation userName={logged.usuario.nombre} />
        </>
      ) : (
        <>
       <LinkMenu/>
        </>
      )}
    </div>
  );
};

export default LoggedInfo;
