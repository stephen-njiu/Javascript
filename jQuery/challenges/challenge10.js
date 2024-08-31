const navLinks = document.querySelectorAll('nav>ul>li>a');
const paragraphs = document.querySelectorAll('p');
for (let link of navLinks){
    link.addEventListener('click', function(){
        const paraNumber = "#para" + this.id; // constructs a string like paralink2
        // alert(paraNumber);
        for (let p of paragraphs){
            p.style.color = 'black';
        }
        const thisParagraph = document.querySelector(paraNumber);
        thisParagraph.style.color = 'red';
    })
}