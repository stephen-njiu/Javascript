const div = document.querySelector('div');
const btn = document.querySelector('button');

btn.addEventListener('click', function(){
    "use strict";
    const newP = document.createElement('p');
    const pText = document.createTextNode("This is a new paragraph");
    newP.appendChild(pText);
    div.appendChild(newP);
})