import React, { useEffect, useState } from "react";
import axios from "axios";
import { totalSummaryUrl } from "../../utils/url";
import { Card, CardDeck, CardGroup } from "react-bootstrap";
function AllCountry() {
  const [status, setStatus] = useState([]);
  useEffect(() => {
    fetchStatus();
  }, []);

  const fetchStatus = async () => {
    const response = await axios.get(totalSummaryUrl);
    // const st = response.data;
    // console.log(st[st.length - 1]);
    // setStatus(st[st.length - 1]);
    console.log(response.data.Countries);
    setStatus(response.data.Countries);
  };
  return (
    <div className="AllCountry">
      {status.map((data, index) => {
        return (
          <Card className="acCard" style={{ width: "30rem", margin: "1rem" }}>
            <h6>{index + 1}</h6>
            <h1>{data.Country}</h1>
            <h2>Recoverd : {data.TotalRecovered}</h2>
            <h2>Total : {data.TotalConfirmed}</h2>
            <h2>Deaths : {data.TotalDeaths}</h2>
            <h2>{data.Date}</h2>
          </Card>
        );
      })}
    </div>
  );
}

export default AllCountry;
