if (module.hot) {
  module.hot.accept();
}

const activity = {
  activity: 'Learn a new programming language',
  accessibility: 0.25,
  type: 'education',
  participants: 1,
  price: 0.1,
  key: '5881028',
};

const template = `
<h1>Hello my friend!</h1>
      <h2>Are you really bored?</h2>
      <p>Let's see what we can do about it</p>
      <select name="activity-type">
        <option selected value="">Choose type</option>
        <option value="education">Education</option>
        <option value="recreational">Recreational</option>
        <option value="social">Social</option>
        <option value="diy">Do it youself</option>
        <option value="charity">Charity</option>
        <option value="cooking">Cooking</option>
        <option value="relaxation">Relaxation</option>
        <option value="music">Music</option>
        <option value="busywork">Busywork</option>
      </select>
      <p>${activitiy.activity}</p>
      <p>Are you still bored?</p></p>
      <button>Find more</button>
`;

const mainHtml = document.querySelector('main');
mainHtml.innerHTML = template;
