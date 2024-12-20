import React from 'react';
import styled, { css } from 'styled-components';
import { Colors } from '../../shared/UI/Colors';

const ButtonWrapper = styled.button`
  height: 3rem;
  border-radius: 0.5rem;
  font-weight: 500;
  transition: background-color 0.2s;
  border: none;

  ${props =>
    props.variant === 'primary' &&
    css`
      background-color: ${Colors.MAIN_COLOR};
      color: ${Colors.WHITE};

      &:hover {
        background-color: ${Colors.MAIN_COLOR};
      }
    `}

  ${props =>
    props.variant === 'secondary' &&
    css`
      background-color: ${Colors.G_3};

      &:hover {
        background-color: ${Colors.G_3};
      }
    `}

  ${props =>
    props.fullWidth &&
    css`
      width: 100%;
    `}
`;

const Index = ({ variant = 'primary', fullWidth, ...props }) => {
  return <ButtonWrapper variant={variant} fullWidth={fullWidth} {...props} />;
};

export default Index;
