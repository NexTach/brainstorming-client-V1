import { signinUser } from './API';

export const handleLogin = async (
  phoneNumber,
  password,
  setError,
  navigate,
) => {
  try {
    const result = await signinUser(phoneNumber, password);
    if (result === true) {
      setError({ message: '로그인에 성공했습니다.', isSuccess: true });
      if (
        localStorage.getItem('permission') === 'protege' ||
        localStorage.getItem('permission') === 'admin'
      ) {
        navigate('/protege/home');
      } else if (localStorage.getItem('permission') === 'protector') {
        navigate('/protector/home');
      }
    } else if (result === 401) {
      setError({
        message: '비밀번호가 올바르지 않습니다.',
        isSuccess: false,
      });
    } else if (result === 404) {
      setError({
        message: '존재하지 않는 유저입니다.',
        isSuccess: false,
      });
    } else {
      setError({
        message: `error code ${result}`,
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
