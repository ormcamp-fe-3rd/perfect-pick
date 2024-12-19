import { useState } from 'react';
import { Link } from 'react-router-dom';

import LoginButton from '@/components/login/LoginButton';
import LoginInput from '@/components/login/LoginInput';
import LoginTitle from '@/components/login/LoginTitle';
import { loginEmail } from '@/firebase';

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [orderNumber, setOrderNumber] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [errors, setErrors] = useState<{
    username: string | null;
    password: string | null;
    orderNumber: string | null;
    phoneNumber: string | null;
  }>({ username: null, password: null, orderNumber: null, phoneNumber: null });

  const validateUsername = (value: string) => {
    if (!/^[a-zA-Z0-9]{6,20}$/.test(value)) {
      return '※ 아이디는 영문 또는 숫자 6~20자로 입력해야 합니다.';
    }
    return null;
  };

  const validatePassword = (value: string) => {
    if (
      !/^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*])[a-zA-Z\d!@#$%^&*]{8,20}$/.test(
        value,
      )
    ) {
      return '※ 비밀번호는 영문/숫자/특수문자 포함 8~20자로 입력해야 합니다.';
    }
    return null;
  };

  const validateOrderNumber = (value: string) => {
    if (!/^[a-z]\d{7,}$/.test(value)) {
      return '※ 주문번호 형식에 맞게 입력해주세요.';
    }
    return null;
  };

  const validatePhoneNumber = (value: string) => {
    if (!/^\d{10,11}$/.test(value.replace(/-/g, ''))) {
      return '※ 올바른 핸드폰 번호를 입력해주세요.';
    }
    return null;
  };

  const handleLoginSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const usernameError = validateUsername(username);
    const passwordError = validatePassword(password);

    setErrors((prev) => ({
      ...prev,
      username: usernameError,
      password: passwordError,
    }));

    if (!usernameError && !passwordError) {
      try {
        // 아이디를 이메일로 변환
        const emailFormatId = `${username}@example.com`;

        // Firebase 로그인 요청
        await loginEmail(emailFormatId, password);
        alert('로그인 성공!');
      } catch (error) {
        console.error('로그인 실패:', error);
        setErrors((prev) => ({
          ...prev,
          password:
            '※ 로그인에 실패했습니다. 아이디 또는 비밀번호를 확인해주세요.',
        }));
      }
    }
  };

  const handleOrderSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const orderNumberError = validateOrderNumber(orderNumber);
    const phoneNumberError = validatePhoneNumber(phoneNumber);

    setErrors((prev) => ({
      ...prev,
      orderNumber: orderNumberError,
      phoneNumber: phoneNumberError,
    }));

    if (!orderNumberError && !phoneNumberError) {
      alert('주문 조회 성공!');
    }
  };

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
            <form onSubmit={handleLoginSubmit}>
              <LoginInput
                type="text"
                name="아이디"
                errorText={errors.username}
                value={username}
                validate={validateUsername}
                onChange={setUsername}
              />
              <LoginInput
                type="password"
                name="비밀번호"
                value={password}
                errorText={errors.password}
                validate={validatePassword}
                onChange={setPassword}
              />
              <LoginButton name="로그인" />
            </form>
            <p className="mt-[37px] text-center text-lg">
              퍼펙트픽이 처음이신가요?
              <Link to={'/register'} className="font-semibold">
                회원가입
              </Link>
            </p>
          </div>
        </div>

        <div className="mt-[84px] lg:mt-10 md:mt-[30px]">
          <LoginTitle title="비회원 주문조회" />

          <div>
            <form onSubmit={handleOrderSubmit}>
              <LoginInput
                type="text"
                name="주문번호"
                errorText={errors.orderNumber}
                value={orderNumber}
                validate={validateOrderNumber}
                onChange={setOrderNumber}
              />
              <LoginInput
                type="text"
                name="핸드폰 번호"
                errorText={errors.phoneNumber}
                value={phoneNumber}
                validate={validatePhoneNumber}
                onChange={setPhoneNumber}
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
