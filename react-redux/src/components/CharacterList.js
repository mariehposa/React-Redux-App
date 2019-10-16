import React, {useEffect} from 'react';
import * as actionCreators from '../state/actionCreators';
import { connect } from 'react-redux';
import CharacterCard from './CharacterCard';
import { ParentStyle } from './Styles';

export function CharacterList (props) {
    const {character, getCharacter, nextPage, prevPage} = props;
    console.log(props);
    
    useEffect(() => {
        getCharacter(character.url)
    }, [character.url])

    return (
        <ParentStyle>
            {
                character.characters.map(feature => <CharacterCard key={feature.id} character={feature} />)
            }
            <button onClick={() => nextPage(character.nextUrl)}>Next Page</button>
            <button onClick={() => prevPage(character.prevUrl)}>Previous Page</button>
        </ParentStyle>
    );
}

export default connect (
    state => state,
    actionCreators
)(CharacterList)