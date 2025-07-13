import { useState } from "react";
import Count from "./Count";

export default function CounterApp() {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  const decrementCount = () => {
    setCount(count - 1);
  };
  return (
    <div className="bg-gray-700 text-white min-h-screen py-6">
      <h2 className="text-2xl font-semibold text-center ">
        Challenge 4: Counter App
      </h2>
      <div className="flex items-center justify-center mx-auto my-20 w-[300px] ">
        <div className="flex gap-3">
          <button
            onClick={decrementCount}
            className="px-5 py-1.5 bg-white rounded text-black text-sm font-medium"
          >
            decrement
          </button>

          <Count count={count} />

          <button
            onClick={incrementCount}
            className="px-5 py-1.5 bg-white rounded text-black text-sm font-medium"
          >
            increment
          </button>
        </div>
      </div>
    </div>
  );
}
