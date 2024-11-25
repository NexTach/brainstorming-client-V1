import styled from 'styled-components';
import { Colors } from '../../shared/UI/Colors';

const Text = styled.p`
  font-size: 1.5rem;
  padding: 2rem;
  color: ${Colors.BLACK};
  font-weight: 500;
  span {
    color: ${Colors.MAIN_COLOR};
  }
`;

const HomeHeader = ({ user, role }) => {
  const getDate = new Date();

  return (
    <Text>
      {' '}
      안녕하세요, {user}
      {role === 'protecter' ? '보호자' : ''}님! <br />
      오늘은 {getDate.getFullYear()}년 {getDate.getMonth() + 1}월{' '}
      {getDate.getDate()}일{' '}
      <span>
        {['일', '월', '화', '수', '목', '금', '토'][getDate.getDay()]}
        요일
      </span>
      이에요!
    </Text>
  );
};

export default HomeHeader;
