import React, { Dispatch, SetStateAction } from "react";

type LabelType = {
  title: string;
  state: string;
  setState: Dispatch<SetStateAction<string>>;
};

const Label = ({ title, state, setState }: LabelType) => {
  function capitalizeFirstLetter(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  const captalizedTitle = capitalizeFirstLetter(title);

  return (
    <div>
      <label htmlFor={title}>
        {captalizedTitle}:{" "}
        <input
          type="text"
          value={state}
          onChange={(e) => {
            setState(e.target.value);
          }}
        />
      </label>
    </div>
  );
};

export default Label;
