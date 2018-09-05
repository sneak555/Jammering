import React from 'react';
import './Track.css';
//check importations from step 27(ish)

export class Track extends React.Component() {
  constructor(){
    super(props)
    this.addTrack.bind(this);
    this.removeTrack.bind(this);
  }
  renderAction(){
    if(this.props.isRemoval) {
      return (<Playlist onClick{removeTrack} -) anchor tags in there
      //this removes a track that IS currently in the playlist, it should be a button
      //that shows up as a "-" sign by the tracks that you have in your playlist
      //this is similar to the problem below, it is for ste 55
    } else {
      return (<Playlist onClick={addTrack} +)
      //this adds a track that is NOT currently in the playlist it should be a button
      //that shows up as a "+" signby the tracks taht you find in your search.
      // step 47 is not complete, I need to add onClick property to the Track.js's + element....whatever that means.
    }
  // I don't understand what a anchor tag is so I don't understand what this is
  // I even looked up what a anchor tag is and the page I found said that it
  // is used for when you want a link to send the user to the current webpage
  // but at a spesific location...the closest thing I can think of is that This
  // is having you use renderAction as a way to make a block of text send you
  // to a spesific place.....but what does that have to do with the "-" and "+"
  // things? I just looked at the code-cademy version and it has + symbols on the tracks....
  // but they don't do anything....
  //
  // I now believe the +/- things are for adding/removing the tracks from the the playlistTracks
  // the problem here is that I still don't know what a anchor tag is....
  }
  addTrack(){
    this.props.onAdd(this.props.track);
  }
  removeTrack(){
    this.props.onRemove(this.props.track);
  }
  render(){
    return (
      <div className="Track">
        <div className="Track-information">
          //<h3><!-- track name will go here --></h3>
          this.props.track.name;
          //<p><!-- track artist will go here--> | <!-- track album will go here --></p>
          this.props.track.artist;
        </div>
        <a className="Track-action">//<!-- + or - will go here --></a>
      </div>
    )
  }
}
