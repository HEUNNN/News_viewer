import React, { useCallback, useState } from "react";
import axios from "axios";
import "./App.css";
import NewsList from "./components/NewsList";
import Categories from "./components/Categories";

function App() {
  const [category, setCategory] = useState("all");
  const onSelect = useCallback((category) => setCategory(category), []);
  return (
    <div className="App">
      <Categories category={category} onSelect={onSelect} />
      <NewsList category={category} />
    </div>
  );
}

export default App;
