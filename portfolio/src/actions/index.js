export const loadInsta = (instagram) => {
  return {
    type: "LOAD_INSTAGRAM",
    payload: instagram
  }
};

export const loadProject = (projects) => {
  return {
    type: "LOAD_PROJECTS",
    payload: projects
  }
};
