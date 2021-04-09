// import * as List from "../components/CheckboxListSecondary";
// import { List, ListItem, ListItemText, Link} from "material-ui"
import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Home.css"

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
            
            <ul className="list">
                <li>
                    <tag>Url 1</tag>
                    <button className="btn-red">url1-link</button>
                </li>
                <li>
                    <tag>Url 2</tag>
                    <button>url2-link</button>
                </li>
                <li>
                    <tag>Url 3</tag>
                    <button>url3-link</button>
                </li>
            </ul>
        </div>
    );
}