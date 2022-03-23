// reducer check kre ga action kia ha
// Reducers can only make copies of the original values, and then they can mutate the copies.
// kia krna ha

import { createReducer, createSlice, createAsyncThunk } from "@reduxjs/toolkit";
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

// export default createReducer(initialStore, (builder) => {
//   builder.addCase(updateAge, (state, action) => {
//     state.age = action.payload;
//   });
//   builder.addCase(updateName, (state, action) => {
//     state.name = action.payload;
//   });
//   builder.addCase(updateCoder, (state, action) => {
//     state.status = action.payload;
//   });
// });

// create slice way Part

// AsynThunk (Action Creator) for the Api Access
export const fetchUserName = createAsyncThunk("fetchuser", async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const result = await res.json();
  // payload
  return result[Math.floor(Math.random() * 10)].name;
});

const userReducer = createSlice({
  name: "person",
  initialState: initialStore,
  reducers: {
    updateName(state, action) {
      state.name = action.payload;
    },
    updateAge(state, action) {
      state.age = action.payload;
    },
    updateCoder(state, action) {
      state.status = action.payload;
    },
  },
  // for AsynThunk ke lye Reducer byna pare ga
  // 3 state hote h (fullfield , pending , rejected)
  extraReducers: {
    [fetchUserName.fulfilled]: (state, action) => {
      // Add user to the state array
      state.name = action.payload;
    },
    [fetchUserName.pending]: (state, action) => {
      // Add user to the state array
      state.name = "Loading!!";
    },
    [fetchUserName.rejected]: (state, action) => {
      // Add user to the state array
      state.name = "tryAgain!!";
    },
  },
});

export const { updatedName, updatedAge, updatedCoder } = userReducer.actions;

export default userReducer.reducer;
