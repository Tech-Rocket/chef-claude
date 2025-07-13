import Main from "./components/Main";
import Header from "./components/Header";
import JokeApp from "./components/Joke/JokeApp";
import CounterApp from "./components/Challenge/Counter/CounterApp";
import C1 from "./components/Challenge/C1";

function App() {
  return (
    <section className="text-slate-800 antialiased min-h-screen bg-[#FAFAF8]">
      {/* <Header />
      <Main />
      <JokeApp />
      <CounterApp /> */}
      <C1 />
    </section>
  );
}

export default App;
