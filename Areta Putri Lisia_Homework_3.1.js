// Switch to a new database named "music_database"
use music_database

// Create the "Songs" collection
db.createCollection("Songs")

// Create the "Artists" collection
db.createCollection("Artists")

// Create the "PopularSongs" collection
db.createCollection("PopularSongs")

// Populate the "Songs" collection
db.Songs.insertMany([
    { title: "Telepathic", artist: "Starset", album: "Vessels" },
    { title: "Perfect Machine", artist: "Starset", album: "Divisions" }
]);

// Populate the "Artists" collection
db.Artists.insertMany([
    { name: "Starset", dateOfBirth: "2013", genres: ["Rock"]}
]);

// Populate the "PopularSongs" collection
db.PopularSongs.insertMany([
    { title: "Telepathic", playCount: 100, period: "2023-04-24 to 2023-07-21" },
    {title: "Perfect Machine", playCount: 90, period: "2023-04-24 to 2023-07-21" }
]);