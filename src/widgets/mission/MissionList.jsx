import React from 'react';
import styled from 'styled-components';
import MissionItem from './MissionItem';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-self: stretch;
`;

const MissionList = ({ missionList }) => {
  return (
    <Wrapper>
      {missionList.map(mission => (
        <MissionItem key={mission.id} mission={mission} />
      ))}
    </Wrapper>
  );
};

export default MissionList;
