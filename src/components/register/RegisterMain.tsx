import { Link } from 'react-router-dom';

import RegisterInput from '@/components/register/RegisterInput';

export default function RegisterMain() {
  const usernameValidation = (value: string) =>
    /^[a-zA-Z가-힣]{1,20}$/.test(value);

  const useridValidation = (value: string) =>
    /^[a-zA-Z가-힣]{6,20}$/.test(value);

  const passwordValidation = (value: string) =>
    /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@$%^*_+~])[a-zA-Z\d!@$%^*_+~]{8,20}$/.test(
      value,
    );

  const emailValidation = (value: string) =>
    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value);

  return (
    <div className="white-wrap bg-[#f4f4f4] py-[120px] lg:py-[75px] md:pt-[35px]">
      <div className="white-box mx-auto box-border flex flex-col justify-center rounded-[20px] bg-white px-[100px] pb-[130px] pt-[85px] lg:px-[50px] md:px-[10px] md:pb-[70px] md:pt-[50px]">
        <Link
          to={'/'}
          className="lg:leading-2 inline-block text-center font-BagelFatOne text-[2.5rem] text-[#1F2C3E] md:text-[30px]"
        >
          <h1>PERFECT PICK</h1>
        </Link>
        <h2 className="pt-[70px] text-center text-3xl font-extrabold lg:pt-[50px] md:pt-[25px] md:text-[30px]">
          회원가입
        </h2>
        <div>
          <form action="">
            <ul>
              <li>
                <RegisterInput
                  type="text"
                  placeholder="이름을 입력해주세요."
                  checkTexts={['영문 / 한글']}
                  validation={usernameValidation}
                />
              </li>
              <li>
                <RegisterInput
                  type="text"
                  placeholder="아이디를 입력해주세요."
                  checkTexts={['영문 / 한글', '6~20자 내외']}
                  showButton={true}
                  buttonText="중복확인"
                  validation={useridValidation}
                />
              </li>
              <li>
                <RegisterInput
                  type="password"
                  placeholder="비밀번호를 입력해주세요."
                  checkTexts={[
                    '영문',
                    '숫자',
                    '특수문자 (!@$%^*_+~)',
                    '8~20자 내외',
                  ]}
                  validation={passwordValidation}
                />
              </li>
              <li>
                <RegisterInput
                  type="password"
                  placeholder="주소 찾기로 입력해주세요."
                  checkTexts={['주소 / 상세주소']}
                  showButton={true}
                  addressInput={true}
                  disableInput={true}
                  buttonText="주소찾기"
                />
              </li>
              <li>
                <RegisterInput
                  type="text"
                  placeholder="이메일을 입력해주세요"
                  checkTexts={['이메일 형식']}
                  validation={emailValidation}
                />
              </li>
            </ul>

            <button
              className="mt-[107px] h-[70px] w-full rounded-full bg-black text-center text-2xl font-semibold text-white md:mt-[50px]"
              type="submit"
            >
              가입
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
