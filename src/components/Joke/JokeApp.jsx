import Joke from "./Joke";
import jokeData from "./jokeData";

export default function JokeApp() {
  const jokeElement = jokeData.map((joke) => {
    return <Joke key={joke.id} setup={joke.setup} punchline={joke.punchline} />;
  });
  return (
    <div className="flex flex-col gap-6 min-h-screen p-6">{jokeElement}</div>
  );
}
