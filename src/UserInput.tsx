import React from "react";
import { TextField } from "@material-ui/core";

interface Props {
  message: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const UserInput: React.FC<Props> = (props: Props) => {
  return (
    <>
      <TextField
        id="standard-basic"
        label="Message"
        placeholder="Enter your message here..."
        multiline
        value={props.message}
        onChange={props.onChange}
        style={{ margin: "1em", width: "80%" }}
      />
    </>
  );
};
