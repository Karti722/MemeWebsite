let randomNum = Math.round(Math.random()) % 2;
document.body.style.backgroundImage = "url('background-images/app-background" + randomNum + ".png')";
let meme = document.getElementById("meme");
let title = document.getElementById("title");
let getMemeBtn = document.getElementById("get-meme-btn");
// API URL
let url = "https://meme-api.com/gimme/";
// Array of subreddits
let subreddits = ["wholesomememes", "catmemes", "dogmemes", "me_irl"];
// Function to Get Random Memem
let getMeme = function(){
    // Choose a random subreddit from the subreddits array
    let randomSubreddit = subreddits[Math.floor(Math.random() * subreddits.length)];
    // console.log(randomSubreddit);
    // Fetch data from the api
    fetch(url + randomSubreddit)
    .then((resp) => resp.json())
    .then((data) => {
        // console.log(data);
        let memeImg = new Image();
        // Display meme image and title only after the image is loaded
        memeImg.onload = () => {
            meme.src = data.url;
            title.innerHTML = data.title;
        };
        memeImg.src = data.url;
    });
};
// Call the getMeme() on button click 
// Changes the background image by changing the randomNum value and changing the background image url accordingly
getMemeBtn.addEventListener("click", function () {
    getMeme();
    randomNum = Math.round(Math.random());
    document.body.style.backgroundImage = "url('background-images/app-background" + randomNum + ".png')";
});
window.addEventListener("load", getMeme);
