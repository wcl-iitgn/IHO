import React, { useState, useEffect } from 'react';
// import Papa from "papaparse";

const DateFunction = () => {
  // const [data, setData] = useState([]);
  // useEffect(() => {
  //   // https://docs.google.com/spreadsheets/d/e/2PACX-1vSjAh-Spezg6VD9fr31LtcyeopfJW82a8x5ijojFWaMKf_q6OkujKEloECPtDsHhQ/pub?gid=565342739&single=true&output=csv
  //   Papa.parse('https://docs.google.com/spreadsheets/d/e/2PACX-1vSjAh-Spezg6VD9fr31LtcyeopfJW82a8x5ijojFWaMKf_q6OkujKEloECPtDsHhQ/pub?output=csv', {
  //     header: true,
  //     download: true,
  //     dynamicTyping: true,
  //     complete: (results) => {
  //       setData(results.data);
  //     }
  //   });
  // }, []);


  // if (data.length) {
  //   var date = data[0][days]
  // }

  // var result = new Date(date);
  // result.setDate(result.getDate());


  const getLastDateOfLastMonth = () => {
    const currentDate = new Date();
    const lastMonth = currentDate.getMonth() === 0 ? 11 : currentDate.getMonth() - 1;
    const lastMonthYear = currentDate.getMonth() === 0 ? currentDate.getFullYear() - 1 : currentDate.getFullYear();

    // Find the last date of the last month
    const lastDate = new Date(lastMonthYear, lastMonth + 1, 0);

    return lastDate;
  };
  const lastDate = getLastDateOfLastMonth();
  console.log(lastDate)


  return (
    <>
       {/* {lastDate.toDateString()} */}
        {lastDate.toLocaleString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
    </>
)
  
}


export default DateFunction
