import Input from '../../widgets/input/Index';
import { useState } from 'react';
import { AddMissionWrapper, AddMissionHeader } from '../../pages/addMission/UI';

const AddMissionTitle = () => {
  const [missionTitle, setMissionTitle] = useState('');
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
    </AddMissionWrapper>
  );
};

export default AddMissionTitle;
