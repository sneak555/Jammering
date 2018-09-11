import React from 'react';
import './TrackList.css';
import Track from '../Track/Track';


class TrackList extends React.Component {
  render(){
    console.log("tracklistTest"+this.props.tracks);
    return (
      <div className="TrackList">
        {this.props.tracks.map(track => {
          return (<Track track={track} onAdd={this.props.onAdd} onRemove={this.removeTrack} isRemoval={true} />)
        })}
      </div>
    );
  }
}
//I removed "onRemove={this.props.onRemove}
// testArray = this.props.tracks.map(track = () => {
//    return this.props.tracks.name;//I removed "onRemove={this.props.onRemove}" this probably is correct

//<Track track={this.props.tracks} onAdd={this.props.onAdd} onRemove={this.removeTrack} isRemoval={true} />//step 34 probably correct...syntax not confirmed .....//step 52 also might not be correct, check syntax for isRemoval/onRemove
// <div>
//   <p>this.props.track.name</p>
//   <p>this.props.track.artist</p>//these are from step 35
//   <p>this.props.track.album</p>
// </div>


export default TrackList;
