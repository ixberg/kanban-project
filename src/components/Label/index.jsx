import React, { useState } from "react";

const Label = ({ color, text }) => {
  const [labelText, setLabelText] = useState(text);

  const handleChange = (event) => {
    setLabelText(event.target.value);
  };

  return (
    <div className="flex items-center">
      <span
        className={`inline-block ${color} rounded-full px-3 py-1 font-normal`}
        style={{ flexShrink: 0 }}
      >
        <input
          type="text"
          value={labelText}
          onChange={handleChange}
          className="text-gray-800 border-none focus:outline-none bg-transparent text-center font-normal block min-w-1"
          style={{
            width: `${labelText.length}ch`,
            maxWidth: "100%",
            overflowWrap: "break-word",
          }}
        />
      </span>
    </div>
  );
};

export default Label;
