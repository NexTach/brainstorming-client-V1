import { useState } from 'react';
import { AddMissionWrapper, AddMissionHeader } from '../../pages/addMission/UI';
import Button from '../../widgets/Button/Index';
import styled from 'styled-components';
import { Colors } from '../../shared/UI/Colors';
import Input from '../../widgets/input/Index';

const NotificationOptions = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1.5rem;
`;

const Option = styled(Button)`
  flex: 1;
  background-color: ${props =>
    props.selected ? Colors.MAIN_COLOR : Colors.G_3};
  color: ${props => (props.selected ? Colors.WHITE : Colors.G_2)};
`;

const TimePickerWrapper = styled.div`
  display: ${props => (props.show ? 'block' : 'none')};
`;

const AddMissionNotification = ({ onNext }) => {
  const [useNotification, setUseNotification] = useState(false);
  const [notificationTime, setNotificationTime] = useState('');

  const handleNext = () => {
    onNext({
      useNotification,
      notificationTime: useNotification ? notificationTime : null,
    });
  };

  return (
    <AddMissionWrapper>
      <AddMissionHeader>
        <h1>알림을 설정하시겠습니까?</h1>
        <p>미션 수행 시간에 알림을 받을 수 있습니다</p>
      </AddMissionHeader>

      <NotificationOptions>
        <Option
          selected={useNotification}
          onClick={() => setUseNotification(true)}
        >
          예
        </Option>
        <Option
          selected={!useNotification}
          onClick={() => setUseNotification(false)}
        >
          아니오
        </Option>
      </NotificationOptions>

      <TimePickerWrapper show={useNotification}>
        <Input
          type="time"
          label="알림 시간"
          value={notificationTime}
          onChange={e => setNotificationTime(e.target.value)}
        />
      </TimePickerWrapper>

      <Button
        onClick={handleNext}
        style={{
          backgroundColor:
            !useNotification || notificationTime
              ? Colors.MAIN_COLOR
              : Colors.G_3,
          color:
            !useNotification || notificationTime ? Colors.WHITE : Colors.G_2,
          cursor:
            !useNotification || notificationTime ? 'pointer' : 'not-allowed',
        }}
      >
        다음
      </Button>
    </AddMissionWrapper>
  );
};

export default AddMissionNotification;
