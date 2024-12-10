import { Link } from 'react-router-dom';

import RegisterInput from '@/components/register/RegisterInput';

export default function RegisterMain() {
  return (
    <div className="bg-[#f4f4f4] py-[120px]">
      <div className="mx-auto box-border flex w-[1200px] flex-col justify-center rounded-[20px] bg-white px-[100px] pb-[130px] pt-[85px]">
        <Link
          to={'/'}
          className="lg:leading-2 inline-block text-center font-BagelFatOne text-[2.5rem] text-[#1F2C3E]"
        >
          <h1>PERFECT PICK</h1>
        </Link>
        <h2 className="pt-[70px] text-center text-3xl font-extrabold">
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
                />
              </li>
              <li>
                <RegisterInput
                  type="text"
                  placeholder="아이디를 입력해주세요."
                  checkTexts={['영문 / 한글', '6~20자 내외']}
                  showButton={true}
                  buttonText="중복확인"
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
                />
              </li>
              <li>
                <RegisterInput
                  type="text"
                  placeholder="이메일을 입력해주세요"
                  checkTexts={['이메일 형식']}
                />
              </li>
            </ul>

            <button
              className="mt-[107px] h-[70px] w-full rounded-full bg-black text-center text-2xl font-semibold text-white"
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
