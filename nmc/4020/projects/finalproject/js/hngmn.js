//let wordlist = ["hello", "world", "test",""];

//https://gist.github.com/gravitymonkey/2406023
let wordlist = ["the","of","and","a","to","in","is","you","that","it","he","was","for","on"
,"are","as","with","his","they","I","at","be","this","have","from","or","one","had","by","word"
,"but","not","what","all","were","we","when","your","can","said","there","use","an","each"
,"which","she","do","how","their","if","will","up","other","about","out","many","then","them"
,"these","so","some","her","would","make","like","him","into","time","has","look","two","more"
,"write","go","see","number","no","way","could","people","my","than","first","water","been","call"
,"who","oil","its","now","find","long","down","day","did","get","come","made","may","part"];

//https://random-word-api.herokuapp.com/word

const wordAPI = 'https://random-word-api.herokuapp.com/word?number=10';



let usedletters = [];


var victoryaudio = new Audio('./audio/victory.mp3');

let randNum;
let randWord = '';

let printbox = document.querySelector("#worddisplay");
let form = document.querySelector('form');
let wordchoicebox = document.querySelector('#wordchoice');
let wordletters = document.querySelector('#wordletters');
let letterbox = document.querySelector('#usedwords');
let userinput = document.getElementById('wordchoice').value;
let clockbox = document.querySelector('#clockimg');
let correctword= document.querySelector('#correctwords');
let timedisplay = document.querySelector('#time');

let gameswon = 0;
let time = 60;
let timer;
let wrongAnswers = 0;


//Allows input without reloading page
var my_func = function(event) {
    event.preventDefault();
};
form.addEventListener("submit", my_func, true);

