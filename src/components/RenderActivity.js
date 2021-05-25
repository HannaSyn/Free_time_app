import getData from '../data/dataActivity';

export default function renderActivity() {
  if (Object.keys(window.dataStore.currentActivity).length) {
    return `${window.dataStore.currentActivity.activity}`;
  } else {
    getData();
    return `${window.dataStore.currentActivity.activity}`;
  }
}
