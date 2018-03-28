import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component {
    render() {
        if(Object.keys(this.props.book).length === 0) {
            return <div>Select a book to get started.</div>
        }

        return (
            <div className="col-sm-8">
                <h3>Details for:</h3>
                <div>Title: {this.props.book.title}</div>
                <div>Pages: {this.props.book.pages}</div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        book: state.activeBook
    }
};

BookDetail = connect(mapStateToProps)(BookDetail);

export default BookDetail;