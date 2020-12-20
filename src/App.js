import React from "react";
import "./styles.css";
import { useState } from "react";

const footballPlayers = {
  striker: {
    id: 1,
    List: [
      { id: 1, name: "Critiano Ronaldo", rating: "10/10" },
      { id: 2, name: "Neymar JR", rating: "7.5/10" },
      { id: 3, name: "Lionel Messi", rating: "9/10" },
      { id: 4, name: "kylian Mbappe", rating: "8/10" },
      { id: 5, name: "Gerath Bale", rating: "7/10" },
      { id: 6, name: "luis Suarez", rating: "5/10" }
    ]
  },

  midfeilder: {
    id: 2,
    List: [
      { id: 1, name: "Toni Kroos", rating: "8/10" },
      { id: 2, name: "Busquests", rating: "5/10" },
      { id: 3, name: "Luca Modric", rating: "7/10" },
      { id: 4, name: "Thiago Alacantra", rating: "7.5/10" },
      { id: 5, name: "Zinedine Zidane", rating: "10/10" },
      { id: 6, name: "Maradona", rating: "7/10" }
    ]
  },

  defender: {
    id: 3,
    List: [
      { id: 1, name: "Gerad Pique", rating: "6/10" },
      { id: 2, name: "Paulo Maldini", rating: "9/10" },
      { id: 3, name: "Bonuci ", rating: "7.5/10" },
      { id: 4, name: "Mathis Deligt", rating: "8/10" },
      { id: 5, name: "Sergia Ramos", rating: "8.5/10" },
      { id: 6, name: "virgil Van dik", rating: "6/10" }
    ]
  },

  goalkeeper: {
    id: 4,
    List: [
      { id: 1, name: "Iker Cassilas", rating: "9.5/10" },
      { id: 2, name: "keylor Navas", rating: "6.5/10" },
      { id: 3, name: "Manuel Nuere", rating: "10/10" },
      { id: 4, name: "Ter Stegan", rating: "7/10" },
      { id: 5, name: "Allision Beckar", rating: "7/10" },
      { id: 6, name: "kepa Arrizabalaga", rating: "4.5/10" }
    ]
  }
};

export default function App() {
  const [getAnswer, setAnswer] = useState("striker");

  function onClickHandler(item) {
    setAnswer(item);
  }

  return (
    <div className="App">
      <h1> Football Player Recomendation System </h1>
      <p
        style={{
          padding: "1rem 2rem",
          fontSize: "small"
        }}
      >
        {" "}
        CheckOut some Amazing Football player Below. Select the position to get
        started.{" "}
      </p>

      <div>
        {Object.keys(footballPlayers).map((item) => (
          <button
            key={footballPlayers[item].id}
            onClick={() => {
              if (getAnswer !== item) {
                onClickHandler(item);
              }
            }}
            className="button-position"
          >
            {" "}
            {item}
          </button>
        ))}
      </div>
      <hr />
      <div className="container container-center">
        {footballPlayers[getAnswer].List.map((player) => (
          <li className="list">
            <div className="list-playerName">{player.name}</div>
            <small className="list-rating">
              <strong>Rating :</strong> {player.rating}
            </small>
          </li>
        ))}
      </div>
    </div>
  );
}
