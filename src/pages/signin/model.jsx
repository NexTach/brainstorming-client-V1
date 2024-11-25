import { signinUser } from './API';

export const handleLogin = async (
  phoneNumber,
  password,
  setError,
  navigate,
) => {
  try {
    const result = await signinUser(phoneNumber, password);
    handleLoginResult(result, setError, navigate);
  } catch (err) {
    setError({
      message: '서버와의 통신에 문제가 생겼습니다.',
      isSuccess: false,
    });
  }
};

const handleLoginResult = (result, setError, navigate) => {
  if (result === true) {
    setError({ message: '로그인에 성공했습니다.', isSuccess: true });
    navigateToHome(navigate);
  } else {
    handleLoginError(result, setError);
  }
};

const navigateToHome = navigate => {
  const permission = localStorage.getItem('permission');
  if (permission === 'protege' || permission === 'admin') {
    navigate('/protege/home');
  } else if (permission === 'protector') {
    navigate('/protector/home');
  }
};

const handleLoginError = (result, setError) => {
  const errorMessages = {
    401: '비밀번호가 올바르지 않습니다.',
    404: '존재하지 않는 유저입니다.',
  };

  const message = errorMessages[result] || `error code ${result}`;
  setError({
    message,
    isSuccess: false,
  });
};
