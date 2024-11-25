import React from 'react';
import styled from 'styled-components';
import Mission from '../../../widgets/mission/Index';
import HomeHeader from '../../../widgets/homeHeader/Index';
import { Colors } from '../../../shared/UI/Colors';
import PlusIcon from '../../../assets/PlusIcon';

const HomeWrapper = styled.div``;

const HomeContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const AddMissionButton = styled.div`
  background-color: ${Colors.WHITE};
  height: 3rem;

  align-self: center;
  outline: none;
  border: none;
  border-radius: 0.5rem;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
  width: 85%;
  svg {
    width: 2rem;
    height: 2rem;
  }
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const UI = () => {
  const user = '임시';

  return (
    <HomeWrapper>
      <HomeContent>
        <HomeHeader user={user} />
        <Mission innerText="오늘의 미션 리스트" />
        <AddMissionButton>
          <PlusIcon />
        </AddMissionButton>
      </HomeContent>
    </HomeWrapper>
  );
};

export default UI;
