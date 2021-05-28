import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { totalSummaryUrl } from "../../utils/url";

function Gsummary() {
  const [summary, setsummary] = useState([]);

  useEffect(() => {
    fetchStatus();
  }, []);
  const fetchStatus = async () => {
    const response = await axios.get(totalSummaryUrl);
    // const st = response.data;
    // console.log(st[st.length - 1]);
    // setStatus(st[st.length - 1]);
    console.log(response.data.Global);
    setsummary(response.data.Global);
  };
  return (
    <div>
      <Card style={{ width: "30rem" }}>
        <h1>Global</h1>
        <h2>TotalRecovered : {summary.TotalRecovered}</h2>
        <h2>NewRecovered : {summary.NewRecovered}</h2>
        <h2>TotalConfirmed :{summary.TotalConfirmed}</h2>
        <h2>NewConfirmed : {summary.NewConfirmed}</h2>
        <h2>TotalDeaths: {summary.TotalDeaths}</h2>
        <h2>NewDeaths: {summary.NewDeaths}</h2>
        <h2>{summary.Date}</h2>
      </Card>
    </div>
  );
}

export default Gsummary;
