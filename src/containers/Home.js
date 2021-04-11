import React from "react";
import MyHome from "./MyHome"

export default function Home(props) {
    return (
        <div>
            {(props.email === "") ?
            ( <div className="title">
                <h1>This is Global Home Page</h1>
            </div> ) :
            <>
                <MyHome email={props.email}></MyHome>
            </>}
            
        </div>
    );
}