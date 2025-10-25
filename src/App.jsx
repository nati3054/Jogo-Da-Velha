import Game from "./game/Game";

export default function App() {
  return (
    <div className="app">
      <h1>Jogo da Velha</h1>
      <div className="game-container">
        <Game />
      </div>
    </div>
  );
}
