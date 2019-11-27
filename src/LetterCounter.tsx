import React from "react";
import MaterialTable from "material-table";
import { LETTER_TOTALS } from "./LetterTotals";

interface Props {
  letters: Record<string, number>;
}

export const LetterCounter: React.FC<Props> = (props: Props) => {
  return (
    <>
      <MaterialTable
        columns={[
          { title: "Character", field: "character" },
          { title: "Count", field: "count" },
          { title: "Total", field: "total" },
          {
            title: "Remaining",
            field: "remaining",
            defaultSort: "asc",
            customSort: (a, b): number => a.remaining - b.remaining
          }
        ]}
        data={Object.keys(props.letters).map(character => {
          const count = props.letters[character];
          const total = LETTER_TOTALS[character] || 0;

          return {
            character,
            count,
            total,
            remaining: total - count
          };
        })}
        options={{
          paging: false,
          rowStyle: (rowData): React.CSSProperties => ({
            backgroundColor: rowData.remaining < 0 ? "red" : "white"
          }),
          sorting: true,
          toolbar: false
        }}
      />
    </>
  );
};
