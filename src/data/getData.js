const url = 'https://www.boredapi.com/api/activity/';

export default function getData(currentType) {
  return fetch(currentType ? `${url}?type=${currentType}` : url).then(response => {
    return response.json();
  });
}
