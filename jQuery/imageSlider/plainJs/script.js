// In doing animations in JS, we perfom the animation/transitions in CSS and trigger then with js. 

window.addEventListener('load', function(){
    // how many slides?
    const slideCount = document.querySelectorAll('#slider-wrapper ul li').length;

    // how wide is each slide
    const sliderWidth = this.document.querySelector('#slider-wrapper').offsetWidth;

    // Total slider width
    const totalWidth = slideCount * sliderWidth + 'px';
    // Dom Elements
    const slider = document.querySelector('#slider-wrapper ul');
    const next = document.querySelector('#next');
    const previous  = document.querySelector('#prev');

    let leftPosition = 0;
    let counter = 0;
    slider.style.width = totalWidth;
    // Next Slide Click Handler - When you click the next button the slider will slide to the next slide. If the user is at the end of the slide strip, the slider will slide back to the beginning.

    next.addEventListener('click',function(event){
        event.preventDefault();
        counter ++;
        if (counter == slideCount){
            // Set the counter to 0
            counter = 0;
            // Set the left position to 0
            // move the slider into position
            slideCount.style.left = leftPosition;

        }
        
          // move the slider to the next slide
          leftPosition = `-${counter * sliderWidth}px`;
          slider.style.left = leftPosition;
       
    })

    previous.addEventListener('click',function(evt){
        counter --;
        if (counter < 0){
            counter = slideCount - 1; 
            leftPosition = `-${counter * sliderWidth}px`;
            slider.style.left = leftPosition;       
        }
        leftPosition = `-${counter * sliderWidth}px`;
        slider.style.left = leftPosition;
    })


});




























