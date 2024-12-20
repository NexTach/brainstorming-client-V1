import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Redirect = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/signin');
  }, [navigate]);

  return null;
};

export default Redirect;
