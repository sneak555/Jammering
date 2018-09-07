import React from 'react';
import './Playlist.css';
import TrackList from '../TrackList/TrackList';

export class Playlist extends React.Component() {
  constructor(props){
    super(props);
    this.handleNameChange = this.handleNameChange.bind(this);
  }
  handleNameChange(event){
    event.onNameChange(this.event.targetValue)//step 59 this is likely connected to step 61.
  }
  render(){
    return (
      <div className="Playlist">
        <input onChange={this.handleNameChange} defaultValue={ 'New Playlist' }/> // the Onchange prop below in 18 is from step 61 and is probably wrong
        <TrackList tracks={this.props.playlistTracks} onRemove={this.removeTrack} isRemoval={true} />
        // step 20 of Jammming
        <a onClick={this.props.onSave} className="Playlist-save">SAVE TO SPOTIFY</a>
      </div>
    )
  }
}

export default Playlist;
