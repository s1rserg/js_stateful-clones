'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 *
 * @return {Object[]}
 */
function transformStateWithClones(state, actions) {
  const result = [];

  for (const action of actions) {
    const newState = result[result.length - 1]
      ? { ...result[result.length - 1] }
      : { ...state };

    if (action.type === 'addProperties') {
      Object.assign(newState, action.extraData);
    } else if (action.type === 'removeProperties') {
      for (const key of action.keysToRemove) {
        delete newState[key];
      }
    } else {
      for (const key in newState) {
        delete newState[key];
      }
    }

    result.push(newState);
  }

  return result;
}

module.exports = transformStateWithClones;
