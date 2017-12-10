import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/SearchBar';

const API_KEY = 'AIzaSyCxn5UQFVUkaEbP9fkbWVw43EN0Te4RSw4';

// Create a new component.
function App() {
  return (
    <div>
      <SearchBar />
    </div>
  );
}

// Add the component to the DOM.
ReactDOM.render(<App />, document.querySelector('.container'));
