import React, { useState, useEffect } from 'react';
import Papa from "papaparse";

const DateFunction = ({ days }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    // https://docs.google.com/spreadsheets/d/e/2PACX-1vSjAh-Spezg6VD9fr31LtcyeopfJW82a8x5ijojFWaMKf_q6OkujKEloECPtDsHhQ/pub?gid=565342739&single=true&output=csv
    Papa.parse('https://docs.google.com/spreadsheets/d/e/2PACX-1vSjAh-Spezg6VD9fr31LtcyeopfJW82a8x5ijojFWaMKf_q6OkujKEloECPtDsHhQ/pub?output=csv', {
      header: true,
      download: true,
      dynamicTyping: true,
      complete: (results) => {
        setData(results.data);
      }
    });
  }, []);


  if (data.length) {
    var date = data[0][days]
  }

  var result = new Date(date);
  result.setDate(result.getDate());


  return (
    <>
        {/* {data.length ? <p>{result.toDateString()}</p> : <p>Loading...</p>} */}
        {data.length ? <b>{date}</b> : <>Loading...</>}
    </>
)
  
}


export default DateFunction
