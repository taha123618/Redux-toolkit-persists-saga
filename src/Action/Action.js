// Action creator is a function that return function

// shorter way
import { createAction } from "@reduxjs/toolkit";

// Action type
const updateCoder = createAction("UPDATE_CODER");
// const updateName = createAction("NAME_UPDATE");
const updateAge = createAction("UPDATE_AGE");

// for Network request with the help of redux think

export const fetchName = () => {
  return async (dispatch) => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const result = await res.json();
    dispatch({ type: "NAME_UPDATE", payload: result[0].name });
  };
};

// old Way

// const updateAge = (age) => {
//   return {
//     type: "UPDATE_AGE",
//     payload: age,
//   };
// };
// const updateName = (name) => {
//   return {
//     type: "NAME_UPDATE",
//     payload: name,
//   };
// };
// const updateCoder = (status) => {
//   return {
//     type: "UPDATE_CODER",
//     payload: status,
//   };
// };

export { updateCoder, updateAge, updateName };
