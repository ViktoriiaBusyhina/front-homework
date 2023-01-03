'use strict';

console.log('Hello, World!')

const arrayOfImages = [];
arrayOfImages.push( 'https://zamanilka.ru/wp-content/uploads/2021/01/krasivie-kartinki-leta-97-1.jpg');
arrayOfImages.push('https://mirpozitiva.ru/wp-content/uploads/2019/11/1472042500_03.jpg');
arrayOfImages.push('https://img1.akspic.ru/previews/7/8/8/9/6/169887/169887-gorod-zdanie-purpur-tsvetnoy-liniya_gorizonta-550x310.jpg');
arrayOfImages.push('https://static4.depositphotos.com/1007330/391/i/600/depositphotos_3919019-stock-photo-resort.jpg');

const imgCards = document.querySelectorAll('.grid');

for(let i = 0; i <imgCards.length; i++ ){
    imgCards[i].setAttribute('scr', arrayOfImages[i]);
}

const largeImage = document.querySelector('#largeImg');
largeImage.setAttribute('src', arrayOfImages[4]);

function showThumbnail(newUrl) {
    largeImage.setAttribute('src', newUrl);
}

imgCards.forEach(card => card.addEventListener('mousedown', () => {
    let thumbnailUrl = card.getAttribute('scr');
    showThumbnail(thumbnailUrl);
}))
