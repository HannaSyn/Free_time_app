import setType from './SetType';
import renderActivity from './RenderActivity';

export default function App() {
  return `
    <h1>Hello my friend!</h1>
    <h2>Are you really bored?</h2>
    <p>Let's see what we can do about it</p>
    <button onClick="window.dataStore.currentType = ''; window.getNewActivity()">Find random activity</button>
    ${setType()}
    <p class="activity">${renderActivity()}</p>
    <p>Are you still bored?</p></p>
    <button onClick="window.getNewActivity()">Find more ${window.dataStore.currentType}</button>
  `;
}
