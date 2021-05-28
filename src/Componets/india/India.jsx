import React, { useEffect, useState } from "react";
import axios from "axios";
import { indiaUrl } from "../../utils/url";
import { Card } from "react-bootstrap";

function India() {
  const [status, setStatus] = useState([]);
  useEffect(() => {
    fetchStatus();
  }, []);

  const fetchStatus = async () => {
    const response = await axios.get(indiaUrl);
    const st = response.data;
    console.log(st[st.length - 1]);
    setStatus(st[st.length - 1]);
  };
  return (
    <div>
      <Card style={{ width: "30rem" }}>
        <h1>{status.Country}</h1>
        <h2>Recoverd : {status.Recovered}</h2>
        <h2>Total : {status.Active + status.Confirmed}</h2>
        <h2>Active : {status.Active}</h2>
        <h2>Deaths : {status.Deaths}</h2>
        <h2>Province : {status.Province}</h2>
        <h2>{status.Date}</h2>
      </Card>
    </div>
  );
}

export default India;
