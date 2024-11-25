import { Link } from 'react-router-dom';
import NavigationWrapper from './NavigationWrapper';
import ReminderIcon from '../../shared/assets/icon/ReminderIcon';
import HomeIcon from '../../shared/assets/icon/HomeIcon';
import ProfileIcon from '../../shared/assets/icon/ProfileIcon';

const Navigation = ({ role, selectedIcon }) => {
  return (
    <NavigationWrapper>
      <Link to={`/${role}/reminder`}>
        <ReminderIcon isSelected={selectedIcon === 'reminder'} />
      </Link>
      <Link to={`/${role}/home`}>
        <HomeIcon isSelected={selectedIcon === 'home'} />
      </Link>
      <Link to={`/${role}/profile`}>
        <ProfileIcon isSelected={selectedIcon === 'profile'} />
      </Link>
    </NavigationWrapper>
  );
};

export default Navigation;
