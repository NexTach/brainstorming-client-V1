import { useState } from 'react';
import styled from 'styled-components';
import { Colors } from '../../shared/UI/Colors';
import AddMissionTitle from '../../widgets/mission/AddMissionTitle';
import AddMissionWeek from '../../widgets/mission/AddMissionWeek';
import AddMissionNotification from '../../widgets/mission/AddMissionNotification';
import { createMission } from '../../widgets/mission/API';
import { useNavigate } from 'react-router-dom';

export const AddMissionHeader = styled.div`
  h1 {
    font-size: 1.25rem;
    font-weight: 500;
  }
  p {
    font-size: 0.875rem;
    color: ${Colors.G_2};
    margin-top: 0.5rem;
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
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [missionData, setMissionData] = useState({
    title: '',
    days: [],
    useNotification: false,
    notificationTime: null,
  });

  const handleNext = async data => {
    const updatedData = { ...missionData, ...data };
    setMissionData(updatedData);

    if (step === 3) {
      // Final step - create mission
      const expirationDate = new Date();
      expirationDate.setDate(expirationDate.getDate() + 7); // Set expiration to 7 days from now

      const result = await createMission({
        title: updatedData.title,
        content: `Days: ${updatedData.days.join(', ')}${
          updatedData.useNotification
            ? `, Notification: ${updatedData.notificationTime}`
            : ''
        }`,
        expirationDate: expirationDate.toISOString(),
      });

      if (result) {
        navigate('/protege/home');
      }
    } else {
      setStep(prev => prev + 1);
    }
  };

  return (
    <>
      {step === 1 && <AddMissionTitle onNext={handleNext} />}
      {step === 2 && <AddMissionWeek onNext={handleNext} />}
      {step === 3 && <AddMissionNotification onNext={handleNext} />}
    </>
  );
};

export default UI;
