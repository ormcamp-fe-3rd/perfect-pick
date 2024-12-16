import UserInfoInput from './UserInfoInput';

export default function UserInfo() {
  return (
    <div className="mt-[15px] flex flex-col gap-[30px] border-t pt-[35px] font-bold">
      <div className="flex">
        <div className="w-1/3">아이디</div>
        <div className="w-2/3">{`아이디`}</div>
      </div>
      <div className="flex">
        <div className="w-1/3">이름</div>
        <div className="w-2/3">{`이름`}</div>
      </div>
      <div className="flex">
        <div className="w-1/3">이메일</div>
        <div className="w-2/3">{`이메일`}</div>
      </div>
      <div>
        <div>비밀번호</div>
        <div className="mt-5 flex flex-col gap-[5px]">
          <UserInfoInput placeholder="현재 비밀번호를 입력해주세요." />
          <UserInfoInput placeholder="새 비밀번호를 입력해주세요." />
          <UserInfoInput placeholder="새 비밀번호를 다시 입력해주세요." />
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
            placeholder="주소 찾기로 입력해주세요."
            showButton={true}
            buttonText="주소 찾기"
          />
          <UserInfoInput placeholder="상세 주소를 입력해주세요." />
        </div>
      </div>
      <button className="h-[60px] w-full rounded-[50px] bg-black text-center text-white">
        수정하기
      </button>
    </div>
  );
}
