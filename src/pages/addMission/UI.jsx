import { useState } from 'react';
import styled from 'styled-components';
import { Colors } from '../../shared/UI/Colors';
import Button from '../../widgets/Button/Index';
import AddMissionTitle from '../../widgets/mission/AddMissionTitle';
import AddMissionWeek from '../../widgets/mission/AddMissionWeek';

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
  const [step, setStep] = useState(1);
  const [missionData, setMissionData] = useState({
    title: '',
    days: [],
  });

  const handleNext = data => {
    setMissionData(prev => ({ ...prev, ...data }));
    setStep(prev => prev + 1);
  };

  return (
    <>
      {step === 1 && <AddMissionTitle onNext={handleNext} />}
      {step === 2 && (
        <AddMissionWeek onNext={handleNext} missionData={missionData} />
      )}
    </>
  );
};

export default UI;
