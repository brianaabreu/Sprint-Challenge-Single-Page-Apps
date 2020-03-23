import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const Button = styled.button`
  font-size: 16px;
`;

export default function Header() {
  return (
    <header>
      <h1>Rick & Morty Fanpage</h1>

      <Nav>
        <Link to="/" className="to-home">
          Home
        </Link>
        <Link to="/Characters" className="to-characters">
          Characters
        </Link>
        <Link to="/Search" className="to-search">
          Search
        </Link>
      </Nav>
    </header>
  );
}
