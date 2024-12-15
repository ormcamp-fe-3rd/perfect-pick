import { useState } from 'react';

// 임시: 추후 서버 연결
const memberPaymentPassword = '123123';

// 전역변수
const passwordLength = 6;

export default function PaymentButtonModal() {
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

  const handleModalButton = (action: string) => {
    if (action === 'open') {
      setIsOpen(true);
    } else if (action === 'close') {
      setPassword('');
      setIsOpen(false);
    } else if (action === 'confirm') {
      if (memberPaymentPassword === password) {
        alert('결제가 완료되었습니다.');
        setPassword('');
        setIsOpen(false);
      } else {
        alert('비밀번호를 확인해주세요');
      }
    }
  };

  const passwordKey = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'clear', 0, 'backspace'];
  const passwordLable = [1, 2, 3, 4, 5, 6, 7, 8, 9, '전체삭제', 0, '삭제'];

  return (
    <>
      <button
        className="m-auto h-20 w-[226px] rounded-[50px] bg-red text-2xl text-[white] md:w-[160px]"
        onClick={() => handleModalButton('open')}
      >
        결제하기
      </button>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="absolute inset-0 bg-black opacity-50" />
          <div className="bg-white absolute left-1/2 top-1/2 flex w-2/3 min-w-[500px] max-w-[680px] -translate-x-1/2 -translate-y-1/2 transform flex-col items-center gap-16 rounded-2xl px-10 py-20 text-lg font-semibold checked:flex">
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
                  className="text-white w-full rounded-[10px] bg-black text-[30px]"
                  onClick={() => handleInputChange(value)}
                >
                  {passwordLable[index]}
                </button>
              ))}
            </div>
            <div className="flex gap-5">
              <button
                className="h-20 w-40 rounded-[50px] bg-black text-2xl font-semibold text-[white] md:w-[160px]"
                onClick={() => handleModalButton('confirm')}
              >
                확인
              </button>
              <button
                className="h-20 w-40 rounded-[50px] bg-black text-2xl font-semibold text-[white] md:w-[160px]"
                onClick={() => handleModalButton('close')}
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
