let nameObject = {
    "Elephants" : ["Jumbo"," Dumbo", " Lin Wang"],
    "Chimpanzees" : ["David Greybeards", "Flo", "Figan"],
    "Dogs" : ["Beethoven", "Lassie", "Toto"],
    "Cats" : ["Garfield", "Grumpy Cat", "Keyboard Cat"],
    "Birds" : ["Cher Ami", "Dick the Mockingbird", "Jimmy"]
};

let buttonbox = document.querySelector('#buttonbox');
let namedisplay = document.querySelector('#namedisplay');
let buttonclick = document.querySelector('#changeslide');

let objectLength = Object.keys(nameObject).length;

/**for(name in nameObject) {
        const value = nameObject[name];
        if (nameObject.hasOwnProperty(name)) {
            buttonbox.innerHTML = value;
        }
        else {
            console.log("Does not contain;")
        }
    }
**/


//Based on the object length, add buttons with the names of the valye pairs
for (let i = 0; i < objectLength; i++) {
    let objName = Object.getOwnPropertyNames(nameObject);
    console.log(objName);
    let variableName = String(objName[i]);

    buttonbox.innerHTML += "<button onclick = displayItems("+"'"+ variableName+"')>" + variableName +" </button>";
    console.log((variableName)); 
}


//Display items of the object arrays based on the @Parameter name given in the for loop above
function displayItems(name) {
    //Set variable equal to random number based on nameObject array length
    let randomChoice = Math.floor(Math.random() * nameObject[name].length);
    for (let i = 0; i < nameObject[name].length; i++) {
        namedisplay.innerHTML = "<p>" + nameObject[name][randomChoice] + "</p>";
    }
    //namedisplay.innerHTML = nameObject[name];
}