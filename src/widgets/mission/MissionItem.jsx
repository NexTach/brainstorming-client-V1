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

const Status = styled.span`
  font-size: 0.875rem;
  color: ${props => {
    switch (props.status) {
      case 'STATUS_PROGRESS':
        return Colors.MAIN_COLOR;
      case 'STATUS_SUCCESSFUL':
        return '#4CAF50';
      case 'STATUS_EXPIRED':
        return Colors.G_2;
      case 'STATUS_FAILED':
        return '#F44336';
      default:
        return Colors.G_2;
    }
  }};
`;

const MissionItem = ({ mission }) => {
  const getStatusText = status => {
    switch (status) {
      case 'STATUS_PROGRESS':
        return '진행중';
      case 'STATUS_SUCCESSFUL':
        return '완료';
      case 'STATUS_EXPIRED':
        return '만료됨';
      case 'STATUS_FAILED':
        return '실패';
      default:
        return '알 수 없음';
    }
  };

  return (
    <ItemWrapper>
      <MissionInfo>
        <Title>{mission.title}</Title>
        <Status status={mission.status}>{getStatusText(mission.status)}</Status>
      </MissionInfo>
    </ItemWrapper>
  );
};

export default MissionItem;
