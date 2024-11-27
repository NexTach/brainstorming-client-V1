import React from 'react';
import styled from 'styled-components';
import { Colors } from '../../shared/UI/Colors';

const ItemWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  border-radius: 0.5rem;
  background-color: ${Colors.WHITE};
`;

const MissionInfo = styled.div`
  flex: 1;
`;

const Title = styled.h3`
  font-size: 1rem;
  color: ${Colors.BLACK};
`;

const MissionItem = ({ mission }) => {
  return (
    <ItemWrapper>
      <MissionInfo>
        <Title>{mission}</Title>
      </MissionInfo>
    </ItemWrapper>
  );
};

export default MissionItem;
