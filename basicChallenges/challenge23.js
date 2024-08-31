const pTag = document.querySelectorAll('p');
const btn = document.querySelector('button');

btn.addEventListener('click', function(){
    for(let i = 0; i < pTag.length; i++){
        pTag[i].style.color = 'rebeccapurple';
        pTag[i].style.fontWeight = 'bold';
    }
})