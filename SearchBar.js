import React from 'react';
import './SearchBar.css';

export class SearchBar extends React.Component() {
  constructor(){
    super(props);
    this.search.bind(this);
    this.handleTermChange.bind(this);
  }
  handleTermChange(event){
    this.setState({SearchBar:event.target.value})// is this correct? step 71
  }
  search(){
    this.props.onSearch(this.states.SearchResults); //step 69 the inside is probably wrong
  }
  render(){
    return (
      <div className="SearchBar">
        <input onChange={this.handleTermChange} placeholder="Enter A Song, Album, or Artist" />
        <a>SEARCH</a> //INCOMPLETE check step ~~16
      </div>
    )
  }
}
