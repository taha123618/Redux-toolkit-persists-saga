// Action creator is a function that return function

const updateCoder = (status) => {
  return {
    type: "UPDATE_CODER",
    payload: status,
  };
};
const updateAge = (age) => {
  return {
    type: "UPDATE_AGE",
    payload: age,
  };
};
const updateName = (name) => {
  return {
    type: "NAME_UPDATE",
    payload: name,
  };
};

export { updateCoder, updateAge, updateName };
