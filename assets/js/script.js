
//Capturing the two 3rd-party APIs we'll be using

//Bored API giving us a randomized event 
var randomActivity = "http://www.boredapi.com/api/activity/";

//last.fm API info
var lastFmBaseURL = "http://ws.audioscrobbler.com/2.0/";
var apiKey = "634d2baea68e8fb7f9f95bd75f1f9406";

//Getting second Questions answer
var questionTwo = document.getElementById('dropdown');
var questionTwoAnswer = dropdown.options[dropdown.selectedIndex].value;

//The value is the activity of choice! 
var artistTag = questionTwoAnswer;
var albumTag = questionTwoAnswer;
var trackTag = questionTwoAnswer;

//Query parameters for our form. Currently set up to look up a specific artist/album/track
var albumResult = "?method=tag.gettopalbums&tag=" + albumTag + "&limit=1&api_key=" + apiKey + "&format=json";
var artistResult = "?method=tag.gettopartists&tag=" + artistTag + "&limit=1&api_key=" + apiKey + "&format=json";
var trackResult = "?method=tag.gettoptracks&tag=" + trackTag + "&limit=1&api_key=" + apiKey + "&format=json";


//------------------------------------------------------------------------------------------------------------------

var startButton = document.getElementById("startButton");

function loadForm() {
    window.location.href = "form.html";
}

//generate activity via Bored API
function getActivity() {

    fetch(randomActivity)
        .then(function (response) {
            //We need to break apart the object and randomize it
            return response.json();
        })
        .then(function (data) {
            console.log(data.activity);
            console.log(data);
            var newOption = document.createElement('option');
            var dropdown = document.getElementById("dropdown");
            newOption.textContent = data.activity;
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


var submitButton = document.getElementById("submitButton");
var formPage = document.getElementById("formPage");
var form = document.getElementById("form");
var questionOne = document.getElementById("question1");
var container = document.getElementById("container");




function loadResults() {
    form.remove();
    //Getting the answer to question one to determine which fetch to use
    var questionOneAnswers = document.getElementsByName('answer1');
    for (i = 0; i < questionOneAnswers.length; i++) {
        if (questionOneAnswers[i].checked) {
            var questionOneAnswer = questionOneAnswers[i];
        }
    }

    //Maybe create 3 seperate functions to call inside each of these instead of moving the whole fetch. That way we can also use the users second answer to filter results
    if (questionOneAnswer == "Artist") {
        artistAPI();
    } else if (questionOneAnswer == "Track") {
        songAPI();
    } else {
        albumAPI();
    }
}


function albumAPI() {
    //last.fm fetch tester (ablum)
    fetch(lastFmBaseURL + albumResult)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            //large image of album art
            console.log(data.albums.album[0].image[2]);
            //album name
            console.log(data.albums.album[0].name);
            //artist name
            console.log(data.albums.album[0].artist.name);
            //url to album
            console.log(data.albums.album[0].url);

            // var newOption = document.createElement('option');
            // newOption.textContent = data.activity;
            // dropdown.appendChild(newOption);
        })
}

function songAPI() {
    //last.fm fetch tester (song)
    fetch(lastFmBaseURL + trackResult)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            //song image
            console.log(data.tracks.track[0].image[2]);
            //song name
            console.log(data.tracks.track[0].name);
            //artist name
            console.log(data.tracks.track[0].artist.name);
            //url to song
            console.log(data.tracks.track[0].url)

            // var newOption = document.createElement('option');
            // newOption.textContent = data.activity;
            // dropdown.appendChild(newOption);
        })
}

function artistAPI() {
    //last.fm fetch tester (artist)
    fetch(lastFmBaseURL + artistResult)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            //artist image
            console.log(data.topartists.artist[0].image[3]);
            //artist name
            var artistName = document.createElement('h1');
            artistName.textContent = data.topartists.artist[0].name;
            document.getElementById('container').appendChild(artistName);

            //url to artist
            console.log(data.topartists.artist[0].url);

            // var newOption = document.createElement('option');
            // newOption.textContent = data.activity;
            // dropdown.appendChild(newOption);
        })
}
