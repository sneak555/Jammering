import React, { Component } from 'react';
import './App.css';
//import TractList from '../TractList/TractList'; this should not be here
import Playlist from '../Playlist/Playlist';
import Spotify from '../../util/Spotify';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';

//TEST
class App extends React.Component() {
  constructor(props){
    super(props);
    this.removeTrack = this.removeTrack.bind(this);
    this.addTrack = this.addTrack.bind(this); // verify this binding-syntax
    // from step 42.
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
    this.search = this.search.bind(this);
    this.state = {

    searchResults: [{
      name: 'song1p', artist: 'Bob1p', album: 'cheese1p', id: '1231p'
    },{
      name: 'song2p', artist: 'Bob2p', album: 'cheese2p', id: '1232p'
    },{
      name: 'song3p', artist: 'Bob3p', album: 'cheese3p', id: '1233p'
    },{
      name: 'song4p', artist: 'Bob4p', album: 'cheese4p', id: '1234p'
    },{
      name: 'song5p', artist: 'Bob5p', album: 'cheese5p', id: '1235p'
    }]

    // step 32
    // is this the correct way to pass (this.state.searchResults to the component?)
    // confirmed by tutor
    }
    this.state.playlistName = "this is the playlistName string";
    this.state.playlistTracks = [{ //this is from step 37
      name: 'song1p', artist: 'Bob1p', album: 'cheese1p', id: '1231p'
    },{
      name: 'song2p', artist: 'Bob2p', album: 'cheese2p', id: '1232p'
    },{
      name: 'song3p', artist: 'Bob3p', album: 'cheese3p', id: '1233p'
    },{
      name: 'song4p', artist: 'Bob4p', album: 'cheese4p', id: '1234p'
    },{
      name: 'song5p', artist: 'Bob5p', album: 'cheese5p', id: '1235p'
    }]
  }

  addTrack(track){
    if(this.state.playlistTracks.find(savedTrack => savedTrack.id === track.id)) {
      return;
    }
    let tempList = this.state.playlistTracks.slice();
    tempList.push(track);
    this.setState({ playlistTracks: tempList });
  }
  search(searchTerm){
    Spotify.search(searchTerm).then(tracks => {
      this.setState( {searchResults: tracks})
    });
  }
  removeTrack(track){
    this.state.playlistTracks.splice(this.state.playlistTracks.indexOf(track), 1);
    this.setState({ playlistTracks: this.state.playlistTracks });
  }
  //<SearchResults onAdd={addTrack()} /> //is this giving this function to SearchResults? won't that potentaily going to create a call-loop?

  updatePlaylistName(name){
    this.state.name = name;
  }
  savePlaylist(){
    const tempArray = this.state.playlistTracks.map(track => {
      return track.uri;
    });
    Spotify.savePlaylist(this.playlistName,tempArray);

    this.setState({
      playlistName: 'New Playlist',
      playlistTracks: []
    })
  }
  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>//whats with the className="highlight" ?
        <div className="App">
          <SearchBar isRemoval={false} onSearch={this.search} />
          //<script type="SearchBar" src="../SearchBar/SearchBar.js"></script>
          //<script type="SearchBar" src="../SearchBar/SearchBar.css"></script>
          <div className="App-playlist">
            <searchResults result={this.state.searchResults} onAdd={this.addTrack} />
            //<script type="SearchResults" src="../SearchResults/SearchResults.js"></script>
            //<script type="SearchResults" src="../SearchResults/SearchResults.css"></script>

            //..double check later
            <Playlist onSave={this.savePlaylist} onNameChange={this.updatePlaylistName} playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks} onRemove={this.removeTrack} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
