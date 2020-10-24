import React, { useContext } from "react";
import viewUserCards from "../../actions/cards";
import "./ViewCards.scss"
import axios from "axios";

const ViewCards = () => {
  const cards = viewUserCards();
  const listcards = cards.map((d) => <li key={d.nickname}>{d.nickname}</li>);

  return (
    <div>
      <p>test</p>
      {listcards}
    </div>
  );
};

ViewCards.propTypes = {
  setAlert: PropTypes.func.isRequired,
  viewUserCards: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, { setAlert, updatePassword })(
  ViewCards
);
