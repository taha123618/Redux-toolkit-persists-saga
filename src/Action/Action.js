// Action creator is a function that return function

// shorter way
import { createAction } from "@reduxjs/toolkit";

// Action type
const updateCoder = createAction("UPDATE_CODER");
const updateName = createAction("NAME_UPDATE");
const updateAge = createAction("UPDATE_AGE");

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
