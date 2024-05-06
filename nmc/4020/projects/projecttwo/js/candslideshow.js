let candidateNames = [["Jeb Bush","Ben Carson","Lincoln Chafee","Chris Christie","Ted Cruz","Carly Fiorina","Jim Gilmore"], 
["Lindsey Graham","Bobby Jindal","John Kasich","Lawrence Lessig","Martin O'Malley","George Pataki","Rand Paul"],
["Rick Perry","Marco Rubio","Bernie Sanders","Rick Santorum","Donald Trump","Scott Walker","Jim Webb"]]

let candidatePix = [["bush.jpg","carson.jpg","chafee.jpg","christie.jpg","cruz.jpg","fiorina.jpg","gilmore.jpg"],
["graham.jpg","jindal.jpg","kasich.jpg","lessig.jpg","omalley.jpg","pataki.jpg","paul.jpg"],
["perry.jpg","rubio.jpg","sanders.jpg","santorum.jpg","trump.jpg","walker.jpg","webb.jpg"]]

let output1=document.querySelector('#jebbush');
let output2=document.querySelector('#chrischristie');
let output3=document.querySelector('#donaldtrump');

let onenext =document.querySelector('#onenext');
let oneprevious =document.querySelector('#oneprevious');
let twonext =document.querySelector('#twonext');
let twoprevious =document.querySelector('#twoprevious');
let threenext =document.querySelector('#threenext');
let threeprevious =document.querySelector('#threeprevious');


let i = 0;
function canShow(plusMinus, array, slideshowSelector) {

    if(slideshowSelector == 1) {
        output1.innerHTML = "<div class='cand'›" + "<h1>" + candidateNames[array][i] +"</h2><br><img src=pix/"+candidatePix[array][i]+"></cand>";
    }
    if(slideshowSelector == 2) {
        output2.innerHTML = "<div class='cand'›" + "<h1>" + candidateNames[array][i] +"</h2><br><img src=pix/"+candidatePix[array][i]+"></cand>";
    }
    if(slideshowSelector == 3) {
        output3.innerHTML = "<div class='cand'›" + "<h1>" + candidateNames[array][i] +"</h2><br><img src=pix/"+candidatePix[array][i]+"></cand>";
    }
    
    
    i += plusMinus;
    if (i == candidateNames[array].length) {
        i = 0;
    }

    if (i < 0) {
        i = candidateNames[array].length -1;    
    }
}

onenext.onclick = function () {
    canShow(1,0,1);
}
oneprevious.onclick = function () {
    canShow(-1, 0, 1);
}

twonext.onclick = function () {
    canShow(1,1,2);
}
twoprevious.onclick = function () {
    canShow(-1, 1, 2);
}

threenext.onclick = function () {
    canShow(1,2,3);
}
threeprevious.onclick = function () {
    canShow(-1, 2, 3);
}