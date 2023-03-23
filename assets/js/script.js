
//Capturing the two 3rd-party APIs we'll be using

//Bored API giving us a randomized event 
var randomActivity = "http://www.boredapi.com/api/activity/";

//last.fm API info
var lastFmBaseURL = "http://ws.audioscrobbler.com/2.0/";
var apiKey = "634d2baea68e8fb7f9f95bd75f1f9406";

//The value is the activity of choice! 
var artistTag = "cleaning";
var albumTag = "exercise";
var trackTag= "";

//Query parameters for our form. Currently set up to look up a specific artist/album/track
var albumResult = "?method=tag.gettopalbums&tag=" + albumTag + "&limit=1&api_key=" + apiKey + "&format=json";
var artistResult = "?method=tag.gettopartists&tag=" + artistTag + "&limit=1&api_key=" + apiKey + "&format=json";
var trackResult = "?method=tag.gettoptracks&tag=" + trackTag + "&limit=1&api_key=" + apiKey + "&format=json";


//------------------------------------------------------------------------------------------------------------------
var dropdown = document.getElementById("dropdown");
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
            newOption.textContent = data.activity;
            dropdown.appendChild(newOption);
            
        })

}


var submitButton = document.getElementById("submitButton");
var formPage = document.getElementById("formPage");
var form = document.getElementById("form");
var questionOne = document.getElementById("question1");



function loadResults() {
    form.remove();
    //Getting the answer to question one to determine which fetch to use
    var questionOneAnswers = document.getElementsByName('question1');
    for (i=0;i< questionOneAnswers.length; i++){
        if(questionOneAnswers[i].checked){
            var questionOneAnswer = questionOneAnswers[i];
        }
    }
    
    //Maybe create 3 seperate functions to call inside each of these instead of moving the whole fetch. That way we can also use the users second answer to filter results
    if(questionOneAnswer == "Artist"){
        //Artist fetch
    }else if (questionOneAnswer == "Track"){
        // Track fetch
    }else {
        //Album fetch
    }
}

//last.fm fetch tester (ablum)
fetch(lastFmBaseURL + albumResult)
.then(function (response) {
    return response.json();
})
.then(function (data) {
    console.log(data);
    // var newOption = document.createElement('option');
    // newOption.textContent = data.activity;
    // dropdown.appendChild(newOption);
    
})

//last.fm fetch tester (song)
fetch(lastFmBaseURL + trackResult)
.then(function (response) {
    return response.json();
})
.then(function (data) {
    console.log(data);
    // var newOption = document.createElement('option');
    // newOption.textContent = data.activity;
    // dropdown.appendChild(newOption);
    
})

//last.fm fetch tester (artist)
fetch(lastFmBaseURL + artistResult)
.then(function (response) {
    return response.json();
})
.then(function (data) {
    console.log(data);
    // var newOption = document.createElement('option');
    // newOption.textContent = data.activity;
    // dropdown.appendChild(newOption);
    
})
