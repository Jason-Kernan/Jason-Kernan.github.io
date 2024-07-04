let bodyIsWhite = false
let bodyButton = document.getElementById("change-body-background")
let body = document.querySelector('body')

function changeBody(){
    if(bodyIsWhite === false){
        body.classList.remove('normal-body');
        body.classList.add('white-body');
        bodyIsWhite = true;
        console.log('button was pushed')
    } else{
        body.classList.remove('white-body');
        body.classList.add('normal-body');
        bodyIsWhite = false;
        console.log('button was pushed')
    }
}

bodyButton.addEventListener('click', changeBody)
