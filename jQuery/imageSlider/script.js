// // Add your JS here
// const imageCount = $('#slider ul li').length;
// const imageWidth = $('#slider ul li img').first().on ('load',function(){
//     alert(imageWidth);
// })

$(window).on('load',function() {
    "use strict";

    const imageCount = $('#slider ul li').length;
    const imageWidth = $('#slider ul li img').first().width();
    const totalWidth = (imageWidth * imageCount) +'px';
    let position = 0;
    let counter = 0;

    $('#slider ul').css('width', totalWidth);

    document.querySelector('#next').addEventListener('click', function(){
        counter ++;
        if (counter === imageCount){
            $('#slider ul').clone().appendTo('#slider');
            $('#slider ul').last().css('left',imageWidth + 'px');
            position = `-{totalWidth}`;

            $('#slider ul').last().animate({left:0}, 700, 'easeInQuad');
            $('#slider ul').first().animate({left:position}, 700, 'easeInQuad', function(){
                $('#slider ul').first().remove(); 
            });

            counter = 0;
        }
        else {
            position = `-${counter * imageWidth}px`;
        $('#slider ul').animate ({left: position}, 700, 'easeInQuad');
        } 
        
    });
    document.querySelector('#previous').addEventListener('click', function(){
        counter --;
        if (counter < 0){
            counter = imageCount - 1;
            $('#slider ul').clone().appendTo('#slider');
            $('#slider ul').last().css('left',`-${totalWidth}`);  
            position = `-${counter * imageWidth}px`;
            $('#slider ul').last().animate({left: position}, 700, 'easeInQuad');
            $('#slider ul').first().animte({left:`${imageWidth}px`}, 700, 'easeInQuad',function(){
                $('#slider ul').first().remove();
            })
        }else {
            position = `-${counter * imageWidth}px`;
            $('#slider ul').animate ({left: position}, 700, 'easeInQuad');
        }
        
    });
});


// Add a Few More Variables



