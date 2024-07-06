let bodyIsWhite = false
let bodyButton = document.getElementById("change-body-background")
let body = document.querySelector('body')

function changeBody() {
    if (bodyIsWhite === false) {
        body.classList.remove('normal-body');
        body.classList.add('white-body');
        bodyIsWhite = true;
        console.log('button was pushed')
    } else {
        body.classList.remove('white-body');
        body.classList.add('normal-body');
        bodyIsWhite = false;
        console.log('button was pushed')
    }
}

bodyButton.addEventListener('click', changeBody)


let coloredLinks = true;
let linksButton = document.getElementById("remove-links-background");
let links = document.querySelector('nav')

function changeLinks() {
    if (coloredLinks === true) {
        links.classList.remove('normal-nav');
        links.classList.add("white-nav")
        coloredLinks = false;
        console.log('button 2 was pushed')
    } else {
        links.classList.remove('white-nav');
        links.classList.add('normal-nav');
        coloredLinks = true;
        console.log('button 2 was pushed')
    }
}

linksButton.addEventListener('click', changeLinks)


let coloredButtons = true;
let buttonButtons = document.getElementById('change-button-color');
let buttonOne = document.getElementById('remove-links-background');
let buttonTwo = document.getElementById('change-body-background');
let buttonThree = document.getElementById('change-button-color')

function changeButton() {
    
    
    if (coloredButtons == true) {
        buttonOne.classList.remove('normal-buttons');
        buttonOne.classList.add('white-buttons');
        buttonTwo.classList.remove('normal-buttons');
        buttonTwo.classList.add('white-buttons');
        buttonThree.classList.remove('normal-buttons');
        buttonThree.classList.add('white-buttons');
        coloredButtons = false
        console.log('button 3 was pushed')
    } else {
        buttonOne.classList.add('normal-buttons');
        buttonOne.classList.remove('white-buttons');
        buttonTwo.classList.add('normal-buttons');
        buttonTwo.classList.remove('white-buttons');
        buttonThree.classList.add('normal-buttons');
        buttonThree.classList.remove('white-buttons');
        coloredButtons = true;
        console.log('button 3 was pushed')
    }
}

buttonButtons.addEventListener("click", changeButton)


const languages = [
     {name:'Java', logo: 'Coffee Cup'},
     {name:'Python', logo:'Snakes'},
     {name:'C#', logo:'Text'},
     {name:'vb.net', logo:'Balls and Boxes'},
     {name:'JavaScript', logo: "JS"}
]

const languageList = document.getElementById('languages')


for(let item of languages){
    let newItem = document.createElement('li');
    newItem.innerText = item.name + '-' + item.logo;
    languageList.appendChild(newItem);
}
