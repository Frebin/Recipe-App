import React from "react";
import logo from "./logo.svg";
import "./App.css";

const App = () => {
  const APP_ID = "60b69446";
  const APP_KEY = "db7320171fbccca4400c5e8e5558a167";
  const URL = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;
  return (
    <div className="App">
      <form className="search-form">
        <input className="search-bar" type="text" />
        <button className="search-button" type="submit" />
      </form>
    </div>
  );
};

export default App;
