var $imageSubmit = document.querySelector('.image-submit');
var $imageUpdate = document.querySelector('img');
var $submitForm = document.querySelector('#user-entry-form');

$imageSubmit.addEventListener('input', handlePhotoUpdate);
$submitForm.addEventListener('submit', handleSubmit);

function handlePhotoUpdate(event) {
  $imageUpdate.setAttribute('src', event.target.value);
}

function handleSubmit(event) {
  event.preventDefault();
  var userEntryData = {};

  userEntryData.title = $submitForm.elements.title.value;
  userEntryData.url = $submitForm.elements.url.value;
  userEntryData.notes = $submitForm.elements.notes.value;
  userEntryData.entryId = data.nextEntryId;
  data.nextEntryId++;
  data.entries = userEntryData;
  // console.log(data);
  $submitForm.reset();
}
