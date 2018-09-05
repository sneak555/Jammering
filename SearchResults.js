import React from 'react';
import './SearchResults.css';
//check importations from step 15(ish)

export class SearchResults extends React.Component() {
  render(){
    return (
      <div className="SearchResults">
        <h2>Results</h2>
        <TrackList tracks={this.props.searchResults} onAdd={this.props.onAdd} isRemoval={false} />
        // is this the correct way to pass tracks to tracklist? step 33
        // confirmed
      </div>
    )
  }
}
