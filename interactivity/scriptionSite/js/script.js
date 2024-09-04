// All scripts done using Vanilla JS
// Smooth Scroll - Added via html scroll-behaviour: smooth;

const navLinks = document.querySelectorAll('header nav ul li a');
const sections = document.querySelectorAll('#page > section');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 160;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >=offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('selected');
                document.querySelector('nav ul li a[href*='+id+']').classList.add('selected');
            })
        }
    })
}

// Trigger the scroll event on page load to ensure the correct link is highlighted after refresh
window.onload = () => {
window.onscroll();
};

// Trigger the scroll event when the window is resized
window.onresize = () => {
window.onscroll();
};


// Flexslider

$(window).on('load',function (){
    $('.flexslider').flexslider({
        animation : 'slide',
        slideshowSpeed: 3000,
        pauseOnHover: true,
    });
});


// Tabs
// Capture all the tab links on the top
const tabs = document.querySelectorAll('#tabs > ul > li > a');
const allTabSections = document.querySelectorAll('#pricing > article > div');

for (let element of tabs){
    element.addEventListener('click', selectTab);
}

function selectTab(event){
    event.preventDefault();
    for(let element of tabs){
        element.removeAttribute('class');
    }
    event.target.className = 'activetab';
    const thisTab = event.target.getAttribute('href');
    const thisContent = document.querySelector(thisTab);
    for (let sec of allTabSections){
        sec.className = 'hidden';
        thisContent.className = 'visible';
    }
}

// Content Rotator


// Features Rotator 


