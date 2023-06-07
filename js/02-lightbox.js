import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector('.gallery');
const items = [];

galleryItems.forEach(element => {
const galleryItem = document.createElement('ul');
galleryItem.className = 'gallery__item';

const galleryLink = document.createElement ('a')
galleryLink.className = 'gallery__link';
galleryLink.href = element.original;

const galleryImage = document.createElement('img');
galleryImage.className = 'gallery__image';
galleryImage.src = element.preview;
galleryImage.setAttribute('title', element.description);
galleryImage.alt = element.description;

galleryLink.append(galleryImage);
items.push(galleryLink);
})
gallery.append(...items);

new SimpleLightbox('.gallery a',{
    captionDelay: 250
})
