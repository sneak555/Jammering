import React, { Component } from 'react';
import './App.css';
import TractList from '../TractList/TractList';
import playlist from '../Playlist/Playlist';
import Spotify from '.../util/spotify';
//check importations from step 12(ish)
//TEST
class App extends React.Component() {
  constructor(props){
    super(props);
    this.removeTrack = this.removeTrack.bind(this);
    this.addTrack = this.addTrack.bind(this); // verify this binding-syntax step 42. this might need to be moved to the constructor?
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
    this.search = this.search.bind(this);
    this.searchResults = this.state.searchResults = {
    //<searchResults result={Spotify.search()} />
    <SearchResults searchResults={Spotify.search()} /> //something wrong here
    // step 32
    // is this the correct way to pass (this.state.searchResults to the component?)
    // confirmed by tutor
  }
  let playlistName = "this is the playlistName string";
  let playlistTracks = [{
    name: 'song1p' artist: 'Bob1p' album: 'cheese1p' id: '1231p'
  },{
    name: 'song2p' artist: 'Bob2p' album: 'cheese2p' id: '1232p'
  },{
    name: 'song3p' artist: 'Bob3p' album: 'cheese3p' id: '1233p'
  },{
    name: 'song4p' artist: 'Bob4p' album: 'cheese4p' id: '1234p'
  },{
    name: 'song5p' artist: 'Bob5p' album: 'cheese5p' id: '1235p'
  }]
  addTrack(track){
    if(this.state.playlistTracks.find(savedTrack => savedTrack.id === track.id)) {
      <Playlist isRemoval={false} />
      return;
    }
  }
  search(searchTerm){

  }
  removeTrack(track){
    if(this.state.playlistTracks.find(savedTrack => savedTrack.id = track.id)) {
      <Playlist isRemoval={true} />
      return; //step 49
    }
  }
  <SearchResults onAdd={addTrack()} /> //is this giving this function to SearchResults? won't that potentaily going to create a call-loop?

  updatePlaylistName(name){
    this.state.name = name;
  }
  savePlaylist(){
    Spotify.savePlaylist(playlistName,playlistTracks);
    playlistName = 'New Playlist';
    playlistTracks = [];
  }
  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>//whats with the className="highlight" ?
        <div className="App">
          <SearchBar isRemoval={false} onSearch={search()} />
          <script type="SearchBar" src="../SearchBar/SearchBar.js"></script>
          <script type="SearchBar" src="../SearchBar/SearchBar.css"></script>
          <div className="App-playlist">
            <SearchResults propertyname={stufftopass} />
            <script type="SearchResults" src="../SearchResults/SearchResults.js"></script>
            <script type="SearchResults" src="../SearchResults/SearchResults.css"></script>
            //<!-- Add a SearchResults component --> //I don't think this is how you import..
            //..double check later
            <Playlist onNameChange={updatePlaylistName()} playlistName={this.state.playlistName} onRemove={removeTrack()} playlistTracks={this.state.playlistTracks} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
