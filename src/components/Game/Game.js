import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessResults from "./GuessResults";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import Win from "./Win";
// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  function addItem() {
    const nextList = [...list, guess];
    setList(nextList);
  }
  const [list, setList] = React.useState([]);
  const [guess, setGuess] = React.useState("");
  const [count, setCount] = React.useState(0);
  let state = true;

  return (
    <>
      <div className="guess-results-wrapper">
        <GuessResults list={list} answer={answer} />
      </div>
      <form
        className="guess-input-wrapper"
        onSubmit={(event) => {
          event.preventDefault();
          console.log(guess);
          setGuess("");
          addItem();
          setCount(count + 1);
        }}
      >
        <label htmlFor="guess-input">Enter guess:</label>
        {count === NUM_OF_GUESSES_ALLOWED &&
          (() => {
            state = false;
            <Win win={true} count={count} />;
          })}
        {guess === answer &&
          (() => {
            state = false;
            <Win win={false} answer={answer} />;
          })}
        {state && (
          <input
            id="guess-input"
            type="text"
            pattern="[a-zA-Z]{5}"
            title="5 letter word"
            maxLength={5}
            value={guess}
            onChange={(event) => {
              setGuess(event.target.value.toUpperCase());
            }}
          />
        )}
      </form>
    </>
  );
}

export default Game;
