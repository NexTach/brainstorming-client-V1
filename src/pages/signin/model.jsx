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
      setError({ message: '로그인에 성공했습니다.', isSuccess: true });
      if (
        localStorage.getItem('permission') === 'protege' ||
        localStorage.getItem('permission') === 'admin'
      ) {
        navigate('/protege/home');
      } else if (localStorage.getItem('permission') === 'protector') {
        navigate('/protector/home');
      }
    } else {
      setError({
        message: '전화번호 또는 비밀번호가 올바르지 않습니다.',
        isSuccess: false,
      });
    }
  } catch (err) {
    setError({
      message: '서버와의 통신에 문제가 생겼습니다.',
      isSuccess: false,
    });
  }
};
