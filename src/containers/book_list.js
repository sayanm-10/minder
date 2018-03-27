import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookList extends Component {
    renderList() {
        return this.props.books.map((book) => {
            return (
                <li className="list-group-item" key={book.title}>{book.title}</li>
            );
        });
    }
    
    render() {
        return (
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        )
    }
}

// As the name says - whatever the fn returns
// will become the props for this component.
// Takes the state as arguement.
const mapStateToProps = state => {
    return {
        books: state.books
    };
}

BookList = connect(mapStateToProps)(BookList);

export default BookList;