// 사용자 이름 유효성 검사:
// - 영문 또는 한글로 입력
// - 1~20자
export const usernameValidation = (value: string) =>
  /^[a-zA-Z가-힣]{1,20}$/.test(value);

// 사용자 아이디 유효성 검사:
// - 영문 또는 숫자로 입력
// - 6~20자
export const useridValidation = (value: string) =>
  /^[a-zA-Z0-9]{6,20}$/.test(value);

// 사용자 비밀번호 유효성 검사:
// - 영문, 숫자, 특수문자 (!@$%^*_+~)를 각각 하나 이상 포함
// - 8~20자
export const passwordValidation = (value: string) =>
  /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@$%^*_+~])[a-zA-Z\d!@$%^*_+~]{8,20}$/.test(
    value,
  );

// 사용자 이메일 유효성 검사:
// - 로컬, @, 도메인(2자 이상)이 포함
export const emailValidation = (value: string) =>
  /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value);
