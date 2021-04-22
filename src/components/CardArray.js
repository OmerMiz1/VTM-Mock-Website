import React from "react";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";


const CardArray = ((props) => {

  const c = () => {
    if (props.summarys.length > 0) {
      console.log(`props.summarys.length`, props.summarys);
      return cardsArray;
    }
  }


  const cardsArray =
    props.summarys.map(summary => (
      <Card style={{ width: "14rem" }} key={summary.id}>
        <Card.Body>
          <Card.Title>{summary.title}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{summary.tags}</Card.Subtitle>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
        </Card.Text>
          <Card.Link href={summary.url} >Video Link</Card.Link>
          <Card.Link href="#">Another Link</Card.Link>
        </Card.Body>
      </Card>
    ));

  return (
    <CardDeck className="card-deck">
      {c()}
    </CardDeck>
  );
})

export default CardArray;
