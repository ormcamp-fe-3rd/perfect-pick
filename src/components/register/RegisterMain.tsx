import { Link } from 'react-router-dom';

import RegisterInput from './RegisterInput';

export default function RegisterMain() {
  return (
    <div className="h-screen bg-[#f4f4f4] pt-[120px]">
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
                  checkText="한글 / 영문"
                />
              </li>
            </ul>
          </form>
        </div>
      </div>
    </div>
  );
}
