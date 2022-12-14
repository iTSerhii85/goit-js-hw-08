// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";


// ! Получил доступ к диву
const galleryEl = document.querySelector('.gallery');

// ! Создал разметку
const markup = galleryItems.reduce
((acc,{preview, original, description}) => acc +
`<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt='${description}'/>
</a>`
,'');

// ! Добавил разметку
galleryEl.insertAdjacentHTML('beforeend', markup);

new SimpleLightbox('.gallery a');

