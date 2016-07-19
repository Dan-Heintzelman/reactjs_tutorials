import React, { Component } from 'react';

//functional component
// const SearchBar = () => {
//   return <input />;
// };

//In a sense extend is giving the SearchBar access to everything the React
//"Component" class has access too. (Sort of like inheritence...?)

class SearchBar extends Component {
  constructor(props) {
    super(props);

      this.state = { term: '' };
  }

  //es6 function on a class
  render() {
    return (
      <div className="search-bar">
        <input
        // technically, you could remove the value field, but then you wouldnt
        // always be guaranteed that the text box content is equivalent to the
        // current state.
          value={this.state.term}
          onChange={event => this.onInputChange(event.target.value)} />
      </div>
    );
  }

  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);

  }

}


export default SearchBar;
