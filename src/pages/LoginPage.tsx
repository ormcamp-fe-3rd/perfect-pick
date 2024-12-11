import { Link } from 'react-router-dom';

import LoginInput from '@/components/login/LoginInput';
import LoginTitle from '@/components/login/LoginTitle';

function LoginPage() {
  return (
    <div className="white-wrap bg-[#f4f4f4] py-[120px] lg:py-[75px] md:pt-[35px]">
      <div className="white-box mx-auto box-border flex flex-col justify-center rounded-[20px] bg-white px-[100px] pb-[130px] pt-[85px] lg:w-full lg:px-[50px] md:px-[10px] md:pb-[70px] md:pt-[50px]">
        <Link
          to={'/'}
          className="lg:leading-2 inline-block text-center font-BagelFatOne text-[2.5rem] text-[#1F2C3E] md:text-[30px]"
        >
          <h1>PERFECT PICK</h1>
        </Link>

        <LoginTitle title="로그인" />

        <div>
          <LoginInput
            type="text"
            name="아이디"
            errorText="※ 영문 또는 숫자 6~20자로 입력해주세요."
          />
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
