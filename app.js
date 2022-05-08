
const userInput = document.querySelector("#input-text");
const outputBox = document.querySelector("#output-box");
const transBtn = document.querySelector("#trans-btn");

const serverUrl = "https://api.funtranslations.com/translate/pirate.json?";


function constructURL(text){
  return `${serverUrl}text=${text}`
};


const eventHandler = () =>{
console.log("clicked");
 let inputText = userInput.value; 
  fetch(constructURL(inputText))
    .then(response => response.json())
    .then(json => {
      var translatedText = json.contents.translated
 outputBox.innerHTML = translatedText
    })
};

transBtn.addEventListener("click", eventHandler);