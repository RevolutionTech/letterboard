import React, { useState } from "react";
import { UserInput } from "./UserInput";
import { Letterboard } from "./Letterboard";
import { LetterCounter } from "./LetterCounter";
import "./App.css";

const countCharacters = (str: string): Record<string, number> => {
  return str
    .replace(/\s/g, "")
    .split("")
    .reduce((counter: Record<string, number>, s: string) => {
      counter[s] = (counter[s] || 0) + 1;
      return counter;
    }, {});
};

const App: React.FC = () => {
  const [inputMessage, setInputMessage] = useState("");
  const letterboardMessage = inputMessage.toUpperCase();

  return (
    <div className="App">
      <UserInput
        message={inputMessage}
        onChange={(event): void => {
          setInputMessage(event.target.value);
        }}
      />
      <Letterboard message={letterboardMessage} />
      <LetterCounter letters={countCharacters(letterboardMessage)} />
    </div>
  );
};

export default App;
