import renderActivity from './RenderActivity';

export default function getNewActivity() {
  window.dataStore.currentActivity = {};
  renderActivity();
}
