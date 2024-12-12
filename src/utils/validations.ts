export const usernameValidation = (value: string) =>
  /^[a-zA-Z가-힣]{1,20}$/.test(value);

export const useridValidation = (value: string) =>
  /^[a-zA-Z0-9]{6,20}$/.test(value);

export const passwordValidation = (value: string) =>
  /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@$%^*_+~])[a-zA-Z\d!@$%^*_+~]{8,20}$/.test(
    value,
  );

export const emailValidation = (value: string) =>
  /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value);
