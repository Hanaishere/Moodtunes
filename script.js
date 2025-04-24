const clientId = 'e3e6f596cfe941c4b8cc784468e53150';  // Your real Client ID
const redirectUri = 'https://hanaishere.github.io/Moodtunes/';  // GitHub Pages URL

document.getElementById("connectSpotify").addEventListener("click", () => {
  const scope = 'user-read-private user-read-email';  // Space-separated Spotify scopes
  const authUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&redirect_uri=${encodeURIComponent(redirectUri)}&scope=${scope}`;
  
  // Redirect user to Spotify login page
  window.location.href = authUrl;
});

window.onload = () => {
  const hash = window.location.hash;

  if (hash) {
    const token = new URLSearchParams(hash.substring(1)).get('access_token');
    console.log('Spotify Token:', token);

    if (token) {
      localStorage.setItem('spotify_token', token);
    }
  }
};
