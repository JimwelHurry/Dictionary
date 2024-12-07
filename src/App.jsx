import React from "react";
import SearchBar from "./components/SearchBar"; // Import SearchBar component
import Definition from "./components/Definition";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Dictionary App</h1>
      <SearchBar />
      <Definition />
    </div>
  );
}

export default App;
