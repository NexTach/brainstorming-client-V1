import axios from 'axios';
import { API_ADDRESS } from '../../shared/api/Address';

export const getMissionList = async () => {
  try {
    const token = localStorage.getItem('accessToken');
    const response = await axios.get(`${API_ADDRESS}/mission/list`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data.body;
  } catch (err) {
    console.error(err);
    return [];
  }
};
