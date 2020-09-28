import cloneDeep from 'lodash/cloneDeep';
import { types } from './actions';

export const initalState = {
  count: 0,
};

const gameReducer = (state = cloneDeep(initalState), action) => {
  const stateClone = cloneDeep(state);
  switch (action.type) {
    case types.INCREMENT:
      console.log('INCREMENT', action);
      return {
        ...stateClone,
        ...action.payload,
      };
    default:
      return stateClone;
  }
};

export default gameReducer;
