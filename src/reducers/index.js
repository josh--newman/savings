import { combineReducers } from 'redux';

function reducerSample(state = {}) {
  return 'example';
}

const rootReducer = combineReducers({
  state: reducerSample
});

export default rootReducer;
