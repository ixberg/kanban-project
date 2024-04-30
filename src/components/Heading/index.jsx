import React from "react";

const Heading = ({ title, caption }) => {
  return (
    <div className="flex flex-col justify-between gap-2">
      <h1 className="w-214 h-38 font-sf-compact-display font-bold text-4xl leading-38 flex items-center text-gray-900">
        {title}
      </h1>
      <p className="text-gray-500 text-base">{caption}</p>
    </div>
  );
};

export default Heading;
