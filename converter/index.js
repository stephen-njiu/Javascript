(function(){
    "use strict";
    let convertType = 'miles';
    const heading = document.querySelector('h1');
    const intro = document.querySelector('p');
    const answer = document.getElementById('answer')


    document.querySelector('#convert').addEventListener('submit', function (event) {
        event.preventDefault();
        const distance = parseFloat(document.getElementById('distance').value);
    
        if (distance) {
            // convert the distance and display the result using innerhtml
            // Miles to Kilometers = 1.609344
            // Kilometers to Miles = 0.621371192

            if (convertType == 'miles'){
                let conversion = (distance * 1.609344).toFixed(3);
            // alert(conversion);
    
            answer.innerHTML =`<h2>${distance} Miles converts to ${conversion} Kilometers</h2>`
            // console.log(conversion);
            }else if(convertType == 'kilometers'){
                let conversion = (distance * 0.621371192).toFixed(3);
                // alert(conversion);
        
                answer.innerHTML =`<h2>${distance} Kilometers converts to ${conversion} Miles</h2>`
            }

            
    
        }else {
            // display error
            answer.innerHTML = `<h2>Please Provide a Number!</h2>`;
        }
    });

    document.addEventListener('keydown', function(event){
        var key = event.code; // returns the key pressed in the keyboard.
        if(key === 'KeyK'){
            convertType = 'kilometers';
            heading.innerHTML = 'Kilometers to Miles Converter';
            intro.innerHTML = 'Type in a number of kilometers and click the button to convert the distance to miles.';

        }else if (key === 'KeyM'){
            convertType = 'miles';
            heading.innerHTML = 'Miles to Kilometers Converter';
            intro.innerHTML = 'Type in a number of miles and click the button to convert the distance to kilometers.';

        }
    })

}())


