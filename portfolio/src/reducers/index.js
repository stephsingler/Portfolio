import { combineReducers } from 'redux';

const instagram = (state = [], action) => {
  if (action.type === "LOAD_INSTAGRAM") {
    return action.payload
  }
  return state;
}

const projects = (state = [], action) => {
  if (action.type === "LOAD_PROJECTS") {
    return action.payload
  }
  return state;
}

export const allReducers = combineReducers({
  instagram, projects
});
