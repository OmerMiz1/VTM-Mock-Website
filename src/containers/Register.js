import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Register.css";


export default function Register() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmataion, setPasswordConfirmation] = useState("");

    function validateForm() {
        return (email.length > 0
                && password.length > 0 
                && password === passwordConfirmataion);
    }

    function handleSubmit(event) {
        event.preventDefault();
    }

    return (
        <div className="Register">
            <Form onSubmit={handleSubmit}>
                <Form.Group size="lg" controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control
                    autoFocus
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="user@email.com"
                />
                </Form.Group>
                <Form.Group size="lg" controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Ab123456"
                />
                </Form.Group>
                <Form.Group size="lg" controlId="password">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                    type="password"
                    value={passwordConfirmataion}
                    onChange={(e) => setPasswordConfirmation(e.target.value)}
                    placeholder="Ab123456"
                />
                </Form.Group>
                <Button 
                    block size="lg"
                    type="submit" 
                    disabled={!validateForm()} 
                    variant="success"
                >
                    Apply
                </Button>
                <Button
                    block size="lg"
                    variant="secondary"
                >
                    Cancel
                </Button>
            </Form>
        </div>
    );
}

function ValidateEmail(email) {
    return true;
}

function ValidatePassword(password) {
    return true;
}

function ValidatePasswordConfirmation(password, passwordConfirmataion) {
    return password === passwordConfirmataion;
}

document.title = "VTM - New Account";