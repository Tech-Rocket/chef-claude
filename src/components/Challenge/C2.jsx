import { useState } from "react";

const ChallengeTwo = () => {
  const [myFavoriteThings, setMyFavoriteThings] = useState([]);

  const [allMyThings, setAllMyThings] = useState([
    "Thing 1",
    "Thing 2",
    "Thing 3",
  ]);

  const thingsElement = myFavoriteThings.map((data, index) => {
    return <p key={index}>{data}</p>;
  });

  const addFavoriteThings = () => {
    setMyFavoriteThings((prevState) => [
      ...prevState,
      allMyThings[prevState.length],
    ]);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-800 text-white font-medium">
      <button
        onClick={addFavoriteThings}
        className="border border-white rounded-full py-2 px-6 cursor-pointer"
      >
        Add Item
      </button>

      <div className="mt-3">{thingsElement}</div>
    </div>
  );
};

export default ChallengeTwo;
