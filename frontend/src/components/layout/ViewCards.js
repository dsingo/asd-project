import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { viewUserCards } from "../../actions/cards";
import "./ViewCards.scss";
import { connect } from "react-redux";

const ViewCards = ({ cards, loadedCards, getCards, loading }) => {

  useEffect(() => {
    if (!loadedCards) {
      getCards();
    };
  },[])

  return (
    <div className="main">
      <div className="base-rect">
        <h2 className="heading">Your Opal Cards</h2>
        { loading && <p>Loading Cards...</p> }
        {cards.map(
          (card, i) => <li key={i}>{card.name} - {card.type} - {card.balance}</li>
        )}
      </div>
    </div>
  );
}; 

ViewCards.propTypes = {
  cards: PropTypes.array,
  getCards: PropTypes.func.isRequired,
  loading: PropTypes.bool,
  loadedCards: true
};

const mapStateToProps = ({ cards: state }) =>  ({
  loading: state.loading,
  cards: state.cards,
  loadedCards: state.loadedCards
});

export default connect(mapStateToProps, { getCards: viewUserCards })(
  ViewCards
);
