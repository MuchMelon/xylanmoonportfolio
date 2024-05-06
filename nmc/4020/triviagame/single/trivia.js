let documentBody = document.querySelector('#question');
let answerBody = document.querySelector('#answerBody');
let count = 0;
let answer = "";
let answerChoices = [];


function createQA() {
    $.getJSON('https://the-trivia-api.com/v2/questions/', function(data) {
        documentBody.innerHTML = data[0].question.text;
        answer = data[0].correctAnswer;
        answerChoices = data[0].incorrectAnswers;
        answerChoices.push(answer);
        addButtons();
        console.log(answerChoices);
    });
}

function checkAnswer() {
    
    console.log(answer);
}

function addButtons() {
    answerBody.innerHTML = "";
    for (let i = 0; i < answerChoices.length; i++) {
        answerBody.innerHTML += "<button id='button" +i +"'onclick='checkAnswer()'>"+answerChoices[i] +"</button>";
    }
    
}

    

    
            

