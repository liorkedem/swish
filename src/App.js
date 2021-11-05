import "./App.css";
import PlayerPageComponent from "./components/player-page/player-page-component";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <PlayerPageComponent playerId="adebaba01" />
      </header>
    </div>
  );
}

export default App;
