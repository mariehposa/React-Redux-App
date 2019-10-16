import axios from 'axios';
import * as types from './actionTypes';

export const add = (character) => {
    return {
        type: types.ADD,
        payload: character,
    }
}

export const nextPage = (url) => {
    return {
        type: types.NEXT_PAGE,
        payload: url,
    }
}

export const prevPage = (url) => {
    return {
        type: types.PREV_PAGE,
        payload: url,
    }
}

export const searchByName = (character) => {
    return {
        type: types.SEARCH,
        payload: character,
    }
}

export const getCharacter = (url) => dispatch => {
    axios.get(url)
        .then(res => {
            dispatch(add(res.data))
        })
        .catch(err => {
            //console.log(err.message)
        })
}
