(function(){
    const tabs = document.querySelectorAll('#tabs > ul > li > a');
const divTags = document.querySelectorAll('#tabs > div');

for (let element of tabs){
    element.addEventListener('click', selectTab);
}

function selectTab(event){
    event.preventDefault();
    for(let element of tabs){
        element.removeAttribute('class');
    }
    event.target.className = 'active';
    const thisTab = event.target.getAttribute('href');
    const thisContent = document.querySelector(thisTab);
    
    // for (let i of divTags){
    //     i.className = 'hidden';
    // }
    // thisContent.className = 'visible';

    const oldContent = document.querySelector('.visible');
    oldContent.className = 'visuallyhidden';
    oldContent.addEventListener('transitionend', function(){
        oldContent.className = 'hidden';
        thisContent.className = 'visible visuallyhidden';
        setTimeout(() => {
            thisContent.classList.remove('visuallyhidden');
        }, 20);
    }, {capture: false, once:true, passive: false});
}
}())


