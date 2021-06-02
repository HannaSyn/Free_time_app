/** @jsx createElement */
/** @jsxFrag createFragment */
import { createElement, createFragment } from '../framework/element';
import getData from '../data/getData';

export default function RenderActivity() {
  if (Object.keys(window.dataStore.currentActivity).length) {
    return <p Class="activity">{window.dataStore.currentActivity.activity}</p>;
  } else {
    getData();
    return <p Class="activity">{window.dataStore.currentActivity.activity}</p>;
  }
}
