"use strict";

const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];
/*--------------
    CONFIG
--------------*/
//Milestone 1:
// 1.a Ora rimuoviamo i contenuti statici e usiamo l’array di oggetti letterali per popolare dinamicamente il carosello.
let currentImageIndex = 0;
const currentImageContainer = document.querySelector('.view');
const thumbsContainer = document.querySelector('.collection');

/*--------------
    MAIN
--------------*/

//Clono il template della pagina attraverso l'id
const templateCurrentImage = document.getElementById('current-image').content.cloneNode(true);
// Compilo l'html
templateCurrentImage.querySelector('img').src = images[currentImageIndex].image;
templateCurrentImage.querySelector('img').alt = images[currentImageIndex].title;
templateCurrentImage.querySelector('.description h3').innerHTML = images[currentImageIndex].title;
templateCurrentImage.querySelector('.description p').innerHTML = images[currentImageIndex].text;
// Lo stampo in pagina
currentImageContainer.append(templateCurrentImage);

// THUMBS
// Creo un ciclo con forEach
images.forEach((element) => {
    // Clono il template di thumbs
    const templateThumbs = document.getElementById('thumbs').content.cloneNode(true);
    // Compilo l'html
    templateThumbs.querySelector('img').src = element.image;
    templateThumbs.querySelector('img').alt = element.title;
    // Lo stampo in pagina
    thumbsContainer.append(templateThumbs);
});
// Al click dell'utente sulle frecce verso l'alto o il basso, l'immagine attiva diventerà visibile e dovremo aggiungervi titolo e testo.
const start = document.querySelector('.up').addEventListener('click', function() {
    document.querySelector('')
})
