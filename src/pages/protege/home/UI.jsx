import React from 'react';
import styled from 'styled-components';
import Mission from '../../../widgets/mission/Index';
import HomeHeader from '../../../widgets/homeHeader/Index';

const HomeWrapper = styled.div``;

const HomeContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const UI = () => {
  const user = '임시';

  return (
    <HomeWrapper>
      <HomeContent>
        <HomeHeader user={user} />
        <Mission innerText="오늘의 미션 리스트" />
      </HomeContent>
    </HomeWrapper>
  );
};

export default UI;
