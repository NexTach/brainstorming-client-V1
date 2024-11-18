import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.nav`
  display: flex;
  gap: 1rem;
`;

export const Navigation = () => {
  return (
    <Container>
      <Link to="/reminder">Reminder</Link>
      <Link to="/home">Home</Link>
      <Link to="/profile">Profile</Link>
    </Container>
  );
};
