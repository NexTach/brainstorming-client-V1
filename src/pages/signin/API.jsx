import axios from 'axios';
import { API_ADDRESS } from '../../shared/api/Address';

export const signinUser = async (phoneNumber, password) => {
  try {
    const response = await axios.post(`${API_ADDRESS}/auth/signin`, {
      phoneNumber,
      password,
    });
    const { accessToken, permission } = response.data;
    setStorage(accessToken, permission);
    return true;
  } catch (err) {
    return err.response ? err.response.status : false;
  }
};

const setStorage = (accessToken, permission) => {
  localStorage.setItem('accessToken', accessToken);

  if (permission === 'ROLE_DEVELOPER' || permission === 'ROLE_ADMIN') {
    localStorage.setItem('permission', 'admin');
  } else if (permission === 'ROLE_PROTECTOR') {
    localStorage.setItem('permission', 'protector');
  } else if (
    permission === 'ROLE_WARD_0' ||
    permission === 'ROLE_WARD_1' ||
    permission === 'ROLE_WARD_2' ||
    permission === 'ROLE_WARD_3'
  ) {
    localStorage.setItem('permission', 'protege');
  }
};
