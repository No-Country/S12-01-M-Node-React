import React from 'react';
import Image from 'next/image';
import bellIcon from '@/assets/svg/bellIcon.svg';
import heartIcon from '@/assets/svg/heartIcon.svg';

const UserActions = ({ role  }) => (
  <div className="flex gap-8 items-center justify-around">
    <Image src={bellIcon} alt="Notificaciones" />
    {role === 1 && <Image src={heartIcon} alt="Favoritos" />}
    {/* Add other user actions as needed */}
  </div>
);

export default UserActions;