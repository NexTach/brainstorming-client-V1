import React from 'react';
import styled from 'styled-components';
import { colors } from '../../shared/ui/Colors';

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Label = styled.label`
  display: block;
  font-size: 0.875rem;
  color: ${colors.BLACK};
`;

const InputField = styled.input`
  width: 100%;
  height: 3rem;
  padding: 0 1rem;
  border-radius: 0.5rem;
  border: 1px solid ${colors.WHITE};
  outline: none;
  transition: all 0.2s;

  &:focus {
    border-color: ${colors.MAIN_COLOR};
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.3);
  }
`;

export function Input({ className, label, ...props }) {
  return (
    <InputWrapper className={className}>
      {label && <Label>{label}</Label>}
      <InputField {...props} />
    </InputWrapper>
  );
}
