import { useEffect, useState } from 'react';
import getData from './data/getData';

export const useActivity = () => {
  let [currentType, setCurrentType] = useState(''); // TODO why let?
  const [repeatActivity, setRepeatActivity] = useState(false);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  let [currentActivity, setCurrentActivity] = useState({});// TODO why let?

  useEffect(() => {
    getData(currentType)
      .then(data => {
        const { message, code } = data; // TODO destruct also type here (data.type)

        if (code !== '200' && message) throw Error(message);

        setCurrentActivity(data);
        setCurrentType(data.type);
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
