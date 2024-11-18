import { Link } from 'react-router-dom';
import styled from 'styled-components';
import ReminderIcon from '../../shared/assets/icon/ReminderIcon';
import HomeIcon from '../../shared/assets/icon/HomeIcon';
import ProfileIcon from '../../shared/assets/icon/ProfileIcon';

const Container = styled.nav`
  display: flex;
  gap: 1rem;
`;

export const Navigation = () => {
  return (
    <Container>
      <Link to="/reminder">
        <ReminderIcon />
      </Link>
      <Link to="/home">
        <HomeIcon />
      </Link>
      <Link to="/profile">
        <ProfileIcon />
      </Link>
    </Container>
  );
};
