import React, { useState} from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import { useHistory } from 'react-router-dom';


export default function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();

    props.login(email);
    // add tset password (back)
    if (password==='123') {
      console.log("login succses name is: ", email);
      history.push("home")
    } else {
      console.log("Try Again");
    }
  }

 


  return (
    <div className="d-flex justify-content-center" >
      <Form className='form ' onSubmit={handleSubmit}>
        <Form.Group size="lg" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            autoFocus
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button 
          block size="lg"
          type="submit" 
          disabled={!validateForm()} 
          variant="success"
          onClick={handleSubmit}
        >
          Login
        </Button>        
        <Button 
          block size="lg"
          variant="primary"
        >
          Register
        </Button>{''}
      </Form>
    </div>
  );
}

document.title = "VTM - Login";