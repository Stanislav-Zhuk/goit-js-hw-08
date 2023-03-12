import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

// DOM layout template
/*
<a class="gallery__item" href="large-image.jpg">
  <img class="gallery__image" src="small-image.jpg" alt="Image description" />
</a> 
*/

const galleryEl = document.querySelector('.gallery');

// creation gallery layout

const createGalleryMarkup = object => object.map(
    ({ original, preview, description }) =>
      `<div class="gallery__item">
          <a class="gallery__link" href=${original}>
            <img
                class="gallery__image"
                src=${preview}
                data-source=${original}
                alt='${description}'
            />
          </a>
      </div>`,
);

galleryEl.insertAdjacentHTML("afterbegin", createGalleryMarkup(galleryItems).join(""));

// use library SimpleLightbox
const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250
});