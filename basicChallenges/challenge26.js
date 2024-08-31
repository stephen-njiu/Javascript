const divTag = document.querySelector('div');
const btnAdd = document.querySelectorAll('button')[0];
const btnRemove = document.querySelectorAll('button')[1];
var numOfPs = 1;

btnAdd.addEventListener('click', function(){
    "use strict";
    numOfPs++;
    const newP = document.createElement('p');
    const pText = document.createTextNode(`This is paragraph number ${numOfPs}`);
    newP.appendChild(pText);
    divTag.appendChild(newP);
})

btnRemove.addEventListener('click', function(){
    "use strict";
    if (numOfPs > 1){
        divTag.removeChild(divTag.lastChild);
        numOfPs--;
    }else{
        alert("Don't delete the last paragraph!")
    }

})




