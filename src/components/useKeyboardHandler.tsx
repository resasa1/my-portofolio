import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const useKeyboardHandler = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      switch (event.key) {
        case 'p':
          navigate('/project');
          break;
        case 'm':
          navigate('/mini-game');
          break;
        case 'c':
          navigate('/connect');
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [navigate]);
};

export default useKeyboardHandler;