import { useState } from 'react';

import RegisterInput from '@/components/register/RegisterInput';
import RegisterSuccess from '@/components/register/RegisterSuccess';
import {
  emailValidator,
  passwordValidator,
  useridValidator,
  usernameValidator,
} from '@/utils/validator';

interface User {
  username: string;
  userid: string;
  password: string;
  email: string;
}

export default function RegisterForm() {
  const [formValues, setFormValues] = useState<User>({
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

  const validator = ({ username, userid, password, email }: User) =>
    usernameValidator(username) &&
    useridValidator(userid) &&
    passwordValidator(password) &&
    emailValidator(email);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const isValid = validator(formValues);

    if (isValid) {
      // TODO: 서버에서 회원가입 요청 및 에러 핸들링 추가
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
            validation={usernameValidator}
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
            validation={useridValidator}
            onChange={(value) => handleInputChange('userid', value)}
          />
        </li>
        <li>
          <RegisterInput
            type="password"
            placeholder="비밀번호를 입력해주세요."
            checkTexts={['영문', '숫자', '특수문자 (!@$%^*_+~)', '8~20자 내외']}
            validation={passwordValidator}
            onChange={(value) => handleInputChange('password', value)}
          />
        </li>
        <li>
          <RegisterInput
            type="text"
            placeholder="이메일을 입력해주세요"
            checkTexts={['이메일 형식']}
            validation={emailValidator}
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
      {isSuccess && <RegisterSuccess />}
    </form>
  );
}
