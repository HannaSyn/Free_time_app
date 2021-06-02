/** @jsx createElement */
/** @jsxFrag createFragment */
import { createElement, createFragment } from '../framework/element';
import SetType from './SetType';
import RenderActivity from './RenderActivity';
import getNewActivity from './GetNewActivity';

export default function App() {
  return (
    <>
      <h1>Hello my friend!</h1>
      <h2>Are you really bored?</h2>
      <p>Let's see what we can do about it</p>
      <button
        onClick={() => {
          window.dataStore.currentType = '';
          getNewActivity();
        }}
      >
        Find random activity
      </button>
      <SetType />
      <RenderActivity />
      <p>Are you still bored?</p>
      <button onClick={window.getNewActivity}>Find more {window.dataStore.currentType}</button>
    </>
  );
}
