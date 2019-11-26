import React from "react";
import MaterialTable from "material-table";

interface Props {
  letters: Record<string, number>;
}

export const LetterCounter: React.FC<Props> = (props: Props) => {
  return (
    <>
      <MaterialTable
        columns={[
          { title: "Character", field: "character" },
          { title: "Count", field: "count" }
        ]}
        data={Object.keys(props.letters).map(character => {
          return { character, count: props.letters[character] };
        })}
        options={{ paging: false, sorting: true, toolbar: false }}
      />
    </>
  );
};
