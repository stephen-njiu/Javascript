const hTag = document.querySelector('h1');
const formTag = document.querySelector('form');

formTag.addEventListener('submit', function(event){
    "use strict";
    event.preventDefault();
    var myNum = parseInt(document.querySelector('input').value);

    if(myNum){
        hTag.style.fontSize = myNum + "px";
    }
    else {
        alert('Please enter a number');
    }
})