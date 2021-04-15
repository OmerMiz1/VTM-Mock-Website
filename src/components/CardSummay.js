import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";

function CardSummay(summary) {
    console.log(`summary`, summary)

    const showTags = () => {
        let tags = "";
        summary.summary.tags.map( tag => (
            tags += tag + " "
        ))
        return tags
    }   
  return (
    <Card>
      <Card.Body>
        <Card.Title>{summary.summary.title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          {showTags()}
          {/* <Button>Delete tag</Button> */}
        </Card.Subtitle>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Card.Link href={summary.summary.url}>Video Link</Card.Link>
      </Card.Body>
      <footer className="footer-card">
        <InputGroup size="sm" className="mb-2">
            <InputGroup.Prepend>
                <Button variant="outline-secondary">Edit title</Button>
            </InputGroup.Prepend>
            <FormControl aria-describedby="basic-addon1" />
        </InputGroup>
        <InputGroup size="sm" className="mb-2">
            <InputGroup.Prepend>
                <Button variant="outline-secondary">Add tags</Button>
            </InputGroup.Prepend>
            <FormControl aria-describedby="basic-addon1" />
        </InputGroup>
        <InputGroup size="sm" className="mb-2">
            <InputGroup.Prepend>
                <Button variant="outline-secondary">Edit time</Button>
            </InputGroup.Prepend>
            <FormControl aria-describedby="basic-addon1" />
        </InputGroup>
            

      </footer>
    </Card>
  );
}

export default CardSummay;
