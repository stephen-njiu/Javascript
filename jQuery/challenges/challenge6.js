const links = document.querySelectorAll('nav > ul > li > a');
for (let eachLink of links){
    eachLink.addEventListener('click',()=>{
        alert(`Clicked ${eachLink.innerHTML}`)
    })
}

