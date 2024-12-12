import { useState } from 'react';

import RegisterInput from '@/components/register/RegisterInput';
import {
  emailValidation,
  passwordValidation,
  useridValidation,
  usernameValidation,
} from '@/utils/validations';

export default function RegisterForm() {
  const [formValues, setFormValues] = useState({
    username: '',
    userid: '',
    password: '',
    email: '',
  });

  const [isSuccess, setIsSuccess] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormValues((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const isValid =
      usernameValidation(formValues.username) &&
      useridValidation(formValues.userid) &&
      passwordValidation(formValues.password) &&
      emailValidation(formValues.email);

    if (isValid) {
      setIsSuccess(true);
    } else {
      setIsSuccess(false);
      alert('입력 정보를 다시 확인해주세요.');
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <ul>
        <li>
          <RegisterInput
            type="text"
            placeholder="이름을 입력해주세요."
            checkTexts={['영문 / 한글']}
            validation={usernameValidation}
            onChange={(value) => handleInputChange('username', value)}
          />
        </li>
        <li>
          <RegisterInput
            type="text"
            placeholder="아이디를 입력해주세요."
            checkTexts={['영문 / 숫자', '6~20자 내외']}
            showButton={true}
            buttonText="중복확인"
            validation={useridValidation}
            onChange={(value) => handleInputChange('userid', value)}
          />
        </li>
        <li>
          <RegisterInput
            type="password"
            placeholder="비밀번호를 입력해주세요."
            checkTexts={['영문', '숫자', '특수문자 (!@$%^*_+~)', '8~20자 내외']}
            validation={passwordValidation}
            onChange={(value) => handleInputChange('password', value)}
          />
        </li>
        {/* <li>
                <RegisterInput
                  type="password"
                  placeholder="주소 찾기로 입력해주세요."
                  checkTexts={['주소 / 상세주소']}
                  showButton={true}
                  addressInput={true}
                  disableInput={true}
                  buttonText="주소찾기"
                />
              </li> */}
        <li>
          <RegisterInput
            type="text"
            placeholder="이메일을 입력해주세요"
            checkTexts={['이메일 형식']}
            validation={emailValidation}
            onChange={(value) => handleInputChange('email', value)}
          />
        </li>
      </ul>

      <button
        className="mt-[107px] h-[70px] w-full rounded-full bg-black text-center text-2xl font-semibold text-white md:mt-[50px]"
        type="submit"
      >
        가입
      </button>
      {isSuccess && <p>가입 성공!</p>}
    </form>
  );
}
