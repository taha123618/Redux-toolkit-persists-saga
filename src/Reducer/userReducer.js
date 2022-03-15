// reducer check kre ga action kia ha
// Reducers can only make copies of the original values, and then they can mutate the copies.
// kia krna ha

import { createReducer } from "@reduxjs/toolkit";
// now you can import that not write the hardcoded
import { updateAge, updateCoder, updateName } from "../Action/Action";

const initialStore = {
  name: "taha",
  age: 22,
  status: "coder",
};

// export default (state = initialStore, action) => {
//   if (action.type == "UPDATE_Age") {
//     return {
//       ...state,
//       age: action.payload,
//     };
//   }
//   return state;
// };

// REDUX Toolkit ka dareka

export default createReducer(initialStore, (builder) => {
  builder.addCase(updateAge, (state, action) => {
    state.age = action.payload;
  });
  builder.addCase(updateName, (state, action) => {
    state.name = action.payload;
  });
  builder.addCase(updateCoder, (state, action) => {
    state.status = action.payload;
  });
});
