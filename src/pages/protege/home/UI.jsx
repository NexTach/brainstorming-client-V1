import React from 'react';
import styled from 'styled-components';
import { Colors } from '../../../shared/UI/Colors';

const HomeWrapper = styled.div``;
const HomeContent = styled.div``;
const HomeHeader = styled.div`
  font-size: 1.5rem;
  padding: 2rem;
  color: ${Colors.BLACK};
  span {
    color: ${Colors.MAIN_COLOR};
  }
`;

const UI = () => {
  const user = 'user';
  return (
    <HomeWrapper>
      <HomeContent>
        <HomeHeader>
          안녕하세요, {user}님! <br />
          오늘은 {new Date().getFullYear()}년 {new Date().getMonth() + 1}월{' '}
          {new Date().getDate()}일{' '}
          <span>
            {['일', '월', '화', '수', '목', '금', '토'][new Date().getDay()]}
            요일
          </span>
          이에요!
        </HomeHeader>
      </HomeContent>
    </HomeWrapper>
  );
};

export default UI;
