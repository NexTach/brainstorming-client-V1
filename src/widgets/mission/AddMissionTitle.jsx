import Input from '../../widgets/input/Index';
import { useState } from 'react';
import { AddMissionWrapper, AddMissionHeader } from '../../pages/addMission/UI';
import Button from '../../widgets/Button/Index';
import { Colors } from '../../shared/UI/Colors';

const AddMissionTitle = ({ onNext }) => {
  const [missionTitle, setMissionTitle] = useState('');

  const handleNext = () => {
    if (missionTitle.trim()) {
      onNext({ title: missionTitle });
    }
  };

  return (
    <AddMissionWrapper>
      <AddMissionHeader>
        <h1>어떤 미션을 추가하고 싶으신가요?</h1>
      </AddMissionHeader>
      <Input
        label="미션 적기"
        value={missionTitle}
        onChange={e => setMissionTitle(e.target.value)}
        placeholder="추가하고 싶은 미션을 입력해주세요"
      />
      <Button
        onClick={handleNext}
        style={{
          backgroundColor: missionTitle.trim() ? Colors.MAIN_COLOR : Colors.G_3,
          color: missionTitle.trim() ? Colors.WHITE : Colors.G_2,
          cursor: missionTitle.trim() ? 'pointer' : 'not-allowed',
        }}
      >
        다음
      </Button>
    </AddMissionWrapper>
  );
};

export default AddMissionTitle;
