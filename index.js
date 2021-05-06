/* eslint-disable prettier/prettier */
/* eslint-disable no-console */
const types = [
  'Education',
  'Recreational',
  'Social',
  'DIY',
  'Charity',
  'Cooking',
  'Relaxation',
  'Music',
  'Busywork',
];

const url = 'http://www.boredapi.com/api/activity/';
let data = {};

function getData() {
  return fetch(url)
    .then(response => response.json())
    .then(data => ({ data }))
    .finally(renderApp());
}

const dataStore = {
  currentActivity: {},
  currentType: '',
};

window.renderApp = renderApp;
window.getRandomActivity = getRandomActivity;
window.dataStore = dataStore;

function App() {
  return `
    <h1>Hello my friend!</h1>
    <h2>Are you really bored?</h2>
    <p>Let's see what we can do about it</p>
    ${setType()}
    <p class="activity">${dataStore.currentType ? getActivityByType() : getRandomActivity()}</p>
    <p>Are you still bored?</p></p>
    <button onClick="getRandomActivity(); renderApp()">Find more</button>
  `;
}

function setType() {
  return `
    <select name="activity-type" onchange="window.dataStore.currentType = this.value; renderApp()">
      <option value="">Choose type</option>
      ${types
        .map(
          type => `<option value="${type}"
          ${window.dataStore.currentType === type ? 'selected' : ''}
          >${type}</option>`,
        )
        .join('')}
    </select>
  `;
}

function getActivityByType() {
  dataStore.currentActivity = activities.filter(
    item => item.type === dataStore.currentType.toLowerCase(),
  )[0];
  dataStore.currentType = dataStore.currentActivity.type;

  return `${dataStore.currentActivity.activity}`;
}

function getRandomId(min = 0, max = 8) {
  return Math.ceil(Math.random() * (max - min) + min);
}

function getRandomActivity() {
  dataStore.currentActivity = data;
  dataStore.currentType = dataStore.currentActivity.type;

  return `${dataStore.currentActivity.activity}`;
}

function renderApp() {
  document.querySelector('#app').innerHTML = App();
}

document.addEventListener('DOMContentLoaded', function () {
  getData();
  // renderApp();
});
