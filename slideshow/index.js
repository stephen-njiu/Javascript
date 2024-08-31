
(function () {
    "use strict";
    const myImages = ['image1.jpg', 'image2.jpg', 'image3.jpg', 'image4.jpg', 'image5.jpg']
    // if you are at the end of the array, give at the end of the array
    let currentImage = 0;
    const container = document.getElementById('content');

    // Swap function
    function swap(){
        var newSlide = document.createElement('img');
        newSlide.src = `${myImages[currentImage]}`;
        newSlide.className = 'fadeining';
        container.appendChild(newSlide);

        if (container.children.length > 2) {
            container.removeChild(container.children[0]);
        }
    }


    // Next button

    document.getElementById('next').addEventListener('click',function(event){
        event.preventDefault();

        currentImage++;
        if (currentImage > myImages.length - 1){currentImage = 0;}

        swap();

        // document.getElementById('myimage').src=myImages[currentImage]
    })
        
    //Previous button
    document.querySelector('#previous').addEventListener('click', function(event){
        event.preventDefault();
        
        currentImage--;
        if (currentImage < 0){currentImage = myImages.length - 1;}

        swap();

        // document.querySelector('#myimage').src = myImages[currentImage]
    })

}())

