(function()
{
    //Strict mode for better error catching and security.
    'use strict'; 

//Gets the form element from the DOM using its ID    
const detailsForm = document.querySelector('#Destination_details_form1');

// Add submit event listener to the form
detailsForm.addEventListener("submit", handleFormSubmit);

// Function to handle form submission
function handleFormSubmit(event)
{
    // Prevent the default form submission behavior
    event.preventDefault();

    // Get values from form inputs
    const destName = event.target.elements["name"].value;
    const destLocation = event.target.elements["location"].value;
    const destPhoto = event.target.elements["photo"].value;
    const destDesc = event.target.elements["description"].value;

    //This for loop is to clear out the form details once entered and submitted.
    for (let i = 0; i < detailsForm.length; i++)
    {
        detailsForm.elements[i].value = "";

    }

    //Create a new card here with the form data
    const destCard = createDestinationCard(destName, destLocation, destPhoto, destDesc);

    // Get the container where cards will be displayed
    const wishListContainer = document.getElementById('destinations_container');

    if(wishListContainer.children.length === 0)
    {
        document.getElementById('title').innerHTML = "My Wish List";

    }
    // Add the newly created card to the container
    document.querySelector("#destinations_container").appendChild(destCard);

    
}

// Function to create a new destination card
function createDestinationCard(name, location, photoURL, description)
{
    // Create main card container
    const card = document.createElement('div');
    card.className = 'card';

    // Create and setup image element
    const img = document.createElement('img');
    img.setAttribute('alt', name);

    // Default image path
    const constantPhotoUrl = "images/Travel.jpg";

    // Use default image if no photo URL provided, otherwise use provided URL
    if(photoURL.length === 0)
    {
        img.setAttribute('src' , constantPhotoUrl);
    }
    else
    {
        img.setAttribute('src' , photoURL);

    }

    // Add image to card
    card.appendChild(img);

    // Create card body container
    const cardBody = document.createElement('div');
    cardBody.className = 'card-body';

    // Create and add title (destination name)
    const cardTitle = document.createElement("h4"); 
    cardTitle.innerText = name;
    cardBody.appendChild(cardTitle);

    // Create and add the title (location)
    const cardSubtittle = document.createElement("h4"); 
    cardSubtittle.innerText = location;
    cardBody.appendChild(cardSubtittle);

    // Add description if provided
    if (description.length !== 0)
    {
        const cardText = document.createElement("p");
        cardText.className = "card-text";
        cardText.innerText = description;
        cardBody.appendChild(cardText);

    }

    // Create and add delete button
    const cardDeleteBtn = document.createElement("button");
    cardDeleteBtn.innerText = "Remove";
    cardDeleteBtn.addEventListener("click" , removeDestination);
    cardBody.appendChild(cardDeleteBtn);

    // Add card body to main card
    card.appendChild(cardBody);

    return card;
}

// Function to remove a destination card
function removeDestination(event)
{
    // Get the card element and remove it from the DOM
    const card = event.target.parentElement.parentElement;
    card.remove();

}

})();