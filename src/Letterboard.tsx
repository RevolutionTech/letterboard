import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";

export const Letterboard: React.FC = () => {
  const [inputMessage, setInputMessage] = useState("");
  const letterboardMessage = inputMessage.toUpperCase();

  return (
    <>
      <TextField
        id="standard-basic"
        label="Message"
        placeholder="Enter your message here..."
        multiline
        value={inputMessage}
        onChange={(event): void => {
          setInputMessage(event.target.value);
        }}
        style={{ margin: "1em", width: "80%" }}
      />
      <p>{letterboardMessage}</p>
    </>
  );
};
