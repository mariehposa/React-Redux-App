import React from 'react';
import { CharacterStyle } from './Styles';

export default function CharacterCard ({character}) {
    return(
        <CharacterStyle>
            <h2>{character.name}</h2>
            <img src={character.image} alt=""/>
            <p>Gender: {character.gender}</p>
            <p>Location: {character.location.name}</p>
            <p>Species: {character.species}</p>
            <p>Status: {character.status}</p>
        </CharacterStyle>
    );
}