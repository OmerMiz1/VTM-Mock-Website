
import React, { useState, useEffect, Component } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import zoomImg from "../img/zoom-345x160.jpg"

import CardArray from "../components/CardArray"


import "bootstrap/dist/css/bootstrap.min.css";

export default function MyHome(props) {
    const [summarys, setSummarys] = useState(props.email ==="shon"?
    [
        {
            url: "https://us02web.zoom.us/rec/play/E38eBi_rfsgGCYhh6YiiutEw4pcsdCsHF2jy0sOMCfEAEzoFrb4z0IBnQLf5jgsMRxqULz7h-5fpc5S3.tLHdrPTcTXQ2n0Tz?continueMode=true&_x_zm_rtaid=8E8g3kSeQMGVoTvDaygrrQ.1603012922993.2fcaba7a7c5cc81110b378f2474fb863&_x_zm_rhtaid=614",
            hashUrl: -1187954098,
            title: "Zoom1",
            autorName: "Shon4me",
            createdTime: "2021-04-08T16:07:06.502Z",
            editTime: "Fri Apr 09 2021 13:02:08 GMT+0300 (שעון ישראל (קיץ))",
            tags: [
                "zoom",
                "learn"
            ],
            id: 2

        },
        {
            url: "https://us02web.zoom.us/rec/play/E38eBi_rfsgGCYhh6YiiutEw4pcsdCsHF2jy0sOMCfEAEzoFrb4z0IBnQLf5jgsMRxqULz7h-5fpc5S3.tLHdrPTcTXQ2n0Tz?continueMode=true&_x_zm_rtaid=8E8g3kSeQMGVoTvDaygrrQ.1603012922993.2fcaba7a7c5cc81110b378f2474fb863&_x_zm_rhtaid=614",
            hashUrl: -1187954098,
            title: "Zoom",
            autorName: "Shon4me",
            createdTime: "2021-04-08T16:07:06.502Z",
            editTime: "Fri Apr 09 2021 13:02:08 GMT+0300 (שעון ישראל (קיץ))",
            tags: [
                "zoom",
                "learn"
            ],
            id: 2
        }
    ]:
    [
        {
            url: "https://us02web.zoom.us/rec/play/E38eBi_rfsgGCYhh6YiiutEw4pcsdCsHF2jy0sOMCfEAEzoFrb4z0IBnQLf5jgsMRxqULz7h-5fpc5S3.tLHdrPTcTXQ2n0Tz?continueMode=true&_x_zm_rtaid=8E8g3kSeQMGVoTvDaygrrQ.1603012922993.2fcaba7a7c5cc81110b378f2474fb863&_x_zm_rhtaid=614",
            hashUrl: -1187954098,
            title: "else",
            autorName: "Shon4me",
            createdTime: "2021-04-08T16:07:06.502Z",
            editTime: "Fri Apr 09 2021 13:02:08 GMT+0300 (שעון ישראל (קיץ))",
            tags: [
                "zoom",
                "learn"
            ],
            id: 2
        },
        {
            url: "https://us02web.zoom.us/rec/play/E38eBi_rfsgGCYhh6YiiutEw4pcsdCsHF2jy0sOMCfEAEzoFrb4z0IBnQLf5jgsMRxqULz7h-5fpc5S3.tLHdrPTcTXQ2n0Tz?continueMode=true&_x_zm_rtaid=8E8g3kSeQMGVoTvDaygrrQ.1603012922993.2fcaba7a7c5cc81110b378f2474fb863&_x_zm_rhtaid=614",
            hashUrl: -1187954098,
            title: "else2",
            autorName: "Shon4me",
            createdTime: "2021-04-08T16:07:06.502Z",
            editTime: "Fri Apr 09 2021 13:02:08 GMT+0300 (שעון ישראל (קיץ))",
            tags: [
                "zoom",
                "learn"
            ],
            id: 2
        }
    ] 
    );




  return (
    <div className="title">
      <div>
        <h1>Home - VTM</h1>
        <br />
        <h2>Welcome {props.email}!</h2>
      </div>

      <div className="secsion">
        <Button className="d-flex" >Add Summary</Button>
      </div>

      <CardArray summarys={summarys}/>
      
    </div>
  );
}
