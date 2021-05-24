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
  currentType: '',
  currentActivity: {},
};

const url = 'https://www.boredapi.com/api/activity/';

function getData() {
  fetch(dataStore.currentType ? `${url}?type=${dataStore.currentType.toLowerCase()}` : url)
    .then(response => response.json())
    .then(data => {
      dataStore.currentActivity = data;
      dataStore.currentType = data.type;
      window.renderApp();
    });
}

function renderActivity() {
  if (Object.keys(dataStore.currentActivity).length) {
    return `${dataStore.currentActivity.activity}`;
  } else {
    getData();
    return `${dataStore.currentActivity.activity}`;
  }
}

function getNewActivity() {
  dataStore.currentActivity = {};
  renderActivity();
}

window.renderApp = renderApp;
window.getData = getData;
window.dataStore = dataStore;
window.getNewActivity = getNewActivity;

function App() {
  return `
    <h1>Hello my friend!</h1>
    <h2>Are you really bored?</h2>
    <p>Let's see what we can do about it</p>
    <button onClick="window.dataStore.currentType = ''; window.getNewActivity()">Find random</button>
    ${setType()}
    <p class="activity">${renderActivity()}</p>
    <p>Are you still bored?</p></p>
    <button onClick="window.getNewActivity()">Find more</button>
  `;
}

function setType() {
  return `
    <select name="activity-type" onchange="window.dataStore.currentType = this.value; window.getNewActivity()">
      ${types
        .map(
          type => `<option value="${type}"
          ${window.dataStore.currentType === type.toLowerCase() ? 'selected' : ''}
          >${type}</option>`,
        )
        .join('')}
    </select>
  `;
}

function renderApp() {
  document.querySelector('#app').innerHTML = App();
}

renderApp();
