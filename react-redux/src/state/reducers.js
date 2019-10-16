import * as types from './actionTypes';

const initialState = {
    characters: [],
    nextUrl: 'https://rickandmortyapi.com/api/character',
    prevUrl: 'https://rickandmortyapi.com/api/character',
    url: 'https://rickandmortyapi.com/api/character',
    searchTerm: ''
}

export function characterReducer(state = initialState, action) {
    switch (action.type) {
        case types.ADD:
            return {
                ...state,
                nextUrl: action.payload.info.next,
                prevUrl: action.payload.info.prev,
                characters: [...action.payload.results],
            };
        case types.NEXT_PAGE:
            return {
                ...state,
                url: action.payload
            }
        case types.PREV_PAGE:
            return {
                ...state,
                url: action.payload
            }
        case types.SEARCH:
            return {
                ...state,
                url: state.url + action.payload
            }
        default:
            return state;
    }
}