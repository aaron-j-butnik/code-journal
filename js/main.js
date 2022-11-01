var $imageSubmit = document.querySelector('.image-submit');
var $imageUpdate = document.querySelector('img');
// var $submitForm = document.querySelector('.user-entry-form');

$imageSubmit.addEventListener('input', handlePhotoUpdate);
// $submitForm = addEventListener('submit', handleSubmit);

function handlePhotoUpdate(event) {
  $imageUpdate.setAttribute('src', event.target.value);
}

// function handleSubmit(event) {

// }
