/** @jsx createElement */
/** @jsxFrag createFragment */
import { createElement, createFragment } from '../framework/element';
import types from '../data/types';
import getNewActivity from './GetNewActivity';

export default function SetType() {
  return (
    <select
      name="activity-type"
      onChange={e => {
        window.dataStore.currentType = e.target.value;
        getNewActivity();
      }}
    >
      {types.map(type => {
        if (window.dataStore.currentType === type.toLowerCase()) {
          return (
            <option value={type} selected>
              {type}
            </option>
          );
        } else {
          return <option value={type}>{type}</option>;
        }
      })}
    </select>
  );
}
