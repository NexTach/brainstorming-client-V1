import styled from 'styled-components';
import { Colors } from '../../shared/UI/Colors';
import Button from '../../widgets/Button/Index';
import AddMissionTitle from '../../widgets/mission/AddMissionTitle';

export const AddMissionHeader = styled.div`
  h1 {
    font-size: 1.25rem;
    font-weight: 500;
  }
`;

export const AddMissionWrapper = styled.div`
  min-height: calc(100vh - 10rem);
  background-color: ${Colors.WHITE};
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1.5rem;
`;

const UI = () => {
  return (
    <AddMissionWrapper>
      <AddMissionTitle />
      <Button>다음</Button>
    </AddMissionWrapper>
  );
};

export default UI;
