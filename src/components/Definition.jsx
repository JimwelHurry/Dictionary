import React from "react";

const Definition = ({ data }) => {
  return (
    <div className="definition">
      <h2>Definitions</h2>
      {data && data.length > 0 ? (
        data.map((meaning, index) => (
          <div key={index}>
            <h3>{meaning.partOfSpeech}</h3>{" "}
            {/* Part of Speech (noun, verb, etc.) */}
            <p>{meaning.definitions[0].definition}</p> {/* First definition */}
          </div>
        ))
      ) : (
        <p>No definitions found</p>
      )}
    </div>
  );
};

export default Definition;
