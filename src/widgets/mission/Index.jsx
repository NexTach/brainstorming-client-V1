import React, { useEffect, useState } from 'react';
import MissionHeader from './MissionHeader';
import MissionWrapper from './MissionWrapper';
import MissionList from './MissionList';
import { getMissionList } from './API';

const Index = ({ innerText }) => {
  const [missionList, setMissionList] = useState([]);

  useEffect(() => {
    const fetchMissions = async () => {
      const missions = await getMissionList();
      setMissionList(missions);
    };
    fetchMissions();
  }, []);

  return (
    <>
      <MissionHeader>{innerText}</MissionHeader>
      <MissionWrapper>
        <MissionList missionList={missionList} />
      </MissionWrapper>
    </>
  );
};

export default Index;
