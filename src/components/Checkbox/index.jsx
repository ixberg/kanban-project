import React, { useState } from "react";
import Unchecked from "../../assets/Checkbox/Unchecked.svg";
import Checked from "../../assets/Checkbox/Checked.svg";

const Checkbox = ({ task, initialState }) => {
  const [done, setDone] = useState(initialState);

  return (
    <div
      onClick={() => setDone(!done)}
      className="flex gap-3 items-center justify-start cursor-pointer"
    >
      <img src={done ? Checked : Unchecked} alt="Checkbox" />
      <span
        className={`${
          done ? "line-through text-gray-400" : ""
        } text-sm text-gray-500`}
      >
        {task}
      </span>
    </div>
  );
};

export default Checkbox;
