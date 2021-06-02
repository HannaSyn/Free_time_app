/** @jsx createElement */
/** @jsxFrag createFragment */
import { createElement, createFragment } from '../framework/element';
import GetData from './GetData';

export default function RenderActivity() {
  if (Object.keys(window.dataStore.currentActivity).length) {
    return <p Class="activity">{window.dataStore.currentActivity.activity}</p>;
  } else {
    GetData();
    return <p Class="activity">{window.dataStore.currentActivity.activity}</p>;
  }
}
