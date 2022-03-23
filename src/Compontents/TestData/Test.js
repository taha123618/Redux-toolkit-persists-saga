import React from "react";
import { useSelector, useDispatch } from "react-redux";
// import { updateCoder, updateAge, fetchName } from "../../Action/Action";
import { updateAge, updateCoder, updateName } from "../../Reducer/userReducer";

const Test = () => {
  // store se kuche bhe acess kr ne lye
  const { name, age, status } = useSelector((state) => {
    return state;
    // console.log(state);
  });

  const Dispatch = useDispatch();

  const UpdateAge = (age) => {
    //   Action dispatch hogyqa
    Dispatch(updateAge(age));
  };

  const UpdateName = (name) => {
    // const res = await fetch("https://jsonplaceholder.typicode.com/users");
    // const result = await res.json();
    //   Action dispatch hogyqa
    // for api wala action se data aye ga
    // Dispatch(updateName(fetchName()));
    Dispatch(updateName(name));
  };
  const UpdateCoder = (status) => {
    //   Action dispatch hogyqa
    Dispatch(updateCoder(status));
  };
  return (
    <>
      <h1 style={{ color: "red" }}>Taha Ahmed</h1>
      <div className="text-center mt-40 text-white">
        <h1>I am {name}</h1>
        <button
          className="bg-green-400 rounded-full p-4 m-4 hover:bg-green-900 capitalize font-bold"
          onClick={() => UpdateName()}
        >
          update NAME
        </button>
        <h1>My Age is {age}</h1>
        <button
          className="bg-red-400 rounded-full p-4 m-4 hover:bg-red-900 capitalize font-bold"
          onClick={() => UpdateAge(40)}
        >
          update Age
        </button>
        <h1>I am a {status}</h1>
        <button
          className="bg-yellow-400 rounded-full p-4 m-4 hover:bg-yellow-700 capitalize font-bold"
          onClick={() => UpdateCoder("learn")}
        >
          update Coder
        </button>
      </div>
    </>
  );
};

export default Test;
