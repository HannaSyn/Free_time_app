import renderActivity from './RenderActivity';

export default function GetNewActivity() {
  window.dataStore.currentActivity = {};
  renderActivity();
}
