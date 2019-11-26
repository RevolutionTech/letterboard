import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow
} from "@material-ui/core";

interface Props {
  letters: Record<string, number>;
}

export const LetterCounter: React.FC<Props> = (props: Props) => {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Character</TableCell>
          <TableCell align="right">Count</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {Object.keys(props.letters).map((character, i) => (
          <TableRow key={i}>
            <TableCell>{character}</TableCell>
            <TableCell align="right">{props.letters[character]}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
