import React from 'react';
import './Playlist.css';
import TrackList from '../TrackList/TrackList';

export class Playlist extends React.Component {
  constructor(props){
    super(props);
    this.handleNameChange = this.handleNameChange.bind(this);
  }
  handleNameChange(event){
    this.props.onNameChange(event.targetValue);
  }
  render(){
    return (
      <div className="Playlist">
        <input onChange={this.handleNameChange} defaultValue={ 'New Playlist' }/>
        <TrackList tracks={this.props.playlistTracks} onRemove={this.removeTrack} isRemoval={true} />
        <a onClick={this.props.onSave} className="Playlist-save">SAVE TO SPOTIFY</a>
      </div>
    )
  }
}

export default Playlist;
