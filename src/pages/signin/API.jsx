import axios from 'axios';
import { API_ADDRESS } from '../../../shared/api/Address';

export const signinUser = async (phoneNumber, password) => {
  try {
    const response = await axios.post(`${API_ADDRESS}/auth/signin`, {
      phoneNumber,
      password,
    });
    const { token } = response.data;
    localStorage.setItem('token', token);
    return true;
  } catch (err) {
    return false;
  }
};
