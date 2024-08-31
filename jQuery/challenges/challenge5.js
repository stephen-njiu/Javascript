// use jas to change the color of paragraph that contains 'Llamas and Chickens!' to red.

allP = document.querySelectorAll('#main p');
for (p of allP){
    if (p.innerHTML == 'Llamas and Chickens'){
        p.style.color = 'red';
        p.style.fontSize = '36px';
    }
}