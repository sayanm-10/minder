import React, { Component } from 'react';
import BookList from './containers/book_list';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="">
        <BookList />
      </div>
    );
  }
}

export default App;
