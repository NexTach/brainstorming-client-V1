import React from 'react';
import styled from 'styled-components';
import { Colors } from '../../shared/UI/Colors';

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Label = styled.label`
  display: block;
  font-size: 0.875rem;
  color: ${Colors.BLACK};
`;

const InputField = styled.input`
  width: 100%;
  height: 3rem;
  padding: 0 1rem;
  border-radius: 0.5rem;
  border: 1px solid ${Colors.WHITE};
  outline: none;
  transition: all 0.2s;

  &:focus {
    border-color: ${Colors.MAIN_COLOR};
    box-shadow: 0 0 0 3px ${Colors.MAIN_COLOR};
  }
`;

const Index = ({ className, label, ...props }) => {
  return (
    <InputWrapper className={className}>
      {label && <Label>{label}</Label>}
      <InputField {...props} />
    </InputWrapper>
  );
};

export default Index;
