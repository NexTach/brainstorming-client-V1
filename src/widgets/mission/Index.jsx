import React, { useEffect, useState } from 'react';
import MissionHeader from './MissionHeader';
import MissionWrapper from './MissionWrapper';
import MissionList from './MissionList';
import { getMissionList } from './API';

const Mission = ({ innerText }) => {
  const [missionList, setMissionList] = useState([]);

  useEffect(() => {
    const fetchMissions = async () => {
      const missions = await getMissionList();
      setMissionList(missions);
    };
    fetchMissions();
  }, []);

  return (
    <MissionWrapper>
      <MissionHeader>{innerText}</MissionHeader>
      <MissionList missionList={missionList} />
    </MissionWrapper>
  );
};

export default Mission;
