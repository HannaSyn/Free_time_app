import types from '../data/types';

export default function setType() {
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
