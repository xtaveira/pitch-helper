// arquivo: Label.tsx
import React, { Dispatch, SetStateAction } from "react";

type LabelType = {
  title: string;
  state: number;
  setState: Dispatch<SetStateAction<number>>;
};

const Label = ({ title, state, setState }: LabelType) => {
  function capitalizeFirstLetter(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  const captalizedTitle = capitalizeFirstLetter(title);

  return (
    <div className="text-2xl font-bold">
      <label htmlFor={title}>
        {captalizedTitle}:{" "}
        <input
          className="text-black w-10 text-center px-1"
          type="number"
          value={state}
          onChange={(e) => {
            setState(Number(e.target.value));
          }}
        />
      </label>
    </div>
  );
};

export default Label;
