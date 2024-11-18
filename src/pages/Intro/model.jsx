import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Model = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/signin');
  }, [navigate]);

  return null;
};

export default Model;
