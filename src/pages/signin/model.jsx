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
    const role = localStorage.getItem('role');
    if (
      role === 'ROLE_WARD_0' ||
      role === 'ROLE_WARD_1' ||
      role === 'ROLE_WARD_2' ||
      role === 'ROLE_WARD_3' ||
      role === 'ROLE_ADMIN' ||
      role === 'ROLE_DEVELOPER'
    ) {
      navigate('/protege/home');
    } else if (role === 'ROLE_PROTECTOR') {
      navigate('/protector/home');
    }
  } else {
    handleLoginError(result, setError);
  }
};

const handleLoginError = (result, setError) => {
  const errorMessages = {
    400: '잘못된 응답 데이터입니다.',
    401: '비밀번호가 올바르지 않습니다.',
    404: '존재하지 않는 유저입니다.',
    503: '서버와의 통신에 실패했습니다.',
  };

  const message = errorMessages[result] || `error code ${result}`;
  setError({
    message,
    isSuccess: false,
  });
};
