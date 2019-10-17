import React, {useEffect} from 'react';
import * as actionCreators from '../state/actionCreators';
import { connect } from 'react-redux';
import CharacterCard from './CharacterCard';
import { ParentStyle, StyledButton } from './Styles';

export function CharacterList (props) {
    const {characterState, getCharacter, nextPage, prevPage} = props;
    
    useEffect(() => {
        getCharacter(characterState.url)
    }, [characterState.url])

    return (
        <ParentStyle>
            {
                characterState.characters.map(feature => <CharacterCard key={feature.id} character={feature} />)
            }
            <StyledButton onClick={() => prevPage(characterState.prevUrl)}>Previous Page</StyledButton>
            <StyledButton onClick={() => nextPage(characterState.nextUrl)}>Next Page</StyledButton>
        </ParentStyle>
    );
}

export default connect (
    state => state,
    actionCreators
)(CharacterList)