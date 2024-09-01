// // Smoothscroll Script...
// $('nav ul li a').click(function(){
//     var thisSection = $(this).attr('href');
//     var thisLink = $(this);
//     $('html').stop().animate({scrollTop: $(thisSection).offset().top - 200}, 800, 'easeOutCirc', function (){
//         $('nav ul li a').removeAttr('class');
//         thisLink.addClass('selected');
//     })
// })

// $(window).on('load', function (){
//     var posts = $('section');
//     var pageTop;
//     var postPos;
//     var counter = 0;
//     var postTops = []

//     posts.each(function(){
//         postTops.push(Math.floor($(this).offset().top));
//     });

//     console.log(postTops);

//     $(window).scroll(function(){
//        pageTop = $(window).scrollTop() + 210;
//        if (pageTop > postTops[counter+1]){
//         counter++;
//         console.log(`counter is now ${counter}`)
//        }


//     });
// });
 
// JAVASCRIPT STANDARD SECTION-NAV LINK SCROLL EFFECTS

var sections = document.querySelectorAll('section');
var navLinks = document.querySelectorAll('nav ul li a');

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


// COMMENTS
// *= This is an attribute selector that checks if the href attribute contains the value specified after it. The *= selector is called a "substring match" selector in CSS, which means it looks for elements where the attribute contains the specified substring.
// The href*= syntax is used to find a nav link whose href attribute contains the id of the current section.




