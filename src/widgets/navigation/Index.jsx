import { Link } from 'react-router-dom';
import styled from 'styled-components';
import ReminderIcon from '../../shared/assets/icon/ReminderIcon';
import HomeIcon from '../../shared/assets/icon/HomeIcon';
import ProfileIcon from '../../shared/assets/icon/ProfileIcon';
import { Colors } from '../../shared/UI/Colors';

const NavigationWrapper = styled.nav`
  display: flex;
  position: fixed;
  bottom: 0;
  width: 100vw;
  padding: 1rem;
  background-color: ${Colors.WHITE};
  justify-content: space-around;
`;

const Navigation = () => {
  return (
    <NavigationWrapper>
      <Link to="/reminder">
        <ReminderIcon />
      </Link>
      <Link to="/home">
        <HomeIcon />
      </Link>
      <Link to="/profile">
        <ProfileIcon />
      </Link>
    </NavigationWrapper>
  );
};

export default Navigation;