//Running Code
function fetchRandomWords(apiUrl, number) {
    return fetch(`${apiUrl}`)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Failed to fetch random words. Status code: ${response.status}`);
            }
            return response.json();
        })
        .then(data => data)
        .catch(error => {
            console.error('Error fetching random words:', error);
            return [];
        });
}

const apiUrl = 'https://random-word-form.herokuapp.com/random/noun';
const apiUrl2 = 'https://random-word-api.herokuapp.com/word';
const numberOfWords = 1;

function playGame(){
    fetchRandomWords(apiUrl2, numberOfWords)
    .then(wordsArray => {
                randNum = randomWordChoice(wordsArray);
                printWord(wordsArray);
                checkInput(wordsArray);
                countdowntimer();
                console.log(gameswon);
            
        //checkWordComplete(wordsArray);
            
    });
}


playGame();
//countdowntimer();


//console.log(randWord);

//Based off the length of the wordlist, choose a random number to return
function randomWordChoice(randomArray) {
    let max = randomArray.length;
    let arrayNumChoice = Math.floor(Math.random() * (max - 0 ) +0);
    return arrayNumChoice;
}
function checkusedLetters() {
    if(wrongAnswers >= 15) {
        wordletters.innerHTML = "Wrong word";
        wrongAnswers = 0;
        usedletters = [];
        setTimeout(playGame, 1000);
        time -= 5;
    }
}

 function countdowntimer(){
        clearInterval(timer);
        
        timer = setInterval(function changeBorder(){
            //clockbox.style.width = time*10 + "px";
            //clockbox.style.height = time*10 + "px";
            const rotationAngle = (720/60) * time;
            clockbox.style.transform = "rotate("+rotationAngle +"deg)";
            timedisplay.innerHTML = time;
            timerAnimation();
            

            const transitionDuration = (time < 10) ? 0.5 : 1; // Example: faster transition when time < 10
        
        // Apply the dynamic transition duration to the clockbox element
        clockbox.style.transitionDuration = transitionDuration + "s";
            if (time <= 0) {
                clearInterval(timer);
                wordletters.innerHTML = "You Lose"
                setTimeout(function(){
                window.location.reload();
                }, 5000);
            }
            time -= 1;
            console.log(time);
        }, 1000);
   
    
}
//Prints out a word from the given word list to the page based on the number provided by randomWordChoice()
function printWord(randArray) {
    //Based on the length of the given
    wordletters.innerHTML = '';
    for(let i = 0; i < randArray[randNum].length; i++) {
        randWord = randArray[randNum];
        wordletters.innerHTML += "<input id = '"+ [i]+"'value =" + (randArray[randNum][i]) +" readonly>";
    }
}
function checkInput(someArray){
    userinput= wordchoicebox.value;
    if(randWord.includes(userinput) ) {
        for(let i = 0; i<randWord.length; i++){
            if(userinput === randWord.charAt(i)){
                document.getElementById(i).style.color = 'black';
                letterBoxAnimation(i);
            }
        }
        if(usedletters.includes(userinput) == false) {
            usedletters.push(userinput);
            updateLetterBox();
            console.log("You got a letter!");
            console.log(usedletters);
        } else {
            console.log("You already used that letter!");
        }
        wordchoicebox.value ='';
    } else {
        wrongAnswers += 1;
        console.log("Try again");
        if(usedletters.includes(userinput) == false) {
            usedletters.push(userinput);
            updateLetterBox();
        } else {
            console.log("You already used that letter!");
        }
        //console.log(usedletters);
        checkusedLetters();
        wordchoicebox.value ='';

    }
    checkWordComplete(someArray); 
}

function updateLetterBox(){
    letterbox.innerHTML = "";
    for(let i = 0; i<usedletters.length; i++){
        letterbox.innerHTML += "<p>" + usedletters[i] + "</p>";
    }
    
}

function checkWordComplete(someArray) {
    
    let count = 0;
    for(let i = 0; i<randWord.length; i++){
        if(document.getElementById(i).style.color == 'black'){
            count++;
        }
        else{
            count = count;
        }

        if(count == randWord.length){
            console.log("You got the word!");
            console.log(randWord.length);
            //console.log(someArray[0]);
                for(let i = 0; i<randWord.length; i++){
                    completeAnimation(i);
                    time +=1;
            }

            time += 20;


            
            
            setTimeout(function() {
                wordletters.innerHTML ="";
                usedletters = [];
                //randNum = randomWordChoice(someArray);
                //printWord(someArray);
                //console.log("printword");
                gameswon += 1;
                correctword.innerHTML += "\n\n" +randWord;
                letterbox.innerHTML = "";
                wrongAnswers = 0;
                time += 20;
                console.log(wrongAnswers);

                
                setTimeout(playGame, 500);
            }, 3000)
            
                
            
        }
    }

};

function timerAnimation(){ 
    console.log(time);
    timedisplay.animate([
        {transform:"scale(1)"},
        {transform:"scale(1.1)"}
        
    ], {
        duration: (time/2)*30,
        iterations: 1
    });
   
}

function completeAnimation(location){
    victoryaudio.play();
    setTimeout(() => {
        document.getElementById(location).animate([
                {transform:"translateY(-50px)"},
                {transform:"translateY(0)"},
                {transform:"translateY(-50px)"},
                {transform:"translateY(0)"}
            ], {
                duration: 800,
                iterations: 1
            });

    }, location * 180)
    //document.getElementById(location).style.transform = ;
    //document.getElementById(location).style.transform = "translateY(-10px)";
    //document.getElementById(location).style.transform = "translateY(-10px)";
}

function letterBoxAnimation(location){
    var audio = new Audio('./audio/correct-6033.mp3');
    audio.volume = 0.5;
    audio.play();
    document.getElementById(location).animate([
        
        {transform:"translateY(-25px)"},
        {transform:"translateY(0)"}
    ], {
        duration: 400,
        iterations: 1
    });


    

    //document.getElementById(location).style.transform = ;
    //document.getElementById(location).style.transform = "translateY(-10px)";
    //document.getElementById(location).style.transform = "translateY(-10px)";
}