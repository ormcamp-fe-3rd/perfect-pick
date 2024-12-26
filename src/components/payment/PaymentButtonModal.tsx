import { useState } from 'react';

// 임시: 추후 서버 연결
const memberPaymentPassword = '123123';

// 전역변수
const passwordLength = 6;

interface PaymentButtonModalProps {
  isAddressComplete?: boolean;
  isValid?: boolean;
}

export default function PaymentButtonModal({
  isAddressComplete,
  isValid,
}: PaymentButtonModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [password, setPassword] = useState('');

  const handleInputChange = (value: string | number) => {
    if (value === 'backspace') {
      setPassword(password.slice(0, -1)); // 백스페이스 처리
    } else if (value === 'clear') {
      setPassword(''); // 전체 삭제
    } else {
      if (password.length < passwordLength) {
        setPassword(password + value);
      }
    }
  };

  const handleButtonClick = () => {
    if (!isAddressComplete) return alert('배송지 정보를 확인해주세요');
    if (!isValid) return alert('결제수단과 개인정보동의를 확인해주세요.');
    setIsOpen(true);
  };

  const handleCloseButtonClick = () => {
    setPassword('');
    setIsOpen(false);
  };

  const handleConfirmButtonClick = () => {
    if (memberPaymentPassword === password) {
      alert('결제가 완료되었습니다.');
      setPassword('');
      setIsOpen(false);
    } else {
      alert('비밀번호를 확인해주세요.');
    }
  };

  const passwordKey = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'clear', 0, 'backspace'];
  const passwordLable = [1, 2, 3, 4, 5, 6, 7, 8, 9, '전체삭제', 0, '삭제'];

  return (
    <>
      <button
        className="m-auto h-20 w-[226px] rounded-[50px] bg-red text-2xl text-[white] md:w-[160px]"
        onClick={handleButtonClick}
        // disabled={!isEnable}
      >
        결제하기
      </button>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="absolute inset-0 bg-black opacity-50" />
          <div className="absolute left-1/2 top-1/2 flex w-2/3 min-w-[500px] max-w-[680px] -translate-x-1/2 -translate-y-1/2 transform flex-col items-center gap-16 rounded-2xl bg-white px-10 py-20 text-lg font-semibold checked:flex">
            <div className="text-3xl">결제 비밀번호 입력</div>
            <div className="flex h-10 gap-2">
              {password.split('').map((_, index: number) => (
                <div key={index} className="size-9 rounded-full bg-gray"></div>
              ))}
            </div>
            <div className="mx-20 grid h-[300px] w-[400px] grid-cols-3 gap-2 text-center">
              {passwordKey.map((value, index) => (
                <button
                  key={value}
                  className="w-full rounded-[10px] bg-black text-[30px] text-white"
                  onClick={() => handleInputChange(value)}
                >
                  {passwordLable[index]}
                </button>
              ))}
            </div>
            <div className="flex gap-5">
              <button
                className="h-20 w-40 rounded-[50px] bg-black text-2xl font-semibold text-[white] md:w-[160px]"
                onClick={handleConfirmButtonClick}
              >
                확인
              </button>
              <button
                className="h-20 w-40 rounded-[50px] bg-black text-2xl font-semibold text-[white] md:w-[160px]"
                onClick={handleCloseButtonClick}
              >
                닫기
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
