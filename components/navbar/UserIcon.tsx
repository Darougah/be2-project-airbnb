// import { LuUser2 } from 'react-icons/lu';
// import { fetchProfileImage } from '@/utils/actions';

// async function UserIcon() {
//   const profileImage = await fetchProfileImage();

//   if (profileImage)
//     return (
//       <img src={profileImage} className='w-6 h-6 rounded-full object-cover' />
//     );
//   return <LuUser2 className='w-6 h-6 bg-primary rounded-full text-white' />;
// }
// export default UserIcon;

'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { LuUser2 } from 'react-icons/lu';
import { fetchProfileImage } from '@/utils/actions';

function UserIcon() {
  const [profileImage, setProfileImage] = useState<string | null>(null);

  useEffect(() => {
    async function loadProfileImage() {
      try {
        const image = await fetchProfileImage();
        setProfileImage(image ?? null); // Convert undefined to null
      } catch (error) {
        console.error('Error fetching profile image:', error);
      }
    }

    loadProfileImage();
  }, []);

  if (profileImage) {
    return (
      <Image
        src={profileImage}
        alt="User Avatar"
        width={24}
        height={24}
        className="w-6 h-6 rounded-full object-cover"
      />
    );
  }

  return <LuUser2 className="w-6 h-6 bg-primary rounded-full text-white" />;
}

export default UserIcon;
