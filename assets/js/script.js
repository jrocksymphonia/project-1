//Capturing the two 3rd-party APIs we'll be using

//Bored API giving us a randomized event 
var randomActivity = "http://www.boredapi.com/api/activity/";

//last.fm API info
var lastFmBaseURL = "http://ws.audioscrobbler.com/2.0/";
var apiKey = "634d2baea68e8fb7f9f95bd75f1f9406";

//Getting second Questions answer
var questionTwo = document.getElementById('dropdown');
var questionTwoAnswer = questionTwo.options[questionTwo.selectedIndex].value;


//The value  of these three equals the activity of choice! 
var artistTag = questionTwoAnswer;
var albumTag = questionTwoAnswer;
var trackTag = questionTwoAnswer;

//Query parameters for our form. Currently set up to look up a specific artist/album/track
var albumResult = "?method=tag.gettopalbums&tag=" + albumTag + "&limit=1&api_key=" + apiKey + "&format=json";
var artistResult = "?method=tag.gettopartists&tag=" + artistTag + "&limit=1&api_key=" + apiKey + "&format=json";
var trackResult = "?method=tag.gettoptracks&tag=" + trackTag + "&limit=1&api_key=" + apiKey + "&format=json";


//------------------------------------------------------------------------------------------------------------------

//start-page (index.html) code-------
var startButton = document.getElementById("startButton");

function loadForm() {
    window.location.href = "form.html";
}

//form page (form.html) code----------

//generate activity via Bored API
function getActivity() {

    fetch(randomActivity)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data.activity);
            console.log(data);
            var newOption = document.createElement('option');
            var dropdown = document.getElementById("dropdown");
            newOption.textContent = data.activity;
            newOption.value = data.type;
            dropdown.appendChild(newOption);
            switch (data.type) {
                case 'education':
                    newOption.type = "instrumental";
                    break;
                case 'recreational':
                    newOption.type = "pop";
                    break;
                case 'social':
                    newOption.type = "House";
                    break;
                case 'diy':
                    newOption.type = "pop";
                    break;
                case 'charity':
                    newOption.type = "90s";
                    break;
                case 'cooking':
                    newOption.type = "soul";
                    break;
                case 'relaxation':
                    newOption.type = "chillout";
                    break;
                case 'music':
                    newOption.type = "new wave";
                    break;
                case 'busywork':
                    newOption.type = "ambient";
                    break;
                default:
                    return;

            }
            console.log(newOption.type);

        })

}

//form.html variables
var submitButton = document.getElementById("submitButton");
var formPage = document.getElementById("formPage");
var form = document.getElementById("form");
var questionOne = document.getElementById("question1");
var container = document.getElementById("container");

//the submit button to load results:
function loadResults() {

    //Getting the answer to question one to determine which fetch to use
    var questionOneAnswers = document.getElementsByName('answer1');
    for (i = 0; i < questionOneAnswers.length; i++) {
        if (questionOneAnswers[i].checked) {
            var questionOneAnswer = questionOneAnswers[i].value;
        }
    }

    console.log(questionOneAnswer);
    //Create 3 seperate functions to call inside each of these instead of moving the whole fetch. 
    //That way we can also use the users second answer to filter results
    if (questionOneAnswer == "artist") {
        //artistAPI();
        console.log("Artist");
    } else if (questionOneAnswer == "track") {
        // songAPI();
        console.log("Track");

    } else {
        // albumAPI();
        console.log("Album");
    }
    form.remove();
}


//last.fm fetch (ablum)
function albumAPI() {
    fetch(lastFmBaseURL + albumResult)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            //append all of these items!

            //large image of album art
            // console.log(data.albums.album[0].image[2]);
            var albumImage = document.createElement("img");
            albumImage.src = data.albums.album[0].image[3]["#text"];
            albumImage.alt = data.albums.album[0].image[3].name;
            document.getElementById('container').appendChild(albumImage);

            //album name
            // console.log(data.albums.album[0].name);
            var albumName = document.createElement('h1');
            albumName.textContent = data.albums.album[0].name;
            document.getElementById('container').appendChild(albumName);

            //artist name
            // console.log(data.albums.album[0].artist.name);
            var artist = document.createElement('h3');
            artist.textContent = data.albums.album[0].artist.name;
            document.getElementById('container').appendChild(artist);

            //url to album
            // console.log(data.albums.album[0].url);
            var albumUrl = document.createElement('a');
            albumUrl.href = data.albums.album[0].url;
            albumUrl.textContent = "Check it out on last.fm";
            document.getElementById('container').appendChild(albumUrl);

        })
}
function songAPI() {
    //last.fm fetch (song)
    fetch(lastFmBaseURL + trackResult)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            //song image
            //console.log(data.tracks.track[0].image[3]);
            var songImage = document.createElement("img");
            songImage.src = data.tracks.track[0].image[3]["#text"];
            songImage.alt = data.tracks.track[0].image[3].name;
            document.getElementById('container').appendChild(songImage);

            //song name
            // console.log(data.tracks.track[0].name);
            var songName = document.createElement('h1');
            songName.textContent = data.tracks.track[0].name;
            document.getElementById('container').appendChild(songName);

            //artist name
            // console.log(data.tracks.track[0].artist.name);
            var songArtist = document.createElement('h3');
            songArtist.textContent = data.tracks.track[0].artist.name;
            document.getElementById('container').appendChild(songArtist);

            //url to song
            // console.log(data.tracks.track[0].url)
            var songUrl = document.createElement('a');
            songUrl.href = data.tracks.track[0].url;
            songUrl.textContent = "Check it out on last.fm";
            document.getElementById('container').appendChild(songUrl);

        })
}

function artistAPI() {
    //last.fm fetch (artist)
    fetch(lastFmBaseURL + artistResult)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            //artist image
            //console.log(data.topartists.artist[0].image[3]);
            var artistImage = document.createElement("img");
            artistImage.src = data.topartists.artist[0].image[3]["#text"];
            artistImage.alt = data.topartists.artist[0].image[3].name;
            document.getElementById('container').appendChild(artistImage);

            //artist name
            var artistName = document.createElement('h1');
            artistName.textContent = data.topartists.artist[0].name;
            document.getElementById('container').appendChild(artistName);


            //url to artist
            // console.log(data.topartists.artist[0].url);
            var artistUrl = document.createElement('a');
            artistUrl.href = data.topartists.artist[0].url;
            artistUrl.textContent = "Check it out on last.fm";
            document.getElementById('container').appendChild(artistUrl);
        })
}
