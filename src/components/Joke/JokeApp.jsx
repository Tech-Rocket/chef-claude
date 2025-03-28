import React from "react";
import Joke from "./Joke";
import jokesData from "./jokeData";

export default function JokeApp() {
  const jokeElement = jokesData.map((joke) => {
    return <Joke key={joke.id} setup={joke.setup} punchline={joke.punchline} />;
  });
  return (
    <>
      <div className="p-6">{jokeElement}</div>
    </>
  );
}
