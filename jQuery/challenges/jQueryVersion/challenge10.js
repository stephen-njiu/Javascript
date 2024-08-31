$('nav ul li a').click(function (){
    const paraNumber = '#para'+ $(this).attr('id');// get the id of the element clicked
    $('p').css('color','black'); //set all p color to black
    $(paraNumber).css('color','red');
});