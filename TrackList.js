import React from 'react';
import './TrackList.css';
import Track from '../Track/Track';

export class TrackList extends React.Component() {
  render(){
    return (
      <div className="TrackList">
        this.props.tracks.map(track = () => {
          <Track track={this.props.tracks} onAdd={this.props.onAdd} onRemove={this.removeTrack} isRemoval={true} /> //I removed "onRemove={this.props.onRemove}" this probably is correct
        }//step 34 probably correct...syntax not confirmed .....//step 52 also might not be correct, check syntax for isRemoval/onRemove
        <div>
          <p>this.props.track.name</p>
          <p>this.props.track.artist</p>//these are from step 35
          <p>this.props.track.album</p>
        </div>
          }
        )
      </div>
    )
  }
}

export default Track;
