import React from 'react';
import styled from 'styled-components';
import { Colors } from '../../../shared/UI/Colors';
import Mission from '../../../widgets/mission/Index';

const HomeWrapper = styled.div``;

const HomeContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const HomeHeader = styled.div`
  font-size: 1.5rem;
  padding: 2rem;
  color: ${Colors.BLACK};
  span {
    color: ${Colors.MAIN_COLOR};
  }
`;

const UI = () => {
  const user = '임시';
  const getDate = new Date();

  return (
    <HomeWrapper>
      <HomeContent>
        <HomeHeader>
          안녕하세요, {user}님! <br />
          오늘은 {getDate.getFullYear()}년 {getDate.getMonth() + 1}월{' '}
          {getDate.getDate()}일{' '}
          <span>
            {['일', '월', '화', '수', '목', '금', '토'][getDate.getDay()]}
            요일
          </span>
          이에요!
        </HomeHeader>
        <Mission />
      </HomeContent>
    </HomeWrapper>
  );
};

export default UI;
