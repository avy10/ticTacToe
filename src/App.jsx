import { useEffect, useState } from "react";
import { TbTicTac } from "react-icons/tb";
import { GiPodiumWinner } from "react-icons/gi";

export default function App() {
  const [choice, setChoice] = useState("");
  const [winner, setWinner] = useState("");
  function onSelection(val) {
    setChoice(val);
  }
  return (
    <>
      <Modal winner={winner} choice={choice} onSelection={onSelection} />
      <div className="app">
        <div className="gameBoard">
          <Dabbas
            winner={winner}
            setWinner={setWinner}
            choice={choice}
            setChoice={setChoice}
          />
        </div>
      </div>
    </>
  );
}

function Dabbas({ winner, choice, setChoice, setWinner }) {
  const [arr, setArr] = useState([" ", " ", " ", " ", " ", " ", " ", " ", " "]);

  function changePick(pos) {
    // console.log("currentState", choice);
    if (winner) {
      return;
    }
    if (arr[pos] == "X" || arr[pos] == "O") {
      return;
    } else {
      setArr((prev) => prev.map((e, ind) => (ind === pos ? choice : e)));
      setChoice((prev) => (prev == "X" ? "O" : "X"));
    }
  }

  useEffect(() => {
    if (arr[0] === arr[1] && arr[1] === arr[2] && arr[0] != " ") {
      setWinner(arr[0]);

      return;
    }
    if (arr[0] === arr[3] && arr[3] === arr[6] && arr[0] != " ") {
      setWinner(arr[0]);

      return;
    }
    if (arr[0] === arr[4] && arr[4] === arr[8] && arr[0] != " ") {
      setWinner(arr[0]);

      return;
    }
    if (arr[1] === arr[4] && arr[4] === arr[7] && arr[1] != " ") {
      setWinner(arr[1]);

      return;
    }
    if (arr[3] === arr[4] && arr[4] === arr[5] && arr[3] != " ") {
      setWinner(arr[3]);

      return;
    }
    if (arr[2] === arr[5] && arr[5] === arr[8] && arr[2] != " ") {
      setWinner(arr[2]);

      return;
    }
    if (arr[2] === arr[4] && arr[4] === arr[6] && arr[2] != " ") {
      setWinner(arr[2]);

      return;
    }
    if (arr[6] === arr[7] && arr[7] === arr[8] && arr[6] != " ") {
      setWinner(arr[6]);

      return;
    }
  }, [arr]);
  return arr.map((e, ind) => (
    <div className="dabba" key={ind} onClick={() => changePick(ind)}>
      {e}
    </div>
  ));
}

function Modal({ choice, onSelection, winner }) {
  return (
    <div className="modal">
      <TbTicTac style={{ height: "75px", width: "75px" }} />
      {!choice && (
        <h2>
          Pick{" "}
          <span>
            <button onClick={() => onSelection("X")}>X</button>{" "}
          </span>{" "}
          or{" "}
          <span>
            <button onClick={() => onSelection("O")}>O</button>{" "}
          </span>
        </h2>
      )}
      {choice && !winner && (
        <h3>
          <em>{choice}'s Turn</em>
        </h3>
      )}
      {winner && (
        <h2>
          <GiPodiumWinner />
          <em>{winner} Wins!</em>
        </h2>
      )}
    </div>
  );
}
