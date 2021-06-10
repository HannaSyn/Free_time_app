/** @jsx createElement */
/** @jsxFrag createFragment */
import { createElement, createFragment } from '../framework/element';

export default function RenderActivity({ currentActivity, isLoaded }) {
  if (!isLoaded) {
    return <p Class="loading">...</p>;
  }

  return <p Class="activity">{currentActivity.activity}</p>;
}
