var image = document.getElementsByClassName("meme_image")[0];
var title = document.getElementById("meme_title") ;      
var author = document.querySelector(".author");
var btn = document.querySelector(".butn");
btn.addEventListener("click",generateMeme);

function generateMeme (){
    fetch("https://meme-api.com/gimme/wholesomememes")
    .then((response) => response.json())
    .then(function (value) {
        image.setAttribute("src", value.url);
        title.textContent = value.title;
        title.style.fontFamily="sans-serif";
        title.style.fontWeight="300";
        author.textContent = "Author: "+value.author;
        
    })
    .catch(function (error) {
        console.log("Error fetching meme data:", error);
    });
};
