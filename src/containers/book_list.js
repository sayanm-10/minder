import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectBook } from '../actions/index';

class BookList extends Component {
    renderList() {
        return this.props.books.map((book) => {
            return (
                <li 
                    className="list-group-item" 
                    key={book.title}
                    onClick={() => this.props.selectBook(book)}>
                    {book.title}
                </li>
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

const mapDispatchToProps = dispatch => {
    // Whenever selectBook is called, pass the result to
    // all our reducers (passing is done by dispatch)
    return bindActionCreators({ selectBook: selectBook}, dispatch); // selectBook is the Action Creator
}

BookList = connect(mapStateToProps, mapDispatchToProps)(BookList);

export default BookList;