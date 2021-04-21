
import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import zoomImg from "../img/zoom-345x160.jpg"

import CardArray from "../components/CardArray"


import "bootstrap/dist/css/bootstrap.min.css";

export default function MyHome(props) {
    
    const [summaryIds, setSummaryIds] = useState([])
    const [summarys, setSummarys] = useState([])


    useEffect(() => {
        const getSummarysId = async () => {
            const summaryIdFromServer = await fetchSummaryId();
            console.log("summaryIdFromServer->", summaryIdFromServer, summaryIdFromServer.summaysId);
            if (summaryIdFromServer.summaysId == null) {
                return
            }
            summaryIdFromServer.summaysId.length > 0 ? setSummaryIds(summaryIdFromServer.summaysId) : console.log("getSummarysId -> summaryIdFromServer is 0..") 

           }
           console.log("pros->", props, props.user);
           props.user == null ? setSummarys([]) : getSummarysId();
           
    },[])


    useEffect(() => {
        const getSummarys = async () => {
          const summaryFromServer = await fetchSummarys();
          console.log(`11111111111111111summaryFromServer`, typeof summaryFromServer[0])
          Object.keys(summaryFromServer[0]).length === 0 ? setSummarys([]) : setSummarys(summaryFromServer)

        }
        summaryIds.length > 0 ? getSummarys() : setSummarys(summarys) 
      
      },[summaryIds])
      


    const fetchSummaryId = async () => {
        const response = await fetch("http://localhost:8000/library/"+ `${props.user.libraryId}`)
        
        const data = await response.json();
        return data;
      }



    async function asyncForEach(array, callback) {
        for (let index = 0; index < array.length; index++) {
          await callback(array[index], index, array);
        }
      }

    const fetchSummarys = async () => {
        var summaryArray = []
        await asyncForEach(summaryIds, async (id) => {
            const response = await fetch("http://localhost:8000/summarys/"+ `${id}`);
            const data = await response.json();
            summaryArray.push(data);
        });
        return summaryArray;
    }


  return (
    <div className="title">
      <div>
        <h1>Home - VTM</h1>
        <br />
        <h2>Welcome {props.user.firstName} {props.user.lastName}!</h2>
      </div>

      <div className="secsion">
        <Button className="d-flex" >Add Summary</Button>
      </div>

      <CardArray summarys={summarys}/>
      
    </div>
  );
}
