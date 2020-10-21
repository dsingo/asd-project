import React, { useContext } from "react";


const ViewCard = () => {
  const cards = [];
  const listcards = cards.map((d) => <li key={d.nickname}>{d.nickname}</li>);

  return <div>{listcards}</div>;
};

export default ViewCard;
