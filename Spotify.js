const clientId = 'bf09f0f8598d40a49156efdc8c7eb393';
const redirectUri = 'Jammering.surge.sh';
let accessToken;
let expire;

const Spotify = {
  savePlaylist(playlistName,trackArray){
    let accessToken = getAccessToken();
    let headers = {
      Authorization: `Bearer ${accessToken}`//this is probably not correct step 91
    };

    let userID = '';
    if(!(playlistName&&trackArray)){
      return;
    }
    //step 92
    const xhr = new XMLHttpRequest;
    const url = 'https://api.spotify.com/v1/me';

    xhr.responseType = 'json';
    xhr.onreadystatechange = () => {
      if(xhr.readyState === XMLHttpRequest.DONE){
        userID = xhr.response;
      }
    };
    //step 93
    xhr.open('username',{headers: headers}); //I don't yet have the users' name?
    xhr.send();

    const xhr = new XMLHttpRequest;
    const url = '/v1/users/{user_id}/playlists/{playlist_id}/tracks';
    const data = JSON.stringify(userID);
    xhr.responseType = 'json';
    xhr.onreadystatechange = () => {
      if(xhr.readyState === XMLHttpRequest.DONE){
        playlistID = xhr.response.id;
      }
    };
    xhr.open('POST',url,{headers:,method:,body:});
    xhr.send(data);

    const xhr = new XMLHttpRequest;
    const url = '/v1/users/{user_id}/playlists';
    const data = JSON.stringify(userID);
    xhr.responseType = 'json';
    xhr.onreadystatechange = () => {
      if(xhr.readyState === XMLHttpRequest.DONE){
        playlistID = xhr.response.id;
      }
    };
    xhr.open('TEST',url,{headers:,method:,body:});
    xhr.send(data);
  }
  search(term){
    return fetch('https://api.spotify.com/v1/search?type=track&q='+term,{
      headers: {Authorization: `Bearer ${accessToken}`}
    }).map(track=() =>{
      id: track.id,
      name: track.name,
      artist: track.artist[0].name,
      album: track.album.name,
      uri: track.uri
    });
  }
  getAccessToken() {
    let expire;
    if (accessToken) {
      return accessToken;
    } elseif(!accessToken) {
      accessToken = windows.location.href.match('/access_token=([^&]*)/');
      expire = windows.location.href.match('/expires_in=([^&]*)/');
      window.setTimeout(() => accessToken = '', expire * 1000);
      window.history.pushState('Access Token', null, '/');
      return accessToken;
    } else {
      window.location = "https://accounts.spotify.com/authorize?client_id="+
      +CLIENT_ID+"&response_type=token&scope=playlist-modify-public&redirect_uri="+REDIRECT_URI;
    }
  }

export default Spotify;
