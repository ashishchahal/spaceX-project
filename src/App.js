import React, { useState, useEffect } from "react";
import "./App.css";
import Home from "./Components/Home";
import History from "./Containers/HistoryContainer";
import Header from "./Components/Header";

function App() {
  const [spaceData, setSpaceData] = useState([]);
  const [spacePayload, setPayload] = useState([]);
  const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   const fetchSpaceData = async () => {
  //     setLoading(true);

  //     fetch("https://api.spacexdata.com/v3/history")
  //       .then((res) => {
  //         return res.json();
  //       })
  //       .then((data) => setSpaceData(data))
  //       .catch((error) => console.log(error));
  //     setLoading(false);
  //   };

  //   fetchSpaceData();
  // }, []);

  // useEffect(() => {
  //   fetch("https://api.spacexdata.com/v3/payloads")
  //     .then((res) => res.json())
  //     .then((data) => setPayload(data))
  //     .catch((error) => console.log(error));
  // }, []);

  return (
    <div className="app">
      {/* Header */}
      <Header />
      {/* Home */}
      <div className="spacex-history">
        <History spaceData={spaceData} loading={loading} />
      </div>

      <Home />
      <br />
      <div className="__spacex-payload">
        <ul>
          {spacePayload && spacePayload.map((item) => <li>{item.orbit}</li>)}
        </ul>
      </div>
      {/* Footer */}
    </div>
  );
}

export default App;
