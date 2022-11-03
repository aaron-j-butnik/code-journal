var $imageSubmit = document.querySelector('.image-submit');
var $imageUpdate = document.querySelector('img');
var $submitForm = document.querySelector('#user-entry-form');

$imageSubmit.addEventListener('input', handlePhotoUpdate);
$submitForm.addEventListener('submit', handleSubmit);
window.addEventListener('DOMContentLoaded', handleDOMLoad);

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
  data.entries.unshift(userEntryData);

  $imageUpdate.setAttribute('src', 'images/placeholder-image-square.jpg');
  $submitForm.reset();

  $addDOMTree.prepend(renderEntry(userEntryData));
}

function renderEntry(entry) {
  var liColumnFull = document.createElement('li');
  liColumnFull.setAttribute('class', 'column-full');

  var divRow = document.createElement('div');
  divRow.setAttribute('class', 'row entry-ul');

  var divImg = document.createElement('div');
  divImg.setAttribute('class', 'column-half');

  var imgEntryEl = document.createElement('img');
  imgEntryEl.setAttribute('src', entry.url);
  imgEntryEl.setAttribute('class', 'entry-list-img');

  var h3Title = document.createElement('h3');
  var h3Content = document.createTextNode(entry.title);
  h3Title.setAttribute('class', 'entry-list-title');

  var divText = document.createElement('div');
  divText.setAttribute('class', 'column-half');

  var paragraph = document.createElement('p');
  var pContent = document.createTextNode(entry.notes);
  paragraph.setAttribute('class', 'entry-list-notes');

  liColumnFull.appendChild(divRow);
  divRow.appendChild(divImg);
  divRow.appendChild(divText);
  divImg.appendChild(imgEntryEl);
  divText.appendChild(h3Title);
  divText.appendChild(paragraph);

  h3Title.appendChild(h3Content);
  paragraph.appendChild(pContent);

  return liColumnFull;
}

var $addDOMTree = document.querySelector('.entry-ul');

function handleDOMLoad(event) {
  for (var i = 0; i < data.entries.length; i++) {
    $addDOMTree.appendChild(renderEntry(data.entries[i]));
  }
}
