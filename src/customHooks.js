import { useEffect, useState } from './framework';
import getData from './data/getData';

export const useActivity = () => {
  let [currentType, setCurrentType] = useState('');
  const [repeatActivity, setRepeatActivity] = useState(false);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  let [currentActivity, setCurrentActivity] = useState({});

  useEffect(() => {
    getData(currentType)
      .then(data => {
        const { message, code } = data;

        if (code !== '200' && message) throw Error(message);

        setCurrentActivity(data);
        setCurrentType(data.type);
      })
      .catch(error)
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
