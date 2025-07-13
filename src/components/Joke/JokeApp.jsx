import Joke from "./Joke";
// import jokesData from "./jokeData";

export default function JokeApp() {
  return (
    <>
      <div className="p-4 space-y-6">
        <Joke punchline="Can't explain puns to keptomanics, they're always taking things literally." />
        <Joke
          setup="I got my daughter a fridge for her birthday."
          punchline="I can't wait to see her face light up when she opens it."
        />
        <Joke
          setup="How did the hacker escape the police?"
          punchline="He just ransomware!"
        />
        <Joke
          setup="Why do bees stay in the hive in the winter?"
          punchline="Swarm."
        />
        <Joke
          setup="What's the best thing about Switzerland?"
          punchline="I don't know, but the flag is a big plus!"
        />
      </div>
    </>
  );
}
