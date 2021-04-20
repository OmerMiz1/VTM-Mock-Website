import React, { useState} from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import { useHistory } from 'react-router-dom';
import { Auth } from "aws-amplify";

export default function Login(props) {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  function validateForm() {
    return userName.length > 0 && password.length > 0;
  }

  async function handleSubmit(event) {
    event.preventDefault();
  
    try {
      await Auth.signIn(userName, password);
      alert("Logged in");
    } catch (e) {
      alert(e.message);
    }
  }

 
  return (
    <div className="d-flex justify-content-center" >
      <Form className='form ' onSubmit={handleSubmit}>
        <Form.Group size="lg" controlId="userName">
          <Form.Label>User Name</Form.Label>
          <Form.Control
            autoFocus
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
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






 // let data= {
    //   "user": user,
    //   "password": password
    // }

    // fetch("http://localhost:8000/users/", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(data),
    //   })
    //   .then(response => response.json())
    //   .catch(error => console.error("Error:", error))
    //   .then(response => console.log("Success:", JSON.stringify(response)))