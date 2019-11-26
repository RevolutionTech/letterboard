import React from "react";

interface Props {
  message: string;
}

export const Letterboard: React.FC<Props> = (props: Props) => (
  <p>{props.message}</p>
);
