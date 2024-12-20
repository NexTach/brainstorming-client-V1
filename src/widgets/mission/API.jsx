import axios from 'axios';
import { API_ADDRESS } from '../../shared/api/Address';

export const getMissionList = async () => {
  try {
    const response = await axios.get(`${API_ADDRESS}/missions/list`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      },
    });
    console.log('API Response:', response.data);
    return response.data.body;
  } catch (err) {
    console.error('API Error:', err);
    return [];
  }
};

export const createMission = async missionData => {
  try {
    const response = await axios.post(
      `${API_ADDRESS}/missions/custom`,
      {
        toWard: '+821025298406',
        title: missionData.title || 'Untitled',
        content: missionData.content || 'default',
        expirationDate: missionData.expirationDate || null,
      },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
      },
    );
    return response.data;
  } catch (err) {
    console.error(err);
    return null;
  }
};
