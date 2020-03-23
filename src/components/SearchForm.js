import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

export default function SearchForm() {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    axios.get("https://rickandmortyapi.com/api/character/").then(response => {
      const characters = response.data.results.filter(character =>
        character.name.toLowerCase().includes(query.toLowerCase())
      );

      setData(characters);
    });
  }, [query]);

  const handleInputChange = event => {
    setQuery(event.target.value);
  };

  const Results = styled.div`
    display: flex;
    flex-direction: row;
    // border: 1px solid red;
    justify-content: center;
    margin: 20px;
    text-align: center;
  `;
  const Header3 = styled.h3`
  color: #3333ff
  margin-left: 20px;
`;

  const Information = styled.div`
    // border: 1px solid blue;
    width: auto;
    padding: 5px;
  `;

  return (
    <div>
      <input
        id="name"
        type="text"
        name="textfield"
        placeholder="Search"
        value={query}
        onChange={handleInputChange}
      />

      {data.map(character => {
        return (
          <Results>
            <img alt="character" src={character.image} />
            <br />
            <Information>
              <Header3>{character.name}</Header3> <br />
              <Header3>{character.species}</Header3> <br />
              <Header3>{character.gender}</Header3>
            </Information>
          </Results>
        );
      })}
    </div>
  );
}
