import React from "react";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import CardSummay from "./CardSummay";

const CardArray = ((props) => {

  
  const cardsArray =
   props.summarys.map(summary => (
    <CardSummay key={summary.id} summary={summary}></CardSummay>
  ));

  return(
    <CardDeck className="card-deck">
        {props.summarys.length > 0 ? cardsArray:
         <h3>You'r library is empty...</h3>}
    </CardDeck>
  );
} )

export default CardArray;
