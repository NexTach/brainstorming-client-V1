import { useState } from 'react';
import { AddMissionWrapper, AddMissionHeader } from '../../pages/addMission/UI';
import Button from '../../widgets/Button/Index';
import styled from 'styled-components';
import { Colors } from '../../shared/UI/Colors';

const ButtonRow = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-bottom: 1rem;
`;

const StyledButton = styled(Button)`
  padding: 0.5rem 1rem;
  background-color: ${props =>
    props.selected ? Colors.MAIN_COLOR : Colors.G_3};
  color: ${props => (props.selected ? Colors.WHITE : Colors.G_2)};
`;

const AddMissionWeek = () => {
  const [selectedDays, setSelectedDays] = useState([]);

  const toggleDay = day => {
    setSelectedDays(prevState =>
      prevState.includes(day)
        ? prevState.filter(d => d !== day)
        : [...prevState, day],
    );
  };

  const daysOfWeek = [
    ['월', '화', '수', '목'],
    ['금', '토', '일'],
  ];

  return (
    <AddMissionWrapper>
      <AddMissionHeader>
        <h1>요일을 선택해주세요</h1>
        <p>중복 선택 가능</p>
      </AddMissionHeader>
      {daysOfWeek.map((weekRow, index) => (
        <ButtonRow key={index}>
          {weekRow.map(day => (
            <StyledButton
              key={day}
              onClick={() => toggleDay(day)}
              selected={selectedDays.includes(day)}
            >
              {day}
            </StyledButton>
          ))}
        </ButtonRow>
      ))}
    </AddMissionWrapper>
  );
};

export default AddMissionWeek;
