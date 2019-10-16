import React from 'react';
import './App.css';
import * as reducers from './state/reducers';
import { combineReducers, createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import CharacterList from './components/CharacterList';
import SearchForm from './components/SearchForm';

const monsterReducer = combineReducers({
  characterState: reducers.characterReducer
})

const store = createStore(
  monsterReducer,
  {},
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  ),
)

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1 className="Header">WELCOME TO <span style={{color: "green"}}>RICK</span> AND <span style={{color: "green"}}> MORTY </span>!</h1>
        <SearchForm />
        <CharacterList />

      </div>
    </Provider>
  );
}

export default App;
