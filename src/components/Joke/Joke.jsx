import React, { useState } from "react";

export default function (props) {
  const [displayPunchline, setDisplayPunchline] = useState(false);

  const handleDisplayPunchline = (prevState) => {
    setDisplayPunchline((prevState = !prevState));
  };
  return (
    <div className="text-slate-800 font-medium  flex flex-col gap-4">
      <h1 className="text-3xl">
        <span className="text-green-600">Setup: </span>
        {props.setup}
      </h1>
      {displayPunchline === true && (
        <p className="text-xl">
          <span className="text-red-600">Punchline: </span>
          {props.punchline}
        </p>
      )}
      <button
        onClick={handleDisplayPunchline}
        className="w-[200px] py-3 rounded-md bg-slate-800 text-white text-sm cursor-pointer uppercase tracking-wide"
      >
        display punchline
      </button>
      <hr className="border border-gray-700" />
    </div>
  );
}
