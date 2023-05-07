import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");
const div1 = document.createElement("div");
const list = document.createElement("ul");
list.classList.add("list");

div1.append(list);

function renderList() {
  const markup = galleryItems
    .map(
      ({ preview, original, description }) =>
        `<li class="gallery__item">
        <a class="gallery__link" href="${original}"> 
        <img 
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}" />
        </a>
        </li>`
    )
    .join("");
  gallery.innerHTML = markup;
}
renderList();

gallery.addEventListener("click", (e) => {
  e.preventDefault();
  // console.log(e);
  if (e.target.nodeName !== "IMG") {
    return;
  }
  const instance = basicLightbox.create(`
    <img src = ${e.target.dataset.source} width="800" height="600">
`);

  instance.show();

  gallery.addEventListener("keydown", (event) => {
    if (event.code === "Escape") {
      instance.close();
    }
  });
});
