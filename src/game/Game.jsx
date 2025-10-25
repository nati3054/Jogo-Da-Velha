import { useState } from "react";
import Board from "./Board";

export default function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(move) {
    setCurrentMove(move);
  }

function resetGame() {
    setHistory([Array(9).fill(null)]);
    setCurrentMove(0);
}

  const moves = history.map((squares, move) => {
    let description;
    if (move === 0) {
      description = 'Ir para o início do jogo';
    } else {
      description = 'Ir para jogada #' + move;
    }
    return (
      <li key={move}>
        <button onClick={() => move === 0 ? resetGame() : jumpTo(move)}>
          {description}
        </button>
      </li>
    );
  });

  return (
    <div className="game">
        <div className="game-board">
            <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
            </div>
            <div className="game-info">
            <h2>Histórico de Jogadas</h2>
            <ol>{moves}</ol>
        </div>
    </div>
  );
}
