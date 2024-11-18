import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
`;

const Title = styled.h1`
  font-size: 2rem;
`;

const SubTitle = styled.h2`
  font-size: 1.5rem;
`;

const UI = () => {
  return (
    <Wrapper>
      <SubTitle>같이하는 치매 예방</SubTitle>
      <SubTitle>기억해내는 치매 치료</SubTitle>
      <Title>Bstrom</Title>
    </Wrapper>
  );
};

export default UI;
