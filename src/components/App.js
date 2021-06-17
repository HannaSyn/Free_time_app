import React from 'react';
import { useActivity } from '../customHooks';
import SetType from './SetType';
import RenderActivity from './RenderActivity';

const handleClick = (repeatActivity, type = null) => {
  if (type !== null) {
    setCurrentType(type);
  }
  
  setRepeatActivity(!repeatActivity);
};

export default function App() {
  let {
    currentActivity,
    currentType,
    setCurrentType,
    repeatActivity,
    setRepeatActivity,
    isLoaded,
  } = useActivity();

  return (
    <>
      <h1>Hello my friend!</h1>
      <h2>Are you really bored?</h2>
      <p>Let's see what we can do about it</p>
      <button
        onClick=handleClick(repeatActivity, '')
      >
        Find random activity
      </button>
      <SetType
        currentType={currentType}
        repeatActivity={repeatActivity}
        onChange=handleClick(repeatActivity, type)
      />
      <RenderActivity currentActivity={currentActivity} isLoaded={isLoaded} />
      <p>Are you still bored?</p>
      <button
        onClick=handleClick(repeatActivity)
      >
        Find more {currentType}
      </button>
    </>
  );
}
