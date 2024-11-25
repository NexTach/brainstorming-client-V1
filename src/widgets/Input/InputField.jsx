import styled from 'styled-components';
import { Colors } from '../../shared/UI/Colors';

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

export default InputField;
