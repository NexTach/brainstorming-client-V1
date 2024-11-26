import axios from 'axios';
import { API_ADDRESS } from '../../shared/api/Address';

export const getMissionList = async () => {
  try {
    const response = await axios.get(`${API_ADDRESS}/missions/list`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      },
    });
    return response.data.body;
  } catch (err) {
    console.error(err);
    return [];
  }
};

export const createMission = async missionData => {
  try {
    const response = await axios.post(
      `${API_ADDRESS}/missions/custom`,
      {
        toWard: localStorage.getItem('role') || 'ROLE_PROTEGE',
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
