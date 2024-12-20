import { useEffect, useState } from 'react';

import SearchAddress from '@/components/myPage/SearchAddress';
import { getUserInfo, updateUserAddress, updateUserPassword } from '@/firebase';

import UserInfoInput from './UserInfoInput';

interface User {
  userid: string | null;
  username: string | null;
  email: string | null;
  address: string | null;
}

export default function UserInfo() {
  const [user, setUser] = useState<User | null>(null);
  const [currentPwd, setCurrentPwd] = useState('');
  const [newPwd, setNewPwd] = useState('');
  const [newPwdCheck, setNewPwdCheck] = useState('');
  const [newAddress, setNewAddress] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const userInfo = await getUserInfo();
        setUser(userInfo);
      } catch (error) {
        console.log('사용자 정보를 가져오는 실패했습니다.', error);
      }
    };
    fetchUserInfo();
  }, []); // 랜더링시 최초 1회 사용

  const handlePasswordChange = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (newPwd !== newPwdCheck) {
      setError('새 비밀번호가 일치하지 않습니다.');
      return;
    }

    try {
      await updateUserPassword(currentPwd, newPwd);
      alert('비밀번호가 성공적으로 변경되었습니다.');
      setCurrentPwd('');
      setNewPwd('');
      setNewPwdCheck('');
    } catch (error) {
      // setError('비밀번호 변경 중 오류가 발생했습니다.');
      console.error(error);
    }
  };

  const handleAddressChange = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(''); // 에러 메시지 초기화

    try {
      await updateUserAddress(newAddress); // 주소 업데이트 함수 호출
      alert('주소가 성공적으로 변경되었습니다.');
    } catch (error) {
      // setError('주소 변경 중 오류가 발생했습니다.');
      console.error(error);
    }
  };

  return (
    <div className="mt-[15px] flex flex-col gap-[30px] border-t pt-[35px] font-bold">
      <div className="flex">
        <div className="w-1/3">아이디</div>
        <div className="w-2/3">{user?.userid?.split('@')[0]}</div>
        {/* 이메일 형식 제거 */}
      </div>
      <div className="flex">
        <div className="w-1/3">이름</div>
        <div className="w-2/3">{user?.username}</div>
      </div>
      <div className="flex">
        <div className="w-1/3">이메일</div>
        <div className="w-2/3">{user?.email}</div>
      </div>
      <form
        action=""
        className="flex flex-col gap-[30px]"
        onSubmit={(e) => {
          e.preventDefault();
          handlePasswordChange(e);
          handleAddressChange(e);
        }}
      >
        <div>
          <div>비밀번호</div>
          <div className="mt-5 flex flex-col gap-[5px]">
            <UserInfoInput
              id="inputCurrentPw"
              placeholder="현재 비밀번호를 입력해주세요."
              value={currentPwd}
              onChange={(e) => setCurrentPwd(e.target.value)}
            />
            <UserInfoInput
              id="inputNewPw"
              placeholder="새 비밀번호를 입력해주세요."
              value={newPwd}
              onChange={(e) => setNewPwd(e.target.value)}
            />
            <UserInfoInput
              id="inputNewPwAgain"
              placeholder="새 비밀번호를 다시 입력해주세요."
              value={newPwdCheck}
              onChange={(e) => setNewPwdCheck(e.target.value)}
            />
            {error && <div className="text-red-500 mt-2">{error}</div>}
          </div>
        </div>
        <div>
          <div>주소</div>
          <div className="mt-5">
            기존 주소 :{' '}
            {`서울 강남구 강남대로 324 역삼디오슈페리움 2층 모두의연구소`}
          </div>
          <div className="mt-[10px] flex flex-col gap-[5px]">
            <UserInfoInput
              id="inputBaseAddress"
              placeholder="주소 찾기로 입력해주세요."
              showButton={true}
              buttonText="주소 찾기"
              buttonId="findAddressButton"
              value={newAddress}
              onButtonClick={SearchAddress}
              onChange={(e) => setNewAddress(e.target.value)}
            />
            <UserInfoInput
              id="inputDetailAddress"
              placeholder="상세 주소를 입력해주세요."
            />
          </div>
        </div>
        <button className="h-[60px] w-full rounded-[50px] bg-black text-center text-lg text-white">
          수정하기
        </button>
      </form>
    </div>
  );
}
