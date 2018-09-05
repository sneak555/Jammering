import React from 'react';
import './TrackList.css';
import Track from '../Track/Track';
//check importations from step 24(ish)

export class TrackList extends React.Component() {
  render(){
    return (
      <div className="TrackList">
        this.props.tracks.map(track = () => {
          <Track track={this.props.tracks} onAdd={this.props.onAdd} onRemove={this.props.onRemove} onRemove={removeTrack()} isRemoval={true} />
          //step 34 probably correct...syntax not confirmed .....//step 52 also might not be correct, check syntax for isRemoval/onRemove
          this.props.track.name
          this.props.track.artist
          this.props.track.album
          }
        )
      </div>
    )
  }
}
