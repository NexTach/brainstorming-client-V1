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

const Navigation = ({ selectedIcon }) => {
  return (
    <NavigationWrapper>
      <Link to="/reminder">
        <ReminderIcon isSelected={selectedIcon === 'reminder'} />
      </Link>
      <Link to="/home">
        <HomeIcon isSelected={selectedIcon === 'home'} />
      </Link>
      <Link to="/profile">
        <ProfileIcon isSelected={selectedIcon === 'profile'} />
      </Link>
    </NavigationWrapper>
  );
};

export default Navigation;
