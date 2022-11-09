var $imageSubmit = document.querySelector('.image-submit');
var $imageUpdate = document.querySelector('img');
var $submitForm = document.querySelector('.user-entry-form');
var $addDOMTree = document.querySelector('.entry-ul');

$imageSubmit.addEventListener('input', handlePhotoUpdate);
$submitForm.addEventListener('submit', handleSubmit);
window.addEventListener('DOMContentLoaded', handleDOMLoad);
window.addEventListener('DOMContentLoaded', handlePageRefresh);

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

  var penIcon = document.createElement('a');
  penIcon.setAttribute('class', 'fa-solid fa-pencil');

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
  divText.appendChild(penIcon);
  divText.appendChild(paragraph);
  h3Title.appendChild(h3Content);
  paragraph.appendChild(pContent);

  liColumnFull.setAttribute('data-entry-id', entry.entryId);

  return liColumnFull;
}

function handleDOMLoad(event) {
  for (var i = 0; i < data.entries.length; i++) {
    $addDOMTree.appendChild(renderEntry(data.entries[i]));
  }
}

var $navBtn = document.querySelector('.nav-link');
var $newBtn = document.getElementById('new-btn');
var $viewElements = document.querySelectorAll('.view');
var $entryForm = document.getElementById('entry-form');
var $viewEntry = document.getElementById('view-entry');
var $saveBtn = document.getElementById('save-btn');

$navBtn.addEventListener('click', handleSwapToEntries);
$newBtn.addEventListener('click', handleSwapToNewEntry);
$saveBtn.addEventListener('click', handleSaveBtnSwap);

function handleSwapToEntries(event) {
  if (event.target.matches('a')) {
    for (var i = 0; i < $viewElements.length; i++) {
      if ($entryForm.getAttribute('data-view') === $viewElements[i].getAttribute('data-view')) {
        $viewElements[i].className = ('hidden');
      } else {
        $viewElements[i].className = ('view');
      }
    }
    data.view = 'entries';
  }
}

function handleSwapToNewEntry(event) {
  if (event.target.matches('a')) {
    for (var i = 0; i < $viewElements.length; i++) {
      if ($viewEntry.getAttribute('data-view') === $viewElements[i].getAttribute('data-view')) {
        $viewElements[i].className = ('hidden');
      } else {
        $viewElements[i].className = ('view');
      }
    }
    data.view = 'entry-form';
  }
}

function handleSaveBtnSwap(event) {
  for (var i = 0; i < $viewElements.length; i++) {
    if ($entryForm.getAttribute('data-view') === $viewElements[i].getAttribute('data-view')) {
      $viewElements[i].className = ('hidden');
    } else {
      $viewElements[i].className = ('view');
    }
  }
  data.view = 'entries';
}

function handlePageRefresh(event) {
  if (data.view === 'entry-form') {
    $entryForm.className = ('view');
    $viewEntry.className = ('hidden');
  } else if (data.view === 'entries') {
    $viewEntry.className = ('view');
    $entryForm.className = ('hidden');
  }
}

var $ulParentOfDOM = document.querySelector('.entry-ul');

$ulParentOfDOM.addEventListener('click', handleEditBtn);

function handleEditBtn(event) {
  var liColumnFull = event.target.closest('[data-entry-id]');
  // console.log(liColumnFull);
  if (event.target.matches('div.column-half > a')) {
    $entryForm.className = ('view');
    $viewEntry.className = ('hidden');
    for (var i = 0; i < data.entries.length; i++) {
      if (liColumnFull === data.entries[i].entryId) {
        data.editing = data.entries[i];
      }
    }
  }
}

// console.log();
