import React from 'react';
import styled from 'styled-components';
import MissionItem from './MissionItem';

const Wrapper = styled.div`
  display: flex;
  align-self: center;
  flex-direction: column;
  gap: 1rem;
  border-radius: 0.5rem;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
  width: 85%;
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
