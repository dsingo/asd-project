import React, { useContext } from "react";
import CardsContext from "../contexts/CardsContext";

const ViewCard = ({ id }) => {
  const { state: cards } = useContext(CardsContext);
  const card = cards[id];

  return <>{card.nickname}</>;
};

export default ViewCard;
