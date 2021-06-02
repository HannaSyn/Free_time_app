const url = 'https://www.boredapi.com/api/activity/';

export default function getData() {
  fetch(
    window.dataStore.currentType
      ? `${url}?type=${window.dataStore.currentType.toLowerCase()}`
      : url,
  )
    .then(response => response.json())
    .then(data => {
      window.dataStore.currentActivity = data;
      window.dataStore.currentType = data.type;
      window.renderApp();
    });
}
