import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {
  renderList() {
    return this.props.books.map(book => {
      return (
        <li
          key={book.title}
          className="list-group-item"
          onClick={() => this.props.selectBook(book)}>
           {book.title}
        </li>
      );
    });
  }
  render() {
    return (
      <ul className="react-group col-sm-4">
        {this.renderList()}
      </ul>
    );
  }
}

function mapStateToProps(state) {
  // Whatever returns from here will show up as props inside booklist
  return {
    books: state.books
  }
}
// Anything returned through this function will end up as props on the bookList container
function mapDispatchToProps(dispatch) {
  // Whenever select book is called, result should be passed to all our reducers
  return bindActionCreators({
    selectBook
  }, dispatch);
}

// Promote bookList
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
