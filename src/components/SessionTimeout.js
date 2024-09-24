import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const SessionTimeout = ({ onTimeout }) => {
  const navigate = useNavigate();

  useEffect(() => {
    let timeoutId;

    const resetTimeout = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        onTimeout();
        navigate('/login');
      }, 30000); 
    };

   
    const handleActivity = () => {
      resetTimeout();
    };

    window.addEventListener('mousemove', handleActivity);
    window.addEventListener('keydown', handleActivity);

    resetTimeout(); 

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('mousemove', handleActivity);
      window.removeEventListener('keydown', handleActivity);
    };
  }, [navigate, onTimeout]);

  return null;
};

export default SessionTimeout;
