import { signinUser } from './API';

export const handleLogin = async (
  phoneNumber,
  password,
  setError,
  navigate,
) => {
  try {
    const success = await signinUser(phoneNumber, password);
    if (success) {
      navigate('/home');
    } else {
      setError('아이디 또는 비밀번호가 올바르지 않습니다.');
    }
  } catch (err) {
    setError('서버와의 통신에 문제가 생겼습니다.');
  }
};
