import React, { useContext } from "react";
import CardsContext from "../contexts/CardsContext";

const ViewCard = ({ id }) => {
  const { state: cards } = useContext(CardsContext);
  const listcards = data.map((d) => <li key={d.nickname}>{d.nickname}</li>);

  return <div>{listcards}</div>;
};

export default ViewCard;
