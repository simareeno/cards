import { TEMP_ACTION } from '../actions/types/app';

export default function appReducer(state = {}, action) {
  switch (action.type) {
    case TEMP_ACTION:
      return handleSample(state, action);
    default:
      return state;
  }
}

function handleSample(state) {
  return state;
}
