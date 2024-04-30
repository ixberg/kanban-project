import React from "react";
import Avatar from "../Avatar";
import avatarData from "../Contributor";
import Tag from "../Tag";
import Checkbox from "../Checkbox";

const Card = ({ title, desc, avatarIds = [], tags = [], tasks = [] }) => {
  return (
    <div className="flex flex-col items-start gap-2 p-4 w-72 border border-gray-300 rounded-lg bg-white shadow-md">
      {avatarIds.length > 0 && (
        <div className="flex gap-2">
          {avatarIds.map((id, index) => {
            const avatar = avatarData.find((avatar) => avatar.id === id);
            return <Avatar key={index} image={avatar.image} />;
          })}
        </div>
      )}
      <h5 className="self-stretch text-gray-900 font-semibold text-base">
        {title}
      </h5>
      {desc && <p className="self-strerch text-gray-500 text-sm">{desc}</p>}
      {tasks.length > 0 && (
        <div className="">
          {tasks.map((task, index) => (
            <Checkbox
              key={index}
              task={task.task}
              initialState={task.initialState}
            />
          ))}
        </div>
      )}
      {tags.length > 0 && (
        <div className="flex gap-2 content-start flex-wrap	">
          {tags.map((tag, index) => (
            <Tag key={index} color={tag.color} text={tag.text} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Card;
