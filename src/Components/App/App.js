import React, { Component } from 'react';
import './App.css';
//import TractList from '../TractList/TractList'; this should not be here
import Playlist from '../Playlist/Playlist';
import Spotify from '../../util/Spotify';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';

//TEST
class App extends React.Component {
  constructor(props){
    super(props);
    this.removeTrack = this.removeTrack.bind(this);
    this.addTrack = this.addTrack.bind(this); // verify this binding-syntax
    // from step 42.
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
    this.search = this.search.bind(this);
    this.state = {
      playlistName: "this is the playlistName string",
      playlistTracks: [{ //this is from step 37
        name: 'song1p', artist: 'Bob1p', album: 'cheese1p', id: '1231p'
      },{
        name: 'song2p', artist: 'Bob2p', album: 'cheese2p', id: '1232p'
      },{
        name: 'song3p', artist: 'Bob3p', album: 'cheese3p', id: '1233p'
      },{
        name: 'song4p', artist: 'Bob4p', album: 'cheese4p', id: '1234p'
      },{
        name: 'song5p', artist: 'Bob5p', album: 'cheese5p', id: '1235p'
      }],

      searchResults: [{
        name: 'song1', artist: 'Bob1', album: 'cheese1', id: '1231'
      },{
        name: 'song2', artist: 'Bob2', album: 'cheese2', id: '1232'
      },{
        name: 'song3', artist: 'Bob3', album: 'cheese3', id: '1233'
      },{
        name: 'song4', artist: 'Bob4', album: 'cheese4', id: '1234'
      },{
        name: 'song5', artist: 'Bob5', album: 'cheese5', id: '1235'
      }]
    };
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
      console.log('app.searchtest'+this.props.tracks);
      this.setState( {searchResults: tracks})
    });
  }
  removeTrack(track){
    this.state.playlistTracks.splice(this.state.playlistTracks.indexOf(track), 1);
    this.setState({ playlistTracks: this.state.playlistTracks });
  }

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
    console.log("appTest"+this.props.tracks);
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar isRemoval={false} onSearch={this.search} />
          <div className="App-playlist">
            <SearchResults result={this.state.searchResults} onAdd={this.addTrack} />

            <Playlist onSave={this.savePlaylist} onNameChange={this.updatePlaylistName} playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks} onRemove={this.removeTrack} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
