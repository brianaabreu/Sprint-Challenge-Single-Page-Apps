import React from "react";
import styled from 'styled-components';

export default function CharacterCard(props) {
  return(
    <header className="header">
      
    <div><img src = {props.character.image}/></div>
      <div>
     <h1>Name: {props.character.name}</h1> 
      <h3>Sex: {props.character.gender}</h3>
      <h3>Status: {props.character.status}</h3>
      <h3>Species: {props.character.species}</h3>
      </div>
    </header>
  );
}