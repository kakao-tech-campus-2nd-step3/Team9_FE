// 생년월일 업데이트 및 유효성 검사
export const handleBirthDateChange = (
  e: React.ChangeEvent<HTMLInputElement>,
  setBirthDate: (value: string) => void,
  setIsBirthDateValid: (value: boolean) => void,
) => {
  const value = e.target.value;
  setBirthDate(value);

  const birthDateRegex = /^\d{4}-\d{2}-\d{2}$/;
  setIsBirthDateValid(birthDateRegex.test(value));
};

// 휴대폰 포맷팅하여 업데이트 및 유효성 검사
export const handlePhoneChange = (
  e: React.ChangeEvent<HTMLInputElement>,
  setPhone: (value: string) => void,
  setIsPhoneValid: (value: boolean) => void,
) => {
  const formatPhone = (phone: string) => {
    if (phone.length <= 3) return phone;
    if (phone.length <= 6) return `${phone.slice(0, 3)}-${phone.slice(3)}`;
    if (phone.length <= 10) return `${phone.slice(0, 3)}-${phone.slice(3, 6)}-${phone.slice(6)}`;
    return `${phone.slice(0, 3)}-${phone.slice(3, 7)}-${phone.slice(7, 11)}`;
  };

  const formattedPhone = formatPhone(e.target.value.replace(/\D/g, ''));
  setPhone(formattedPhone);

  const phoneRegex = /^(\d{3}-\d{3,4}-\d{4})$/;
  setIsPhoneValid(phoneRegex.test(formattedPhone));
};

// 이메일 업데이트 및 유효성 검사
export const handleEmailChange = (
  e: React.ChangeEvent<HTMLInputElement>,
  setEmail: (value: string) => void,
  setIsEmailFormValid: (value: boolean) => void,
) => {
  const emailInput = e.target.value;
  setEmail(emailInput);

  setIsEmailFormValid(validateEmailInput(emailInput));
};

const validateEmailInput = (email: string): boolean => {
  if (!email) return false; // 이메일이 빈 값일 경우 false 반환

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};
