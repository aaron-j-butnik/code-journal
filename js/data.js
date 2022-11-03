// /* exported data */

var data = {
  view: 'entry-form',
  entries: [],
  editing: null,
  nextEntryId: 1
};

var previousDataJSON = localStorage.getItem('user-entry-data-local-storage');

if (previousDataJSON !== null) {
  data = JSON.parse(previousDataJSON);
}

window.addEventListener('beforeunload', handleLocalStorage);

function handleLocalStorage(event) {
  var dataJSON = JSON.stringify(data);
  localStorage.setItem('user-entry-data-local-storage', dataJSON);
}

// var $entryForm = document.getElementById('entry-form');
// var $viewEntry = document.getElementById('view-entry');
// var $viewElements = document.querySelectorAll('.view');
