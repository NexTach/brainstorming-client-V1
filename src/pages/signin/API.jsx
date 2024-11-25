import axios from 'axios';
import { API_ADDRESS } from '../../shared/api/Address';

export const signinUser = async (phoneNumber, password) => {
  try {
    const response = await axios.post(`${API_ADDRESS}/auth/signin`, {
      phoneNumber,
      password,
    });

    const { accessToken, role } = response.data;

    if (!accessToken || !role) {
      return 400;
    }

    setStorage(accessToken, role);
    return true;
  } catch (err) {
    if (err.response) {
      return err.response.status;
    }
    return 503;
  }
};

const setStorage = (accessToken, role) => {
  if (accessToken && role) {
    localStorage.setItem('accessToken', accessToken);
    localStorage.setItem('role', role);
  }
};
