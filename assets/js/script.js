//Capturing the two 3rd-party APIs we'll be using

//Bored API giving us a randomized event 
var randomActivity = "http://www.boredapi.com/api/activity/";

//last.fm API info
var lastFmBaseURL = "http://ws.audioscrobbler.com";
var apiKey = "634d2baea68e8fb7f9f95bd75f1f9406";

//Ideally these are random, so how do we generate a random artist/album/song???
var artist;
var album;
var track;

//Search parameters for our form. Currently set up to look up a specific artist/album/track
var albumSearch = "/2.0/?method=album.search&album=" + album + "&api_key=" + apiKey + "&format=json";
var artistSearch = "/2.0/?method=artist.search&artist=" + artist + "&api_key=" + apiKey + "&format=json";
var trackSearch = "/2.0/?method=track.search&track=" + track + "&api_key=" + apiKey + "&format=json";

