import React from 'react';
import styled, { css } from 'styled-components';
import { colors } from '../../shared/ui/Colors';

const ButtonWrapper = styled.button`
  height: 3rem;
  border-radius: 0.5rem;
  font-weight: 500;
  transition: background-color 0.2s;

  ${props =>
    props.variant === 'primary' &&
    css`
      background-color: ${colors.MAIN_COLOR};
      color: ${colors.WHITE};

      &:hover {
        background-color: ${colors.MAIN_COLOR};
      }
    `}

  ${props =>
    props.variant === 'secondary' &&
    css`
      background-color: ${colors.G_3};

      &:hover {
        background-color: ${colors.G_3};
      }
    `}

  ${props =>
    props.fullWidth &&
    css`
      width: 100%;
    `}
`;

export const Button = ({ variant = 'primary', fullWidth, ...props }) => {
  return <ButtonWrapper variant={variant} fullWidth={fullWidth} {...props} />;
};
