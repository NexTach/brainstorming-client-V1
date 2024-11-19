import React from 'react';
import MissionHeader from '../mission/MissionHeader';
import MissionWrapper from '../mission/MissionWrapper';
import MissionList from '../mission/MissionList';

const Mission = ({ innerText }) => {
  return (
    <MissionWrapper>
      <MissionHeader>{innerText}</MissionHeader>
      <MissionList />
    </MissionWrapper>
  );
};

export default Mission;
