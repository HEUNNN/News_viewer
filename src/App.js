import React, { useState } from "react";
import axios from "axios";
import "./App.css";
import NewsList from "./components/NewsList";

function App() {
  const [data, setData] = useState(null);
  const onClick = async () => {
    try {
      const response = await axios.get(
        "https://newsapi.org/v2/top-headlines?country=kr&apiKey=aea770ed6949490493b34741a14f63bb"
      );
      setData(response.data);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div className="App">
      <NewsList />
    </div>
  );
}

export default App;
