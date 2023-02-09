import React from "react";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";
function GuessResults({ list, answer }) {
  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((num, i) => {
        const statusList = checkGuess(list[i], answer);
        return (
          <p key={Math.random()} className="guess">
            {range(5).map((e, j) => {
              if (!statusList) {
                return <span key={i + j} className="cell"></span>;
              } else {
                let name = `cell ${statusList[j].status}`;
                //                console.log(name);
                return (
                  <span key={i + j} className={name}>
                    {statusList[j].letter}
                  </span>
                );
              }
            })}
          </p>
        );
      })}
    </div>
  );
}

export default GuessResults;
