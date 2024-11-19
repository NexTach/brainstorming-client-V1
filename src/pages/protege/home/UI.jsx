import React from 'react';
import styled from 'styled-components';

const HomeWrapper = styled.div``;
const HomeContent = styled.div``;
const HomeHeader = styled.div``;

const UI = () => {
  const user = 'user';
  return (
    <HomeWrapper>
      <HomeContent>
        <HomeHeader>
          안녕하세요, <span>{user}</span>님! <br />
          오늘은 {new Date().getFullYear()}년 {new Date().getMonth() + 1}월{' '}
          {new Date().getDate()}일{' '}
          {['일', '월', '화', '수', '목', '금', '토'][new Date().getDay()]}
          요일입니다!
        </HomeHeader>
      </HomeContent>
    </HomeWrapper>
  );
};

export default UI;
