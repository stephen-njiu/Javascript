const divTag = document.querySelector('div');
const btnAdd = document.querySelectorAll('button')[0];
const btnRemove = document.querySelectorAll('button')[1];

btnAdd.addEventListener('click', function(){
    "use strict";
    const newP = document.createElement('p');
    const pText = document.createTextNode('A new Paragraph');
    newP.appendChild(pText);
    divTag.appendChild(newP);
})

btnRemove.addEventListener('click', function(){
    "use strict";
    const Ps = document.querySelectorAll('p');
    divTag.removeChild(divTag.lastChild);
})




