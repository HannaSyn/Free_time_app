import dataStore from './data/dataStore';
import getNewActivity from './components/GetNewActivity';
import renderApp from './framework/render';
import App from './components/App';

window.renderApp = renderApp;
window.dataStore = dataStore;
window.getNewActivity = getNewActivity;

renderApp(App, 'app');
