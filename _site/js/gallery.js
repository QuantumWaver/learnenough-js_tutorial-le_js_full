
function activateGallery() {
  let thumbnails = document.querySelectorAll("#gallery-thumbs > div > img");
  let mainImage = document.querySelector("#gallery-photo > img");

  let imageInfoTitle = document.querySelector("#gallery-info > .title");
  let imageInfoDescription = document.querySelector("#gallery-info > .description");
  let currentClass = "current"

  thumbnails.forEach(function(thumbnail) {
    // Preload large images.
    let newImageSrc  = thumbnail.dataset.largeVersion;
    let largeVersion = new Image();
    largeVersion.src = newImageSrc;

    thumbnail.addEventListener("click", function() {
      // Set clicked image as main image.
      mainImage.setAttribute("src", newImageSrc);
      mainImage.setAttribute("alt", thumbnail.dataset.title);

      // Change which image is current.
      document.querySelector(`.${currentClass}`).classList.remove(currentClass);
      thumbnail.parentNode.classList.add(currentClass);

      // Update the image info displayed on the right
      imageInfoTitle.innerHTML = thumbnail.dataset.title
      imageInfoDescription.innerHTML = thumbnail.dataset.description
    });
  });
}
