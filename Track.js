import React from 'react';
import './Track.css';

class Track extends React.Component
{
  constructor(props)
  {
    super(props);
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack  = this.removeTrack.bind(this);
  }
// class Track extends React.Component() {
//   constructor(props){
//     super(props);
//     this.addTrack = this.addTrack.bind(this);
//     this.removeTrack = this.removeTrack.bind(this);
//   }
  renderAction(){
    if(this.props.isRemoval) {
      //go over this stuff
      <button onClick={this.props.addTrack}>+</button>// anchor tags in there
      //this is supposed to remove a track that IS currently in the playlist, it should be a button
      //that shows up as a "-" sign by the tracks that you have in your playlist
      //this is similar to the problem below, it is for step 55
    } else {
      <button onClick={this.props.removeTrack}>-</button>
      //this is supposed to add a track that is NOT currently in the playlist it should be a button
      //that shows up as a "+" signby the tracks that you find in your search.
      // step 47 onclick property for the + element
    }
  }
  addTrack(){
    this.props.onAdd(this.props.track);
  }
  removeTrack(){
    this.props.onRemove(this.props.track);
  }
  renderAction(){
    if(this.props.isRemoval) {
      //go over this stuff
      return (<a className="Track-action" onClick={this.removeTrack}>-</a>);// anchor tags in there
      //this is supposed to remove a track that IS currently in the playlist, it should be a button
      //that shows up as a "-" sign by the tracks that you have in your playlist
      //this is similar to the problem below, it is for step 55
    } else {
      return (<a className="Track-action" onClick={this.addTrack}>+</a>);
      //this is supposed to add a track that is NOT currently in the playlist it should be a button
      //that shows up as a "+" signby the tracks that you find in your search.
      // step 47 onclick property for the + element//
    }
  }
  render(){
    console.log("trackTest"+this.props.tracks);

    return (
      <div class="Track">
        <div class="Track-information">
          <h3>{this.props.track.name}</h3>
          <p>{this.props.track.artist} | {this.props.track.artist}</p>
        </div>
        {this.renderAction}
      </div>
    );
  }
}

export default Track;
