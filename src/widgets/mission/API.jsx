import axios from 'axios';
import { API_ADDRESS } from '../../shared/api/Address';

export const getMissionList = async () => {
  try {
    const token = localStorage.getItem('accessToken');
    const response = await axios.get(`${API_ADDRESS}/mission/list`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: {},
    });
    return response.data.body;
  } catch (err) {
    console.error(err);
    return [];
  }
};

export const createMission = async missionData => {
  try {
    const token = localStorage.getItem('accessToken');
    const response = await axios.post(`${API_ADDRESS}/mission/create`, {
      header: {
        Authorization: `Bearer ${token}`,
      },
      body: {
        toWard: localStorage.getItem('role'),
        title: missionData.title,
        content: missionData.content || '',
        expirationDate: missionData.expirationDate,
      },
    });
    return response.data;
  } catch (err) {
    console.error(err);
    return null;
  }
};
