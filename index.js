const activities = [
  {
    activity: 'Learn a new programming language',
    accessibility: 0.25,
    type: 'education',
    participants: 1,
    price: 0.1,
    key: '5881028',
  },
  {
    activity: "Resolve a problem you've been putting off",
    type: 'busywork',
    participants: 1,
    price: 0,
    link: '',
    key: '9999999',
    accessibility: 0,
  },
  {
    activity: 'Go to a concert with some friends',
    type: 'social',
    participants: 4,
    price: 0.6,
    link: '',
    key: '4558850',
    accessibility: 0.4,
  },
  {
    activity: 'Practice coding in your favorite lanaguage',
    type: 'recreational',
    participants: 1,
    price: 0,
    link: '',
    key: '7096020',
    accessibility: 0.1,
  },
  {
    activity: 'Make a simple musical instrument',
    type: 'music',
    participants: 1,
    price: 0.4,
    link: '',
    key: '7091374',
    accessibility: 0.25,
  },
  {
    activity: 'Write a list of things you are grateful for',
    type: 'relaxation',
    participants: 1,
    price: 0,
    link: '',
    key: '2062010',
    accessibility: 0,
  },
  {
    activity: 'Donate blood at a local blood center',
    type: 'charity',
    participants: 1,
    price: 0,
    link: 'https://www.redcross.org/give-blood',
    key: '6509779',
    accessibility: 0.35,
  },
  {
    activity: 'Learn woodworking',
    type: 'diy',
    participants: 1,
    price: 0.3,
    link: '',
    key: '9216391',
    accessibility: 0.3,
  },
  {
    activity: 'Make bread from scratch',
    type: 'cooking',
    participants: 1,
    price: 0.2,
    link: '',
    key: '4809815',
    accessibility: 0.2,
  },
];

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
  dataStore.currentActivity = activities[getRandomId()];
  dataStore.currentType = dataStore.currentActivity.type;

  return `${dataStore.currentActivity.activity}`;
}

function renderApp() {
  document.querySelector('#app').innerHTML = App();
}

renderApp();
