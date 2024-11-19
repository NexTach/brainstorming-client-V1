import React from 'react';
import MissionHeader from '../mission/MissionHeader';
import MissionWrapper from '../mission/MissionWrapper';

const Mission = ({ innerText }) => {
  return (
    <MissionWrapper>
      <MissionHeader>{innerText}</MissionHeader>
    </MissionWrapper>
  );
};

export default Mission;
