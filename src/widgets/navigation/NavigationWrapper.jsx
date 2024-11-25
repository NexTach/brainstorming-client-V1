import { Colors } from '../../shared/UI/Colors';
import styled from 'styled-components';

const NavigationWrapper = styled.nav`
  display: flex;
  position: fixed;
  bottom: 0;
  width: 100vw;
  padding: 1rem;
  background-color: ${Colors.WHITE};
  justify-content: space-around;
`;

export default NavigationWrapper;
