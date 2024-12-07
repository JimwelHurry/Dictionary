import React, { useState } from "react";
import axios from "axios"; // Gagamit tayo ng axios para mag-request sa API
import Definition from "./Definition"; // I-import natin ang Definition component para ipakita ang result

const SearchBar = () => {
  const [word, setWord] = useState(""); // State para sa input ng word
  const [definition, setDefinition] = useState(null); // State para sa definition ng word
  const [error, setError] = useState(null); // State para sa error message

  // Function para mag-fetch ng definition
  const fetchDefinition = async (word) => {
    try {
      const response = await axios.get(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
      );
      setDefinition(response.data[0].meanings); // I-save ang definition sa state
      setError(null); // I-reset ang error kung successful
    } catch (err) {
      setError("Word not found!"); // I-set ang error kung walang result
      setDefinition(null); // I-reset ang definition kung may error
    }
  };

  // Function para mag-handle ng search button click
  const handleSearch = (e) => {
    e.preventDefault(); // I-prevent ang page reload on form submit
    if (word) {
      fetchDefinition(word); // I-call ang fetch function kung may input
    }
  };

  return (
    <div className="search-bar">
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search for a word..."
          value={word}
          onChange={(e) => setWord(e.target.value)} // Update word state habang nagta-type
        />
        <button type="submit">Search</button>
      </form>
      {error && <p className="error">{error}</p>} {/* Display error message */}
      {definition && <Definition data={definition} />}{" "}
      {/* Display definition kapag meron */}
    </div>
  );
};

export default SearchBar;
