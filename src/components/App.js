import React from 'react';
import { useActivity } from '../customHooks';
import SetType from './SetType';
import RenderActivity from './RenderActivity';

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
        onClick={() => { // TODO move to handler (const handleClick = () => {...})
          setCurrentType('');
          setRepeatActivity(!repeatActivity);
        }}
      >
        Find random activity
      </button>
      <SetType
        currentType={currentType}
        isLoaded={isLoaded}
        onChange={type => { // TODO move to handler
          setCurrentType(type);
          setRepeatActivity(!repeatActivity);
        }}
      />
      <RenderActivity currentActivity={currentActivity} isLoaded={isLoaded} />
      <p>Are you still bored?</p>
      <button
        onClick={() => {
          setRepeatActivity(!repeatActivity); // TODO move to handler
        }}
      >
        Find more {currentType}
      </button>
    </>
  );
}
