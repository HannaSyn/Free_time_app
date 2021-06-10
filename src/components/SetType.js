/** @jsx createElement */
/** @jsxFrag createFragment */
import { createElement, createFragment } from '../framework/element';
import types from '../data/types';

export default function SetType({ currentType, isLoaded, onChange }) {
  return (
    <select name="activity-type" onChange={e => onChange(e.target.value)}>
      {types.map(type => {
        if (currentType === type) {
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
