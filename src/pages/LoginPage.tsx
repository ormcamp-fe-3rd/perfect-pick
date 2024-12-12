import { Link } from 'react-router-dom';

import LoginButton from '@/components/login/LoginButton';
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

        <div>
          <LoginTitle title="로그인" />

          <div>
            <form action="">
              <LoginInput
                type="text"
                name="아이디"
                errorText="※ 영문 또는 숫자 6~20자로 입력해주세요."
              />
              <LoginInput
                type="password"
                name="비밀번호"
                errorText="※ 영문/숫자/특수문자 포함 8~20자로  입력해주세요."
              />
              <LoginButton name="로그인" />
            </form>
            <p className="mt-[37px] text-center text-lg">
              퍼펙트픽이 처음이신가요?{' '}
              <Link to={'/register'} className="font-semibold">
                회원가입
              </Link>
            </p>
          </div>
        </div>

        <div className="mt-[84px] lg:mt-10 md:mt-[30px]">
          <LoginTitle title="비회원 주문조회" />

          <div>
            <form action="">
              <LoginInput
                type="text"
                name="주문번호 "
                errorText="※ 주문번호 형식에 맞게 입력해주세요."
              />
              <LoginInput
                type="text"
                name="핸드폰 번호"
                errorText="※ 올바른 핸드폰 번호를 입력해주세요."
              />
              <LoginButton name="주문조회" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
