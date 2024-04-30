import React from "react";
import Label from "../Label";
import Card from "../Card";

const Lane = ({ nama, warna, cards }) => {
  return (
    <div className="flex gap-2 flex-col p-3 h-full">
      <Label text={nama} color={warna} />
      {cards.map((card, index) => (
        <Card
          key={index}
          title={card.title}
          desc={card.desc}
          avatarIds={card.avatarIds}
          tags={card.tags}
          tasks={card.tasks}
        />
      ))}
    </div>
  );
};

export default Lane;
