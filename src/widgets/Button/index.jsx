import React from 'react';
import styled, { css } from 'styled-components';

const ButtonWrapper = styled.button`
  height: 3rem;
  border-radius: 0.5rem;
  font-weight: 500;
  transition: background-color 0.2s;

  ${props =>
    props.variant === 'primary' &&
    css`
      background-color: #3b82f6;
      color: white;

      &:hover {
        background-color: #2563eb;
      }
    `}

  ${props =>
    props.variant === 'secondary' &&
    css`
      background-color: #f3f4f6;
      color: #1f2937;

      &:hover {
        background-color: #e5e7eb;
      }
    `}

  ${props =>
    props.fullWidth &&
    css`
      width: 100%;
    `}
`;

export function Button({ variant = 'primary', fullWidth, ...props }) {
  return <ButtonWrapper variant={variant} fullWidth={fullWidth} {...props} />;
}
