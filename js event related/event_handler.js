function makeRed(){
    // change the title of h1
    const handleStatus = document.getElementById('handler-status');
    handleStatus.innerText = "BackGround is RED";
    // change the title of h1
    document.body.style.backgroundColor = 'red'
}
// option 2

// make-blue id name er button e access korlm 
const makeBluButton = document.getElementById('make-blue'); 
makeBluButton.onclick = makeBlue ;
function makeBlue(){
    document.body.style.backgroundColor = 'blue';
    const handleStatus = document.getElementById('handler-status');
    handleStatus.innerText = "BackGround is BLUE";
}

// option 3

const makePurpleButton = document.getElementById('make-purple');
makePurpleButton.onclick = function makePurpl(){
    const handleStatus = document.getElementById('handler-status');
    handleStatus.innerText = "BackGround is PURPLE";
    document.body.style.backgroundColor = 'purple' ;
}

// add.EventListener

const pinkButton = document.getElementById('make-pink');
pinkButton.addEventListener('click' ,makePink);
function makePink(){
    const handleStatus = document.getElementById('handler-status');
    handleStatus.innerText = "BackGround is PINK";
    document.body.style.backgroundColor = 'pink';
}

// another way to add 
const pinkButton2 = document.getElementById('make-pink');
pinkButton2.addEventListener('click' ,function makePink(){
    const handleStatus = document.getElementById('handler-status');
    handleStatus.innerText = "BackGround is PINK";
    document.body.style.backgroundColor = 'pink';
});

// another way to add 
document.getElementById('make-golden').addEventListener('click', function (){
    const handleStatus = document.getElementById('handler-status');
    handleStatus.innerText = "BackGround is GOLDENRED";
    document.body.style.backgroundColor = 'goldenrod';
});