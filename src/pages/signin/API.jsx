import axios from 'axios';
import { API_ADDRESS } from '../../shared/api/Address';

export const signinUser = async (phoneNumber, password) => {
  try {
    const response = await axios.post(`${API_ADDRESS}/auth/signin`, {
      phoneNumber,
      password,
    });
    const { token, permission } = response.data;
    setStorage(token, permission);
    return true;
  } catch (err) {
    return false;
  }
};

const setStorage = (token, permission) => {
  localStorage.setItem('token', token);
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
