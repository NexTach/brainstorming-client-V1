import { useState } from 'react';
import { AddMissionWrapper, AddMissionHeader } from '../../pages/addMission/UI';
import Button from '../../widgets/Button/Index';

const AddMissionWeek = () => {
  const [selectedDays, setSelectedDays] = useState([]);

  const toggleDay = day => {
    setSelectedDays(prevState =>
      prevState.includes(day)
        ? prevState.filter(d => d !== day)
        : [...prevState, day],
    );
  };

  const daysOfWeek = ['월', '화', '수', '목', '금', '토', '일'];

  return (
    <AddMissionWrapper>
      <AddMissionHeader>
        <h1>요일을 선택해주세요</h1>
        <p>중복 선택 가능</p>
      </AddMissionHeader>
      <div>
        {daysOfWeek.map(day => (
          <Button
            key={day}
            onClick={() => toggleDay(day)}
            selected={selectedDays.includes(day)}
          >
            {day}
          </Button>
        ))}
      </div>
    </AddMissionWrapper>
  );
};

export default AddMissionWeek;
