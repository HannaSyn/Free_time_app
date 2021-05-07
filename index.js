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

const dataStore = {
  currentActivity: {},
  currentType: '',
};

const url = 'http://www.boredapi.com/api/activity/';
const typeUrl = `http://www.boredapi.com/api/activity?type=${dataStore.currentType.toLowerCase()}`;
let data = {};

async function getData() {
  const response = await fetch(url);
  data = await response.json();
  dataStore.currentType = data.type;
  return `${data.activity}`;
}

async function getDataByType() {
  const response = await fetch(typeUrl);
  data = await response.json();
  return `${data.activity}`;
}

window.renderApp = renderApp;
window.getData = getData;
window.dataStore = dataStore;

async function App() {
  return `
    <h1>Hello my friend!</h1>
    <h2>Are you really bored?</h2>
    <p>Let's see what we can do about it</p>
    ${setType()}
    <p class="activity">${dataStore.currentType ? await getDataByType() : await getData()}</p>
    <p>Are you still bored?</p></p>
    <button onClick="getData(); renderApp()">Find more</button>
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

async function renderApp() {
  document.querySelector('#app').innerHTML = await App();
}

document.addEventListener('DOMContentLoaded', function () {
  renderApp();
});
