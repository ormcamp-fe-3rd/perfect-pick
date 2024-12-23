import { useEffect, useState } from 'react';

import { getUserInfo } from '@/firebase';

import { User } from './UserInfo';

export default function WelcomeMessage() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const userInfo = await getUserInfo();
        setUser(userInfo as User);
      } catch (error) {
        console.log('사용자 정보를 가져오는 실패했습니다.', error);
      }
    };
    fetchUserInfo();
  }, []); // 랜더링시 최초 1회 사용

  return (
    <div className="flex h-[529px] justify-between text-nowrap rounded-[20px] bg-[#F74927] lg:h-[305px] md:h-[240px]">
      <div className="ml-11 mt-11 flex flex-col gap-4 text-white">
        <p className="font-bold">퍼펙트픽</p>
        <div className="text-3xl font-extrabold md:text-[36px]">
          <p>안녕하세요!</p>
          <p>{user?.username}님</p>
        </div>
      </div>
      <div className="flex items-end">
        <img
          className="max-h-full object-cover pt-5"
          src="src/assets/images/mypage/card-img.png"
          alt="human image"
        />
      </div>
    </div>
  );
}
