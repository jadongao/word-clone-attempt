import React from "react";

function Win({ win, count, answer }) {
  if (win) {
    return (
      <div class="happy banner">
        <p>
          <strong>Congratulations!</strong> Got it in
          <strong>{count} guesses</strong>.
        </p>
      </div>
    );
  } else {
    return (
      <div class="sad banner">
        <p>
          Sorry, the correct answer is <strong>{answer}</strong>.
        </p>
      </div>
    );
  }
}

export default Win;
