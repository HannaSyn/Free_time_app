import React from 'react';

export default function RenderActivity({ currentActivity, isLoaded }) {
  if (!isLoaded) {
    return <p className="loading">...</p>;
  }

  return <p className="activity">{currentActivity.activity}</p>;
}
