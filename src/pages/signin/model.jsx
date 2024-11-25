import { signinUser } from './API';

export const handleLogin = async (
  phoneNumber,
  password,
  setError,
  navigate,
  permission,
) => {
  try {
    const success = await signinUser(phoneNumber, password);
    if (success) {
      if (localStorage.getItem('permission') === 'protege') {
        navigate('/protege/home');
      } else if (localStorage.getItem('permission') === 'mentor') {
        navigate('/mentor/home');
      }
    } else {
      setError('전화번호 또는 비밀번호가 올바르지 않습니다.');
    }
  } catch (err) {
    setError('서버와의 통신에 문제가 생겼습니다.');
  }
};
