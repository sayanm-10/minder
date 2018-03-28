import React, { Component } from 'react';
import BookList from './containers/book_list';
import BookDetail from './containers/book_detail';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="row">
        <BookList />
        <BookDetail />
      </div>
    );
  }
}

export default App;
