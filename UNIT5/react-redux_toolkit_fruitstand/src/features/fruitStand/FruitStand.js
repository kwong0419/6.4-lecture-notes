import React, { useState } from "react";

import { useDispatch } from "react-redux";
import { addFruit, clearFruits } from "./fruitStandSlice";

const FruitStand = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addFruit(input));
    setInput("");
  };
  return (
    <>
      <div>
        Lots and lots of fruits!
        <form onSubmit={handleSubmit}>
          <input
            placeholder="fruit"
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </form>
        <button onClick={() => dispatch(addFruit("Apple"))}>Add Apple</button>
        <button onClick={() => dispatch(addFruit("Banana"))}>Add Banana</button>
        <button onClick={() => dispatch(clearFruits())}>Clear Cart</button>
      </div>
      {/* <ul>
            {fruits.map((fruit, idx) => {
                return <li key={idx}>{fruit}</li>
            })}
        </ul> */}
      {/* <DisplayFruits fruits={fruits} /> */}
    </>
    // add a input field that will dispatch a users fruit of choice
    //add a view for our fruits (doesnt have to be in this component)
  );
};

export default FruitStand;
