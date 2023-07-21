const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3000; // Change this to your desired port number

app.use(bodyParser.json());
app.use(cors());

// In-memory playlist database (replace this with an actual database for production)
const playlist = [];

// 1. Playlist model
class Song {
  constructor(id, title, artist, playCount) {
    this.id = id;
    this.title = title;
    this.artist = artist;
    this.playCount = playCount;
  }
}

// 2. Track song play count in the playlist
function trackPlayCount(songId) {
  const song = playlist.find((song) => song.id === songId);
  if (song) {
    song.playCount++;
  }
}

// Add a few sample songs to the playlist
playlist.push(new Song(1, 'Loser', 'Kenshi Yonezu', 30));
playlist.push(new Song(2, 'Perfect Machine', 'Starset', 50));
playlist.push(new Song(3, 'Telepathic', 'Starset', 100));

// Routes

// Get all songs
app.get('/api/songs', (req, res) => {
  res.json(playlist);
});

// Track song play count
app.post('/api/songs/:id/play', (req, res) => {
  const songId = parseInt(req.params.id);
  trackPlayCount(songId);
  res.json({ message: 'Play count tracked successfully.' });
});

// Get list of songs sorted by most played
app.get('/api/songs/most-played', (req, res) => {
  const sortedPlaylist = [...playlist].sort((a, b) => b.playCount - a.playCount);
  res.json(sortedPlaylist);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
