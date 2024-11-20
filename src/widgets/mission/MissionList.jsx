import React from 'react';
import styled from 'styled-components';
import MissionItem from './MissionItem';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-self: center;
`;

const MissionList = () => {
  return (
    <Wrapper>
      <MissionItem missionName="오늘의 미션 1" />
      <MissionItem missionName="오늘의 미션 2" />
      <MissionItem missionName="오늘의 미션 3" />
    </Wrapper>
  );
};

export default MissionList;
