const clientId = 'bf09f0f8598d40a49156efdc8c7eb393';
const redirectUri = 'https://jammering.surge.sh/';
let accessToken;
//let expire; not needed

const Spotify = {
  getAccessToken() {
    if (accessToken) {
      return accessToken;
    }

    const accessTokenArray = window.location.href.match(/access_token=([^&]*)/);
    const expireArray = window.location.href.match(/expires_in=([^&]*)/);

    if (accessTokenArray&&expireArray) {
      accessToken = accessTokenArray[1];//this is a non-symmetric array...and in this case we need a very long string that gets searched in by the match
      const expire = Number(expireArray[1]);
      window.setTimeout(() => accessToken = '', expire * 1000);
      window.history.pushState('Access Token', null, '/');
      return accessToken;
    } else {
      const accessUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&redirect_uri=${redirectUri}&scope=playlist-modify-public`;
      window.location.href = accessUrl;
    }
  },

  savePlaylist(playlistName,trackArray){
    if(!(playlistName&&trackArray)){
      return;
    }

    const accessToken = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&redirect_uri=${redirectUri}&scope=playlist-modify-public`;
    const headers = { Authorization: `Bearer ${accessToken}`};
    let userId;

    return fetch('https://api.spotify.com/v1/me', {headers: headers}
    ).then(response => response.json()
    ).then(jsonResponse => {
      userId = jsonResponse.id;
      return fetch('https://api.spotify.com/v1/users/'+userId+'/playlist', {
        headers: headers,
        method: 'POST',
        body: JSON.stringify({name: playlistName})
      }).then(response => response.json()
      ).then(jsonResponse => {
        const playlistId = jsonResponse.id;
        return fetch('https://api.spotify.com/v1/users/'+userId+'/playlist'+playlistId+'/tracks', {
          headers: headers,
          method: 'POST',
          body: JSON.stringify({uris: trackArray})
        });
      });
    });
  },

  search(term){
    Spotify.getAccessToken();
    return fetch("https://api.spotify.com/v1/search?type=track&q="+term,{
      headers: {Authorization: `Bearer ${accessToken}`}
    }).then(response =>{ //this gets the response and converts it to json (something our side can understand better)
      return response.json();
    }).then(jsonResponse => {
      if (!jsonResponse.tracks) {
        return [];
      }
      return jsonResponse.tracks.items.map(track => ({
        id: track.id,
        name: track.name,
        artist: track.artists[0].name,
        album: track.album.name,
        uri: track.uri
      }));
    });
  },
}
export default Spotify;
/*
//   const xhr = new XMLHttpRequest;
//   const url = 'https://api.spotify.com/v1/me';
//
//   xhr.responseType = 'json';
//   xhr.onreadystatechange = () => {
//     if(xhr.readyState === XMLHttpRequest.DONE){
//       userID = xhr.response;
//     }
//   };
//   //step 93
//   xhr.open('username',{headers: headers}); //I don't yet have the users' name?
//   xhr.send();
//
//   const xhr = new XMLHttpRequest;
//   const url = '/v1/users/{user_id}/playlists/{playlist_id}/tracks';
//   const data = JSON.stringify(userID);
//   xhr.responseType = 'json';
//   xhr.onreadystatechange = () => {
//     if(xhr.readyState === XMLHttpRequest.DONE){
//       playlistID = xhr.response.id;
//     }
//   };
//   xhr.open('POST',url,{headers:,method:,body:});
//   xhr.send(data);
//
//   const xhr = new XMLHttpRequest;
//   const url = '/v1/users/{user_id}/playlists';
//   const data = JSON.stringify(userID);
//   xhr.responseType = 'json';
//   xhr.onreadystatechange = () => {
//     if(xhr.readyState === XMLHttpRequest.DONE){
//       playlistID = xhr.response.id;
//     }
//   };
//   xhr.open('TEST',url,{headers:,method:,body:});
//   xhr.send(data);
//*/
