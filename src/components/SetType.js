import React from 'react';
import types from '../data/types';

export default function SetType({ currentType, isLoaded, onChange }) { // TODO YAGNI
  return (
    <select name="activity-type" onChange={e => onChange(e.target.value)}> {/* TODO move to handler */}
      {types.map(type => {
        if (currentType === type) {
          return (
            <option key={type} value={type} selected>
              {type}
            </option>
          );
        } else {   // TODO redundant else
          return (
            <option key={type} value={type}>
              {type}
            </option>
          );
        }
      })}
    </select>
  );
}
