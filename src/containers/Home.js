// import * as List from "../components/CheckboxListSecondary";
// import { List, ListItem, ListItemText, Link} from "material-ui"
import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function Home() {
    const [email, setEmail] = useState("person@email.com");

    return (
        <div className="Home">
            <Form>
                <Form.Label>Home - VTM</Form.Label>
                <br/>
                <Form.Label>Welcome {email}!</Form.Label>
                <br/>
            </Form>

            <List>
                {/* TODO */}
            </List>
        </div>
    );
}