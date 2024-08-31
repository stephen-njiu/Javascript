
$(window).on('load',function() {
    "use strict";

    const imageCount = $('#slider ul li').length;
    const imageWidth = $('#slider ul li img').first().width();
    const totalWidth = (imageWidth * imageCount) +'px';
    let position = 0;
    let counter = 0;

    $('#slider ul').css('width', totalWidth);


    setInterval(() => {
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
    }, 1800);

    // document.querySelector('#next').addEventListener('click', function(){
        
        
    // });
    
});

