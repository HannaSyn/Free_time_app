const url = 'https://www.boredapi.com/api/activity/';

export default function getData(currentType) {
  return fetch(currentType ? `${url}?type=${currentType.toLowerCase()}` : url).then(response => { //TODO do we need lowercase here ?
    return response.json();
  });
}
