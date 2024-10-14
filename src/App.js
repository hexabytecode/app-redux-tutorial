import "./App.css";
import Count from "./components/Count";
import Counter from "./components/Counter";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Redux Tutorial</h2>
        <Counter />
        <Count />
      </header>
    </div>
  );
}

export default App;
