import React from 'react';
import './SearchBar.css';

export class SearchBar extends React.Component {
  constructor(props){
    super(props);
    this.search = this.search.bind(this);
    this.handleTermChange = this.handleTermChange.bind(this);
    this.state = {
      SearchBar: "",
    };
  }
  handleTermChange(event){
    this.setState({SearchBar:event.target.value})
  }
  search(){
    console.log('triggering search in searchBar');
console.log(this.state.searchBar);
    this.props.onSearch(this.state.SearchBar);
  }
  render(){
    return (
      <div className="SearchBar">
        <input onChange={this.handleTermChange} onSearch={this.search} placeholder="Enter A Song, Album, or Artist" />
        <a onClick={ this.search }>SEARCH</a>
      </div>
    )
  }
}

export default SearchBar;
