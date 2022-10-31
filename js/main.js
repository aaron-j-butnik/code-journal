var $imageSubmit = document.querySelector('.image-submit');
var $imageUpdate = document.querySelector('img');

$imageSubmit.addEventListener('input', handlePhotoUpdate);

function handlePhotoUpdate(event) {
  $imageUpdate.setAttribute('src', event.target.value);
}
