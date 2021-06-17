import React from 'react';
import types from '../data/types';

export default function SetType({ currentType, repeatActivity, onChange }) {
  return (
    <select name="activity-type" onChange={e => onChange(repeatActivity, e.target.value)}>
      {types.map(type => {
        if (currentType === type) {
          return (
            <option key={type} value={type} selected>
              {type}
            </option>
          );
        }
        
        return (
          <option key={type} value={type}>
            {type}
          </option>
        );
      })}
    </select>
  );
}
