import { useEffect, useState } from 'react';
import getData from './data/getData';

export const useActivity = () => {
  const [currentType, setCurrentType] = useState('');
  const [repeatActivity, setRepeatActivity] = useState(false);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentActivity, setCurrentActivity] = useState({});

  useEffect(() => {
    getData(currentType)
      .then(data => {
        const { message, code, type } = data;

        if (code !== '200' && message) throw Error(message);

        setCurrentActivity(data);
        setCurrentType(type);
      })
      .catch(() => setError(error))
      .finally(() => setIsLoaded(true));
  }, [repeatActivity]);

  return {
    currentActivity,
    currentType,
    setCurrentType,
    error,
    repeatActivity,
    setRepeatActivity,
    isLoaded,
  };
};
