const activity = {
  activity: 'Learn a new programming language',
  accessibility: 0.25,
  type: 'education',
  participants: 1,
  price: 0.1,
  key: '5881028',
};

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

window.renderApp = renderApp;

renderApp();

function renderApp() {
  document.querySelector('main').innerHTML = App();
}
window.dataStore = {
  currentType: '',
};

function App() {
  return `
  <h1>Hello my friend!</h1>
        <h2>Are you really bored?</h2>
        <p>Let's see what we can do about it</p>
        ${filterByTypes()}
        <p>${activity.activity}</p>
        <p>Are you still bored?</p></p>
        <button>Find more</button>
  `;
}

function filterByTypes() {
  return `
  <select name="activity-type" onchange="window.dataStore.currentType = this.value;">
        <option selected value="">Choose type</option>
        ${types.map(type => `<option value="${type}">${type}</option>`).join('')}
      </select>
  `;
}
