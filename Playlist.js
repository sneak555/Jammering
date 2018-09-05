import React from 'react';
import './Playlist.css';
import TractList from '../TractList/TractList';
//check importations from step 21(ish)

export class Playlist extends React.Component() {
  constructor(){
    super(props);
    this.handleNameChange.bind(this);
  }
  handleNameChange(){
    <input onChange={defaultValue} />//step 59 this is likely connected to step 61.
  }
  render(){
    return (
      <div className="Playlist">
        <input onChange={handleNameChange()} defaultValue={ 'New Playlist' }/> // the Onchange prop below in 18 is from step 61 and is probably wrong
        <TrackList tracks={this.props.playlistTracks} onRemove={removeTrack()} isRemoval={true} />
        <!-- //Add a TrackList component --> // step 20 of Jammming
        <a onClick={this.props.onSave} className="Playlist-save">SAVE TO SPOTIFY</a>
      </div>
    )
  }
}
