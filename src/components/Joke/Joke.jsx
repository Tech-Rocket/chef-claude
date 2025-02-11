import { useState } from "react";

export default function Joke(props) {
  const [isShown, setIsShown] = useState(false);

  const toggleShown = () => {
    setIsShown((prevShown) => !prevShown);
  };
  return (
    <div className="font-medium uppercase tracking-wide">
      <div className="flex flex-col gap-5 mb-3">
        {props.setup ? (
          <h2 className="text-2xl font-semibold">
            <span className="text-blue-600">Joke:</span> {props.setup}
          </h2>
        ) : null}
        {isShown ? (
          <p className="text-lg font-medium">
            <span className="text-red-600">Punchline:</span> {props.punchline}
          </p>
        ) : null}
      </div>
      <button
        onClick={toggleShown}
        className="py-2 px-4 bg-slate-600 rounded-md cursor-pointer text-white uppercase"
      >
        {isShown ? "hide" : "display"} punchline
      </button>
      <hr className="border border-black mt-3" />
    </div>
  );
}
