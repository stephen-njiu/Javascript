var detailsForm = document.getElementById('destination_details_form');

detailsForm.addEventListener('submit', handleFormSubmit);

function handleFormSubmit(event){
    event.preventDefault();
    //Getting the form values
    const destName = event.target.elements['name'].value;
    const destLocation = event.target.elements['location'].value;
    const destPhoto = event.target.elements['photo'].value;
    const destDesc = event.target.elements['description'].value;

    for(let i = 0; i < detailsForm.length; i ++){
        detailsForm.elements[i].value == ""; // clear all inputs
    }
    //create card here
    var destinationCard = createDestinationCard(destName, destLocation, destPhoto, destDesc);

    const wishlistContainer = document.getElementById('destination-container');

    if(wishlistContainer.children.length == 0){
        document.getElementById('title').innerHTML = 'My Wish List';
    }else {
        document.getElementById('title').innerHTML='Enter destination details';
    }

    document.querySelector('#destination-container').appendChild(destinationCard);
}

function createDestinationCard(name, location, photoURL, description){
    var card = document.createElement('div');
    card.className = 'card';

    var img = document.createElement('img');
    img.setAttribute('alt', name);

    var constantPhotoUrl = '/images/signpost.jpg';

    if (photoURL.length === 0){
        img.setAttribute('src',constantPhotoUrl);
        // img.src = constantPhotoUrl;
    }else {
        img.setAttribute('src', photoURL);
    }
    
    card.appendChild(img)

    var cardBody = document.createElement('div');
    cardBody.className = 'card-body';

    var cardTitle = document.createElement('h3');
    cardTitle.innerText = name;
    cardBody.appendChild(cardTitle);
    
    var cardSubtitle = document.createElement('h4');
    cardSubtitle.innerText = location;
    cardBody.appendChild(cardSubtitle);

    if (description.length !==0){
        var cardText = document.createElement('p');
        cardText.className = 'card-text';
        cardText.innerText = description;
        cardBody.appendChild(cardText)
    }

    var cardDeleteBtn = document.createElement('button');
    cardDeleteBtn.innerText = 'Remove';

    cardDeleteBtn.addEventListener('click', removeDestination);
    cardBody.appendChild(cardDeleteBtn);

    card.appendChild(cardBody);
    return card;
}

function removeDestination(event){
    var card = event.target.parentElement.parentElement;
    card.remove();
}




