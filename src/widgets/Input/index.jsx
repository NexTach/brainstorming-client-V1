import React from 'react';
import styled from 'styled-components';
import { Colors } from '../../shared/UI/Colors';
import InputField from './InputField';

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

const Index = ({ className, label, ...props }) => {
  return (
    <InputWrapper className={className}>
      {label && <Label>{label}</Label>}
      <InputField {...props} />
    </InputWrapper>
  );
};

export default Index;
