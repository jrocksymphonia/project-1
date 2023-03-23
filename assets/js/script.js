
//Capturing the two 3rd-party APIs we'll be using

//Bored API giving us a randomized event 
var randomActivity = "http://www.boredapi.com/api/activity/";

//last.fm API info
var lastFmBaseURL = "http://ws.audioscrobbler.com/2.0/";
var apiKey = "634d2baea68e8fb7f9f95bd75f1f9406";

//The value is the activity of choice! 
var artistTag;
var albumTag = "";
var trackTag;

//Query parameters for our form. Currently set up to look up a specific artist/album/track
var albumResult = "?method=tag.gettopalbums&tag=" + albumTag + "&limit=1&api_key=" + apiKey + "&format=json";
var artistResult = "?method=tag.gettopartists&tag=" + artistTag + "&limit=1&api_key=" + apiKey + "&format=json";
var trackResult = "?method=tag.gettoptracks&tag=" + trackTag + "&limit=1&api_key=" + apiKey + "&format=json";


"http://ws.audioscrobbler.com/2.0/?method=tag.gettopalbums&tag=homework&limit=1&api_key=634d2baea68e8fb7f9f95bd75f1f9406&format=json"

//--------------------------------------------------------------
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

//last.fm fetch tester
fetch(lastFmBaseURL + albumResult)
.then(function (response) {
    return response.json();
})
.then(function (data) {
    console.log(data);
    var newOption = document.createElement('option');
    newOption.textContent = data.activity;
    dropdown.appendChild(newOption);
    
})


// function submitResponse() {

    
    
//     fetch(lastFmBaseURL + albumResult)
//         .then(function (response) {
//             //We need to break apart the object and randomize it
//             return response.json();
//         })
//         .then(function (data) {
//             console.log(data.activity);
//             console.log(data);
//             var newOption = document.createElement('option');
//             newOption.textContent = data.activity;
//             dropdown.appendChild(newOption);
            
//         })
// }



// fetch('https://jsonplaceholder.typicode.com/todos/1')
//     .then(function (response) {
//         if (!response.ok) {
//             throw new Error(`Hey ... checkout your work`)
//         }

//         return response.json(); // parse my response to get the data
//     }).then(function (data) {
//         console.log(data)

//         // TODO:
//         // For loop over the array and get the data that you want from the object. 
//         // Then manipulate the DOM to print that data on the white screen!!!  

//         for (i = 0; i < data.length; i++) {

//         }

//     }).catch(function (error) {

//         console.error("Error fetching data, ", error)
//     });